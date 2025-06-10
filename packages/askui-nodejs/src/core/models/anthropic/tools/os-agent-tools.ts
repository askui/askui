/* eslint-disable */
import { BetaTool } from '@anthropic-ai/sdk/resources/beta/messages/messages';
import {
  PC_KEY_VALUES,
  MODIFIER_KEY,
  MODIFIER_KEY_VALUES,
  PC_KEY,
  ANDROID_KEY,
  ANDROID_KEY_VALUES,
  PC_AND_MODIFIER_KEY,
} from '../../../../execution/dsl';

import { BaseAgentTool, ToolError, ToolResult } from './base';
import { ExecutionRuntime } from '../../../../execution/execution-runtime';
import {
  ControlCommand,
  ControlCommandCode,
  InputEvent,
  Action,
} from '../../../ui-control-commands';
import { Base64Image } from '../../../../utils/base_64_image/base-64-image';
import { AgentError } from './agent-errors';

export class OsAgentHandler {
  private targetResolution: { width: number; height: number } = { width: 1280, height: 800 };

  private screenDimensions: { width: number; height: number };

  private paddingInfo: {
    scaleFactor: number;
    scaledWidth: number;
    scaledHeight: number;
    padLeft: number;
    padTop: number;
  } | null = null;

  constructor(private AgentOsClient: ExecutionRuntime, screenDimensions: { width: number; height: number }) {
    this.screenDimensions = screenDimensions;
    this.updatePaddingInfo();
  }

  private updatePaddingInfo() {
    const targetAspectRatio = this.targetResolution.width / this.targetResolution.height;
    const screenAspectRatio = this.screenDimensions.width / this.screenDimensions.height;

    let scaledWidth: number;
    let scaledHeight: number;
    let scaleFactor: number;
    let padLeft = 0;
    let padTop = 0;

    if (targetAspectRatio > screenAspectRatio) {
      scaleFactor = this.targetResolution.height / this.screenDimensions.height;
      scaledWidth = Math.floor(this.screenDimensions.width * scaleFactor);
      scaledHeight = this.targetResolution.height;
      padLeft = Math.floor((this.targetResolution.width - scaledWidth) / 2);
    } else {
      scaleFactor = this.targetResolution.width / this.screenDimensions.width;
      scaledWidth = this.targetResolution.width;
      scaledHeight = Math.floor(this.screenDimensions.height * scaleFactor);
      padTop = Math.floor((this.targetResolution.height - scaledHeight) / 2);
    }

    this.paddingInfo = {
      scaleFactor,
      scaledWidth,
      scaledHeight,
      padLeft,
      padTop
    };
  }

  // Add image support to act, an check for function overload in typescript.

  static async createInstance(AgentOsClient: ExecutionRuntime): Promise<OsAgentHandler> {
    const base64ImageString = await AgentOsClient.getScreenshot();
    const image_info = await (await Base64Image.fromString(base64ImageString)).getInfo();
    return new OsAgentHandler(AgentOsClient, {
      width: image_info.width,
      height: image_info.height,
    });
  }

  getTargetResolution(): { width: number; height: number } {
    return this.targetResolution;
  }

  getScreenDimensions(): { width: number; height: number } {
    return this.screenDimensions;
  }

  setTargetResolution(width: number, height: number) {
    this.targetResolution = { width, height };
    this.updatePaddingInfo();
  }

  async takeScreenshot(): Promise<string> {
    const base64ImageString = await this.AgentOsClient.getScreenshot();
    const base64Image = await Base64Image.fromString(base64ImageString);
    const image_info = await base64Image.getInfo();
    this.screenDimensions = {
      width: image_info.width,
      height: image_info.height,
    };
    this.updatePaddingInfo();
    const resized_image = await base64Image.resizeWithSameAspectRatio(this.targetResolution.width, this.targetResolution.height);
    return resized_image.toString(false);
  }

