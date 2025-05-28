/* eslint-disable */
import { AgentError } from './agent-errors';

export interface ToolResult {
  output?: string;
  error?: string;
  base64Images?: string[];
  system?: string;
}

export class ToolFailure implements ToolResult {
  constructor(
    public error: string,
  ) {}
}

export class ToolError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ToolError';
  }
}

export abstract class BaseAgentTool {
  abstract execute(params: Record<string, any>): Promise<ToolResult>;

  abstract toParams(): any;

  get ToolName(): string {
    return this.constructor.name;
  }
}

export class ToolCollection {
  private toolMap: Map<string, BaseAgentTool>;

  constructor(tools: BaseAgentTool[]) {
    this.toolMap = new Map();
    tools.forEach((tool) => {
      const params = tool.toParams();
      this.toolMap.set(params.name, tool);
    });
  }

  toParams(): any[] {
    return Array.from(this.toolMap.values()).map((tool) => tool.toParams());
  }

  async run(name: string, toolInput: Record<string, any>): Promise<ToolResult> {
    const tool = this.toolMap.get(name);
    if (!tool) {
      return new ToolFailure(`Tool ${name} is invalid`);
    }

    try {
      return await tool.execute(toolInput);
    } catch (err) {
      if (err instanceof AgentError) {
        throw err;
      }

      if (err instanceof ToolError) {
        return new ToolFailure(err.message);
      }

      return new ToolFailure(`Unknown error: ${err}`);
    }
  }
}
