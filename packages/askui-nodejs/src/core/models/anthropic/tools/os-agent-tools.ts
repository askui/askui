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
  private TargetResolution: { width: number; height: number } = { width: 1280, height: 800 };

  private screenDimensions: { width: number; height: number };

  constructor(private AgentOsClient: ExecutionRuntime, screenDimensions: { width: number; height: number }) {
    this.screenDimensions = screenDimensions;
  }

  static async createInstance(AgentOsClient: ExecutionRuntime): Promise<OsAgentHandler> {
    const base64ImageString = await AgentOsClient.getScreenshot();
    const image_info = await (await Base64Image.fromString(base64ImageString)).getInfo();
    return new OsAgentHandler(AgentOsClient, {
      width: image_info.width,
      height: image_info.height,
    });
  }

  getTargetResolution(): { width: number; height: number } {
    return this.TargetResolution;
  }

  setTargetResolution(width: number, height: number) {
    this.TargetResolution = { width, height };
  }

  async takeScreenshot(): Promise<string> {
    const base64ImageString = await this.AgentOsClient.getScreenshot();
    const base64Image = await Base64Image.fromString(base64ImageString);
    const image_info = await base64Image.getInfo();
    this.screenDimensions = {
      width: image_info.width,
      height: image_info.height,
    };
    const resized_image = await base64Image.resizeWithSameAspectRatio(this.TargetResolution.width, this.TargetResolution.height);
    return resized_image.toString(false);
  }

  private scaleCoordinates(source: 'api' | 'computer', x: number, y: number): [number, number] {
    const xScalingFactor = this.TargetResolution.width / this.screenDimensions.width;
    const yScalingFactor = this.TargetResolution.height / this.screenDimensions.height;

    if (source === 'api') {
      if (x > this.TargetResolution.width || y > this.TargetResolution.height || x < 0 || y < 0) {
        throw new ToolError(
          `Coordinates ${x}, ${y} are outside screen bounds `
          + `(${this.TargetResolution.width}x${this.TargetResolution.height})`,
        );
      }

      return [
        Math.round(x / xScalingFactor),
        Math.round(y / yScalingFactor),
      ];
    }

    return [
      Math.round(x * xScalingFactor),
      Math.round(y * yScalingFactor),
    ];
  }

  async requestControl(controlCommand: ControlCommand): Promise<void> {
    for (const action of controlCommand.actions) {
      [action.position.x, action.position.y] = this.scaleCoordinates('api', action.position.x, action.position.y);
    }
    await this.AgentOsClient.requestControl(controlCommand);
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
      description: 'Takes a screenshot of the current screen and returns it as a base64 image',
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
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(
        InputEvent.MOUSE_MOVE,
        { x: command.x, y: command.y },
        '',
        {},
      )],
    );
    await this.osAgentHandler.requestControl(controlCommand);
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
            description: 'The x coordinate of the element to click on',
          },
          y: {
            type: 'number',
            description: 'The y coordinate of the element to click on',
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
    let controlCommand: ControlCommand | undefined;
    if (command.doubleClick) {
      if (command.button === 'left') {
        controlCommand = new ControlCommand(
          ControlCommandCode.OK,
          [new Action(InputEvent.MOUSE_CLICK_DOUBLE_LEFT, { x: 0, y: 0 }, '', {})],
        );
      }

      if (command.button === 'right') {
        controlCommand = new ControlCommand(
          ControlCommandCode.OK,
          [new Action(InputEvent.MOUSE_CLICK_DOUBLE_RIGHT, { x: 0, y: 0 }, '', {})],
        );
      }

      if (command.button === 'middle') {
        controlCommand = new ControlCommand(
          ControlCommandCode.OK,
          [new Action(InputEvent.MOUSE_CLICK_DOUBLE_MIDDLE, { x: 0, y: 0 }, '', {})],
        );
      }
    } else {
      if (command.button === 'left') {
        controlCommand = new ControlCommand(
          ControlCommandCode.OK,
          [new Action(InputEvent.MOUSE_CLICK_LEFT, { x: 0, y: 0 }, '', {})],
        );
      }

      if (command.button === 'right') {
        controlCommand = new ControlCommand(
          ControlCommandCode.OK,
          [new Action(InputEvent.MOUSE_CLICK_RIGHT, { x: 0, y: 0 }, '', {})],
        );
      }

      if (command.button === 'middle') {
        controlCommand = new ControlCommand(
          ControlCommandCode.OK,
          [new Action(InputEvent.MOUSE_CLICK_MIDDLE, { x: 0, y: 0 }, '', {})],
        );
      }
    }
    if (!controlCommand) {
      throw new ToolError('Invalid input parameter for mouse click tool');
    }
    await this.osAgentHandler.requestControl(controlCommand);

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
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(
        InputEvent.MOUSE_SCROLL,
        { x: command.dx, y: command.dy },
        '',
        {},
      )],
    );
    await this.osAgentHandler.requestControl(controlCommand);
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
            description: 'The amount to scroll horizontally',
          },
          dy: {
            type: 'number',
            description: 'The amount to scroll vertically',
          },
        },
        required: ['dx', 'dy'],
      },
    };
  }
}

export class DesktopKeyPressSequenceTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    key: PC_KEY;
    firstModifier?: MODIFIER_KEY;
    secondModifier?: MODIFIER_KEY;
  }): Promise<ToolResult> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(
        InputEvent.PRESS_KEY_SEQUENCE,
        { x: 0, y: 0 },
        command.key,
        {
          firstModifier: command.firstModifier || '',
          secondModifier: command.secondModifier || '',
        },
      )],
    );
    await this.osAgentHandler.requestControl(controlCommand);
    return {
      output: `Pressed key ${command.key} with modifiers ${command.firstModifier || ''} ${command.secondModifier || ''}`,
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
          firstModifier: {
            type: 'string',
            enum: MODIFIER_KEY_VALUES,
            description: 'The first modifier key',
          },
          secondModifier: {
            type: 'string',
            enum: MODIFIER_KEY_VALUES,
            description: 'The second modifier key',
          },
        },
        required: ['key'],
      },
    };
  }
}

export class DesktopKeySequenceHoldDownTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    key: PC_KEY,
    modifiers: MODIFIER_KEY[]
  }): Promise<ToolResult> {
    const modifiers = command.modifiers || [];
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(InputEvent.KEY_PRESS, { x: 0, y: 0 }, '', {
        key: command.key,
        modifiers: modifiers,
      })],
    );
    await this.osAgentHandler.requestControl(controlCommand);
    return {
      output: `Pressed key ${command.key} with modifiers ${modifiers.join(' ')}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'desktop_key_sequence_hold_down_tool',
      description: 'Holds down a key with optional modifiers',
      input_schema: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            enum: PC_KEY_VALUES,
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

export class DesktopSingleKeyHoldDownTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    key: PC_AND_MODIFIER_KEY,
  }): Promise<ToolResult> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(InputEvent.KEY_PRESS, { x: 0, y: 0 }, '', {
        key: command.key,
      })],
    );
    await this.osAgentHandler.requestControl(controlCommand);
    return {
      output: `Pressed key ${command.key}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'desktop_single_key_hold_down_tool',
      description: 'Holds down a single key',
      input_schema: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            enum: [...PC_KEY_VALUES, ...MODIFIER_KEY_VALUES],
            description: 'The key to hold down',
          },
        },
        required: ['key'],
      },
    };
  }
}

export class DesktopKeySequenceReleaseTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    key: PC_KEY,
    modifiers: MODIFIER_KEY[],
  }): Promise<ToolResult> {
    const modifiers = command.modifiers || [];
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(InputEvent.KEY_RELEASE, { x: 0, y: 0 }, '', {
        key: command.key,
        modifiers: modifiers,
      })],
    );
    await this.osAgentHandler.requestControl(controlCommand);
    return {
      output: `Released key ${command.key} with modifiers ${modifiers.join(' ')}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'desktop_key_sequence_release_tool',
      description: 'Releases a key with optional modifiers',
      input_schema: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            enum: PC_KEY_VALUES,
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

export class DesktopSingleKeyReleaseTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    key: PC_AND_MODIFIER_KEY,
  }): Promise<ToolResult> {
    const controlCommand = new ControlCommand(
      ControlCommandCode.OK,
      [new Action(InputEvent.KEY_RELEASE, { x: 0, y: 0 }, '', {
        key: command.key,
      })],
    );
    await this.osAgentHandler.requestControl(controlCommand);
    return {
      output: `Released key ${command.key}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'desktop_single_key_release_tool',
      description: 'Releases a single key',
      input_schema: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            enum: [...PC_KEY_VALUES, ...MODIFIER_KEY_VALUES],
            description: 'The key to release',
          },
        },
        required: ['key'],
      },
    };
  }
}




export class DesktopSingleKeyPressTool extends BaseAgentTool {
  constructor(private osAgentHandler: OsAgentHandler) {
    super();
  }

  async execute(command: {
    key: PC_AND_MODIFIER_KEY;
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
      output: `Pressed key ${command.key}`,
    };
  }

  toParams(): BetaTool {
    return {
      name: 'desktop_single_key_press_tool',
      description: 'Presses a single key',
      input_schema: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            enum: [...PC_KEY_VALUES, ...MODIFIER_KEY_VALUES],
            description: 'The key to press',
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