  private scaleCoordinates(source: 'api' | 'computer', x: number, y: number): [number, number] {
    if (!this.paddingInfo) {
      throw new ToolError('Padding information not initialized');
    }

    const { scaleFactor, scaledWidth, scaledHeight, padLeft, padTop } = this.paddingInfo;

    if (source === 'api') {
      if (x > this.targetResolution.width || y > this.targetResolution.height || x < 0 || y < 0) {
        throw new ToolError(
          `Coordinates ${x}, ${y} are outside screen bounds `
          + `(${this.targetResolution.width}x${this.targetResolution.height})`,
        );
      }

      const adjustedX = x - padLeft;
      const adjustedY = y - padTop;

      if (adjustedX < 0 || adjustedX > scaledWidth || adjustedY < 0 || adjustedY > scaledHeight) {
        throw new ToolError(
          `Coordinates ${x}, ${y} are outside the scaled image area `
          + `(${scaledWidth}x${scaledHeight} with padding ${padLeft},${padTop})`,
        );
      }

      return [
        Math.round(adjustedX / scaleFactor),
        Math.round(adjustedY / scaleFactor),
      ];
    }

    const apiX = Math.round(x * scaleFactor) + padLeft;
    const apiY = Math.round(y * scaleFactor) + padTop;

    return [apiX, apiY];
  }

  async requestControl(controlCommand: ControlCommand): Promise<void> {
    for (const action of controlCommand.actions) {
      if (action.inputEvent === InputEvent.MOUSE_MOVE || action.inputEvent === InputEvent.MOUSE_SCROLL) {
        [action.position.x, action.position.y] = this.scaleCoordinates('api', action.position.x, action.position.y);
      }
    }
    await this.AgentOsClient.requestControl(controlCommand);
  }

  async mouseMove(x: number, y: number): Promise<void> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(InputEvent.MOUSE_MOVE, { x, y }, '', {})],
    );
    await this.requestControl(controlCommand);
  }

  async mouseClick(button: "left" | "right" | "middle", doubleClick: boolean): Promise<void> {
    let action: InputEvent = InputEvent.MOUSE_CLICK_LEFT;
    if (doubleClick) {
      if (button === "left") {
        action = InputEvent.MOUSE_CLICK_DOUBLE_LEFT;
      } else if (button === "right") {
        action = InputEvent.MOUSE_CLICK_DOUBLE_RIGHT;
      } else if (button === "middle") {
        action = InputEvent.MOUSE_CLICK_DOUBLE_MIDDLE;
      }
    } else {
      if (button === "right") {
        action = InputEvent.MOUSE_CLICK_RIGHT;
      } else if (button === "middle") {
        action = InputEvent.MOUSE_CLICK_MIDDLE;
      }
    }
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(action, { x: 0, y: 0 }, '', {})],
    );
    await this.requestControl(controlCommand);
  }

  async mouseScroll(dx: number, dy: number): Promise<void> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(InputEvent.MOUSE_SCROLL, { x: dx, y: dy }, '', {})],
    );
    await this.requestControl(controlCommand);
  }

  async mouseHoldLeftButtonDown(): Promise<void> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(InputEvent.MOUSE_DOWN, { x: 0, y: 0 }, '', {})],
    );
    await this.requestControl(controlCommand);
  }

  async mouseReleaseLeftButton(): Promise<void> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(InputEvent.MOUSE_UP, { x: 0, y: 0 }, '', {})],
    );
    await this.requestControl(controlCommand);
  }

  async desktopKeyPressAndRelease(key: PC_AND_MODIFIER_KEY, modifiers: MODIFIER_KEY[] = []): Promise<void> {
    let keyString: string = key;
    if (modifiers.length > 0) {
      keyString = `${modifiers.join('+')}+${key}`;
    }
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(InputEvent.PRESS_KEY_SEQUENCE, { x: 0, y: 0 }, keyString, {})],
    );
    await this.requestControl(controlCommand);
  }

  async desktopKeyHoldDown(key: PC_AND_MODIFIER_KEY, modifiers: MODIFIER_KEY[] = []): Promise<void> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(InputEvent.KEY_PRESS, { x: 0, y: 0 }, '', {
        key: key,
        modifiers: modifiers,
      })],
    );
    await this.requestControl(controlCommand);
  }

  async desktopKeyRelease(key: PC_AND_MODIFIER_KEY, modifiers: MODIFIER_KEY[] = []): Promise<void> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(InputEvent.KEY_RELEASE, { x: 0, y: 0 }, '', {
        key: key,
        modifiers: modifiers,
      })],
    );
    await this.requestControl(controlCommand);
  }

  async typeText(text: string): Promise<void> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(InputEvent.TYPE, { x: 0, y: 0 }, text, {})],
    );
    await this.requestControl(controlCommand);
  }
}

