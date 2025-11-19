import {
  DesktopPressAndReleaseKeysTool,
  MouseClickTool,
  MouseMoveTool,
  MouseScrollTool,
  OsAgentHandler,
  ScreenShotTool,
  TypeTool,
  AgentErrorTool,
  AndroidSequenceKeyPressTool,
  AndroidSingleKeyPressTool,
  ExecuteShellCommandTool,
  DesktopKeyHoldDownTool,
  DesktopKeyReleaseTool,
  MouseReleaseLeftButtonTool,
  MouseHoldLeftButtonDownTool,
  MouseDragAndDropTool,
  WaitTool,
  PrintTool,
  AndroidSwipeTool,
  AndroidDragAndDropTool,
  AndroidTapTool,
  AndroidShellCommandTool,
} from './tools/os-agent-tools';
import { BaseAgentTool } from './tools/base';
import { ClaudeAgent } from './claude-agent';
import { ExecutionRuntime } from '../../../execution/execution-runtime';

export class AskUIAgent extends ClaudeAgent {
  private osAgentHandler: OsAgentHandler | undefined = undefined;

  private executionRuntime: ExecutionRuntime;

  private runtime: 'android' | 'desktop' = 'desktop';

  constructor(executionRuntime: ExecutionRuntime) {
    super((params) => executionRuntime.predictActResponse(params));
    this.executionRuntime = executionRuntime;
  }

  isConnected(): boolean {
    return this.osAgentHandler !== undefined;
  }

  async initializeOsAgentHandler() {
    this.osAgentHandler = await OsAgentHandler.createInstance(this.executionRuntime);
    this.runtime = this.osAgentHandler.runtime;
  }

  getOsAgentHandler(): OsAgentHandler {
    if (!this.osAgentHandler) {
      throw new Error('Agent OS client is not connected');
    }
    return this.osAgentHandler;
  }

  async configureAgent() {
    if (!this.osAgentHandler) {
      throw new Error('Agent OS client is not connected');
    }
    let systemPrompt = AskUIAgent.DesktopSystemPrompt;
    let tools: BaseAgentTool[] = [
      new AgentErrorTool(),
      new PrintTool(),
      new WaitTool(),
      new ScreenShotTool(this.osAgentHandler),
      new TypeTool(this.osAgentHandler),
    ];

    if (this.runtime === 'desktop') {
      tools = [
        ...tools,
        new MouseMoveTool(this.osAgentHandler),
        new MouseClickTool(this.osAgentHandler),
        new MouseScrollTool(this.osAgentHandler),
        new DesktopPressAndReleaseKeysTool(this.osAgentHandler),
        new DesktopKeyHoldDownTool(this.osAgentHandler),
        new DesktopKeyReleaseTool(this.osAgentHandler),
        new MouseHoldLeftButtonDownTool(this.osAgentHandler),
        new MouseReleaseLeftButtonTool(this.osAgentHandler),
        new MouseDragAndDropTool(this.osAgentHandler),
        new ExecuteShellCommandTool(this.osAgentHandler),

      ];
    }

    if (this.runtime === 'android') {
      tools = [
        ...tools,
        new AndroidSingleKeyPressTool(this.osAgentHandler),
        new AndroidSequenceKeyPressTool(this.osAgentHandler),
        new AndroidSwipeTool(this.osAgentHandler),
        new AndroidDragAndDropTool(this.osAgentHandler),
        new AndroidTapTool(this.osAgentHandler),
        new AndroidShellCommandTool(this.osAgentHandler),
        new AndroidADBTypeTextTool(this.osAgentHandler),
      ];
      systemPrompt = AskUIAgent.AndroidSystemPrompt;
    }

    this.setTools(tools);
    this.setSystemPrompt(systemPrompt);
  }