export class ScreenShotTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(): Promise<ToolResult> {
    const screenshot = await this.osAgentHandler.takeScreenshot();
    return {
      base64Images: [screenshot],
      output: `Screenshot was taken, with resolution width ${this.osAgentHandler.getTargetResolution().width} and height ${this.osAgentHandler.getTargetResolution().height}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'screenshot_tool',
      description: 'Takes a screenshot of the current screen and returns it as a base64 image.',
      input_schema: { type: 'object', properties: {}, required: [] },
    };
  }
}

export class MouseMoveTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    x: number;
    y: number;
  }): Promise<ToolResult> {
    await this.osAgentHandler.mouseMove(command.x, command.y);
    return {
      output: `Moved mouse to (${command.x}, ${command.y})`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'mouse_move_tool',
      description: 'Moves the mouse to the specified absolute coordinates. The top left corner of the screen is (0,0)',
      input_schema: {
        type: 'object',
        properties: {
          x: {
            type: 'number',
            description: 'The x (pixels from the left edge) coordinate to move the mouse to',
          },
          y: {
            type: 'number',
            description: 'The y (pixels from the top edge) coordinate to move the mouse to',
          },
        },
      },
    };
  }
}

export class MouseClickTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    button: 'left' | 'right' | 'middle';
    doubleClick: boolean;
  }): Promise<ToolResult> {
    await this.osAgentHandler.mouseClick(command.button, command.doubleClick);

    const returnedMessage = command.doubleClick ? `Double clicked ${command.button} button` : `Clicked ${command.button} button`;
    return {
      output: returnedMessage,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'mouse_click_tool',
      description: 'Clicks the specified button on the mouse',
      input_schema: {
        type: 'object',
        properties: {
          button: {
            type: 'string',
            enum: ['left', 'right', 'middle'],
            description: 'The button to click',
          },
          doubleClick: {
            type: 'boolean',
            description: 'Whether to double click the button',
          },
        },
        required: ['button', 'doubleClick'],
      },
    };
  }
}

export class MouseScrollTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    dx: number;
    dy: number;
  }): Promise<ToolResult> {
    await this.osAgentHandler.mouseScroll(command.dx, command.dy);
    return {
      output: `Scrolled by (${command.dx}, ${command.dy})`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'mouse_scroll_tool',
      description: 'Scrolls the mouse by the specified amount',
      input_schema: {
        type: 'object',
        properties: {
          dx: {
            type: 'number',
            description: 'The amount to scroll horizontally (positive is right, negative is left)',
          },
          dy: {
            type: 'number',
            description: 'The amount to scroll vertically (positive is down, negative is up)',
          },
        },
        required: ['dx', 'dy'],
      },
    };
  }
}

export class MouseDragAndDropTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  }): Promise<ToolResult> {
    await this.osAgentHandler.mouseMove(command.startX, command.startY);
    await this.osAgentHandler.mouseHoldLeftButtonDown();
    await this.osAgentHandler.mouseMove(command.endX, command.endY);
    await this.osAgentHandler.mouseReleaseLeftButton();
    return {
      output: `Dragged from (${command.startX}, ${command.startY}) to (${command.endX}, ${command.endY})`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'mouse_drag_and_drop_tool',
      description: 'Drags the mouse from the specified start coordinates to the specified end coordinates. The top left corner of the screen is (0,0)',
      input_schema: {
        type: 'object',
        properties: {
          startX: {
            type: 'number',
            description: 'The x (pixels from the left edge) coordinate of the start position',
          },
          startY: {
            type: 'number',
            description: 'The y (pixels from the top edge) coordinate of the start position',
          },
          endX: {
            type: 'number',
            description: 'The x (pixels from the left edge) coordinate of the end position',
          },
          endY: {
            type: 'number',
            description: 'The y (pixels from the top edge) coordinate of the end position',
          },
        },
        required: ['startX', 'startY', 'endX', 'endY'],
      },
    };
  }

}

export class MouseHoldLeftButtonDownTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(): Promise<ToolResult> {
    await this.osAgentHandler.mouseHoldLeftButtonDown();
    return {
      output: 'Holding down left mouse button',
    };
  }

  toParams(): BetaTool {
    return {
      name: 'mouse_hold_left_button_down_tool',
      description: 'Hold down the left mouse button at the current position.',
      input_schema: { type: 'object', properties: {}, required: [] },
    };
  }
}

export class MouseReleaseLeftButtonTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(): Promise<ToolResult> {
    await this.osAgentHandler.mouseReleaseLeftButton();
    return {
      output: 'Released left mouse button',
    };
  }

  toParams(): BetaTool {
    return {
      name: 'mouse_release_left_button_tool',
      description: 'Release the left mouse button at the current position.',
      input_schema: { type: 'object', properties: {}, required: [] },
    };
  }

}

export class DesktopPressAndReleaseKeysTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    key: PC_KEY;
    modifiers?: MODIFIER_KEY[];
  }): Promise<ToolResult> {
    const modifiers = command.modifiers || [];
    await this.osAgentHandler.desktopKeyPressAndRelease(command.key, modifiers);
    return {
      output: `Pressed key ${command.key} with modifiers ${modifiers.join(' ')}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'desktop_key_press_sequence_tool',
      description: 'Presses a key with optional modifiers',
      input_schema: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            enum: PC_KEY_VALUES,
            description: 'The key to press',
          },
          modifiers: {
            type: 'array',
            items: {
              type: 'string',
              enum: MODIFIER_KEY_VALUES,
            },
            description: 'The modifiers to press',
          },
        },
        required: ['key'],
      },
    };
  }
}

export class DesktopKeyHoldDownTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    key: PC_AND_MODIFIER_KEY,
    modifiers?: MODIFIER_KEY[];
  }): Promise<ToolResult> {
    const modifiers = command.modifiers || [];
    await this.osAgentHandler.desktopKeyHoldDown(command.key, modifiers);
    return {
      output: `Holding down key ${command.key} with modifiers ${modifiers.join(' ')}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'desktop_key_hold_down_tool',
      description: 'Hold down a key and optional modifiers. Keys will be still pressed after the tool is finished.',
      input_schema: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            enum: [...PC_KEY_VALUES, ...MODIFIER_KEY_VALUES],
            description: 'The key to hold down',
          },
          modifiers: {
            type: 'array',
            items: {
              type: 'string',
              enum: MODIFIER_KEY_VALUES,
            },
            description: 'The modifiers to hold down',
          },
        },
        required: ['key'],
      },
    };
  }
}

export class DesktopKeyReleaseTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    key: PC_AND_MODIFIER_KEY,
    modifiers?: MODIFIER_KEY[];
  }): Promise<ToolResult> {
    const modifiers = command.modifiers || [];
    await this.osAgentHandler.desktopKeyRelease(command.key, modifiers);
    return {
      output: `Released key ${command.key} with modifiers ${modifiers.join(' ')}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'desktop_key_release_tool',
      description: 'Releases a key and optional modifiers. This can be used after keys were held down with the desktop_key_hold_down_tool',
      input_schema: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            enum: [...PC_KEY_VALUES, ...MODIFIER_KEY_VALUES],
            description: 'The key to release',
          },
          modifiers: {
            type: 'array',
            items: {
              type: 'string',
              enum: MODIFIER_KEY_VALUES,
            },
            description: 'The modifiers to release',
          },
        },
        required: ['key'],
      },
    };
  }
}

export class TypeTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    text: string;
  }): Promise<ToolResult> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(
        InputEvent.TYPE,
        { x: 0, y: 0 },
        command.text,
        {},
      )],
    );
    await this.osAgentHandler.requestControl(controlCommand);
    return {
      output: `Typed text: ${command.text}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'type_tool',
      description: 'Types the specified text',
      input_schema: {
        type: 'object',
        properties: {
          text: {
            type: 'string',
            description: 'The text to type',
          },
        },
        required: ['text'],
      },
    };
  }
}

export class AndroidSingleKeyPressTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    key: ANDROID_KEY;
  }): Promise<ToolResult> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(
        InputEvent.PRESS_KEY_SEQUENCE,
        { x: 0, y: 0 },
        command.key,
        {},
      )],
    );
    await this.osAgentHandler.requestControl(controlCommand);
    return {
      output: `Pressed Android key ${command.key}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'android_single_key_press_tool',
      description: 'Presses a single Android key',
      input_schema: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            enum: ANDROID_KEY_VALUES,
            description: 'The Android key to press',
          },
        },
        required: ['key'],
      },
    };
  }
}

export class AndroidSequenceKeyPressTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    keys: ANDROID_KEY[];
  }): Promise<ToolResult> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(
        InputEvent.PRESS_KEY_SEQUENCE,
        { x: 0, y: 0 },
        command.keys.join(' '),
        {},
      )],
    );
    await this.osAgentHandler.requestControl(controlCommand);
    return {
      output: `Pressed Android keys: ${command.keys.join(', ')}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'android_sequence_key_press_tool',
      description: 'Presses a sequence of Android keys',
      input_schema: {
        type: 'object',
        properties: {
          keys: {
            type: 'array',
            items: {
              type: 'string',
              enum: ANDROID_KEY_VALUES,
            },
            description: 'The sequence of Android keys to press',
          },
        },
        required: ['keys'],
      },
    };
  }
}

export class AgentErrorTool extends BaseAgentTool {
  constructor() {
    super();
  }

  async execute(command: {
    error: string;
  }): Promise<ToolResult> {
    throw new AgentError(command.error);
  }

  toParams(): BetaTool {
    return {
      name: 'agent_error_tool',
      description: 'Raises an error in the agent',
      input_schema: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'The error message to raise',
          },
        },
        required: ['error'],
      },
    };
  }
}

export class ExecuteShellCommandTool extends BaseAgentTool {
  constructor(
    private osAgentHandler: OsAgentHandler,
  ) {
    super();
  }

  async execute(command: {
    command: string;
  }): Promise<ToolResult> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(
        InputEvent.EXECUTE_COMMAND,
        { x: 0, y: 0 },
        command.command,
        {},
      )],
    );
    await this.osAgentHandler.requestControl(controlCommand);
    return {
      output: `Executed shell command: ${command.command}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'execute_shell_command_tool',
      description: 'Executes a shell command',
      input_schema: {
        type: 'object',
        properties: {
          command: {
            type: 'string',
            description: 'The shell command to execute',
          },
        },
        required: ['command'],
      },
    };
  }
}

export class WaitTool extends BaseAgentTool {
  constructor() {
    super();
  }

  async execute(command: {
    milliseconds: number;
  }): Promise<ToolResult> {
    await new Promise(resolve => setTimeout(resolve, command.milliseconds));
    return {
      output: `Waited for ${command.milliseconds} milliseconds`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'wait_tool',
      description: 'Waits for a specified number of milliseconds',
      input_schema: {
        type: 'object',
        properties: {
          milliseconds: {
            type: 'number',
            description: 'The number of milliseconds to wait',
          },
        },
        required: ['milliseconds'],
      },
    };
  }
} 