  private static DesktopSystemPrompt = `
<SYSTEM_CAPABILITY>
You are an autonomous AI assistant operating on a ${process.platform} machine with ${process.arch} architecture. You have full access to the system and internet connectivity.
Your main goal is to mimic a human user interacting with a desktop computer.
Use a mouse and keyboard to interact with a computer, and take screenshots.
* This is an interface to a desktop GUI. You do not have access to a terminal or applications menu. You must click on desktop icons to start applications.
* Some applications may take time to start or process actions, so you may need to wait and take successive screenshots to see the results of your actions. E.g. if you click on Firefox and a window doesn't open, try taking another screenshot.
* Whenever you intend to move the cursor to click on an element like an icon, you should consult a screenshot to determine the coordinates of the element before moving the cursor.
* If you tried clicking on a program or link but it failed to load, even after waiting, try adjusting your cursor position so that the tip of the cursor visually falls on the element that you want to click.
* Make sure to click any buttons, links, icons, etc with the cursor tip in the center of the element. Don't click boxes on their edges unless asked.
Current Date: ${new Date().toUTCString()} UTC
</SYSTEM_CAPABILITY>

<OPERATIONAL_GUIDELINES>
1. Autonomous Operation:
   * Work independently to achieve user goals
   * Make informed decisions based on available information
   * Chain multiple actions efficiently when possible
   * Verify results after each significant action

2. Web Interaction:
   * Launch appropriate browser if not already open
   * Ensure full page visibility through zoom or scrolling
   * Handle browser-specific behaviors (e.g., Firefox startup wizard)
   * Extract and process PDF content when encountered

3. Error Handling:
   * Detect and analyze failure points
   * Implement appropriate recovery strategies
   * Report issues with clear diagnostic information
   * Use the error tool when stuck or unable to proceed

4. Performance Optimization:
   * Batch related actions when possible
   * Minimize unnecessary screen captures
   * Use efficient navigation patterns
   * Maintain context between actions

5. Safety and Validation:
   * Verify coordinates are within screen bounds
   * Validate input parameters before execution
   * Ensure proper cleanup after operations
   * Maintain system stability
</OPERATIONAL_GUIDELINES>

<IMPORTANT_NOTES>
* When you are stuck or unable to proceed, use the error tool to raise an error.
* Always verify tool availability before use
* Use screenshots strategically for state analysis
* Report issues promptly with clear diagnostic information
* Maintain awareness of screen boundaries and coordinate validity
* Adapt to unexpected situations with appropriate fallback strategies
</IMPORTANT_NOTES>
`;

  private static AndroidSystemPrompt = `
<SYSTEM_CAPABILITY>
You are an autonomous AI assistant operating on an Android device via ADB. The host machine is ${process.platform} with ${process.arch} architecture and internet connectivity.
Your main goal is to mimic a human user interacting with an Android device. So you should try to use the tools in a way that a human would use a touch screen to interact with an Android device.
Use a gestures and adb commands to interact with the android device, and take screenshots.
* Some applications may take time to start or process actions, so you may need to wait and take successive screenshots to see the results of your actions. E.g. if you click on Firefox and a window doesn't open, try taking another screenshot.
* Whenever you intend to move the cursor to click on an element like an icon, you should consult a screenshot to determine the coordinates of the element before moving the cursor.
* If you tried clicking on a program or link but it failed to load, even after waiting, try adjusting your cursor position so that the tip of the cursor visually falls on the element that you want to click.
* Make sure to click any buttons, links, icons, etc with the cursor tip in the center of the element. Don't click boxes on their edges unless asked.
Current Date: ${new Date().toUTCString()} UTC
</SYSTEM_CAPABILITY>

<OPERATIONAL_GUIDELINES>
1. Autonomous Operation:
   * Work independently to achieve user goals
   * Make informed decisions based on available information
   * Chain multiple actions efficiently when possible
   * Verify results after each significant action

2. Screen Interaction:
   * Analyze screen state before interactions
   * Use appropriate input methods (touch, keys)
   * Handle dynamic UI elements effectively
   * Implement efficient navigation patterns

3. Error Handling:
   * Detect and analyze failure points
   * Implement appropriate recovery strategies
   * Report issues with clear diagnostic information
   * Use the error tool when stuck or unable to proceed

4. Performance Optimization:
   * Batch related actions when possible
   * Minimize unnecessary screen captures
   * Use efficient navigation patterns
   * Maintain context between actions

5. Safety and Validation:
   * Verify coordinates are within screen bounds
   * Validate input parameters before execution
   * Ensure proper cleanup after operations
   * Maintain device stability
</OPERATIONAL_GUIDELINES>

<IMPORTANT_NOTES>
* When you are stuck or unable to proceed, use the error tool to raise an error.
* Always verify tool availability before use
* Use screenshots strategically for state analysis
* Ensure all coordinates are integers and within screen bounds
* Handle permission issues and device state appropriately
* Report issues promptly with clear diagnostic information
* Adapt to unexpected situations with appropriate fallback strategies
</IMPORTANT_NOTES>
`;
}
