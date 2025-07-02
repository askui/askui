/* eslint-disable */
import { Beta } from '@anthropic-ai/sdk/resources';
import { BaseAgentTool, ToolCollection, ToolResult } from './tools/base';
import { logger } from '../../../lib/logger';
import { BetaMessageParam } from '@anthropic-ai/sdk/resources/beta/messages';
import { Base64Image } from '../../../utils/base_64_image/base-64-image';

type PredictActResponseFunction = (params: {
    max_tokens: number;
    messages: Beta.BetaMessageParam[];
    model: string;
    system?: string;
    tools?: any[];
    betas?: string[];
    tool_choice?: {
        type: 'tool' | 'any' | 'auto';
        name?: string;
    };
}) => Promise<Beta.BetaMessage>;

export type AgentHistory = BetaMessageParam[];

export interface ActOptions {
    chatId?: string,
    agentHistory?: Beta.BetaMessageParam[],
}

export class ClaudeAgent {
    private maxTokens = 4096;
    private onlyNMostRecentImages = 3;
    private imageTruncationThreshold = 10;
    private systemPrompt = '';
    private model = 'claude-sonnet-4-20250514';
    private betas = ['computer-use-2025-01-24'];
    private _toolCollection: ToolCollection | undefined = undefined;
    private tools: BaseAgentTool[] = [];
    private history: { [key: string]: Beta.BetaMessageParam[] } = {};
    private toolChoice: {
        type: 'tool' | 'any' | 'auto';
        name?: string;
    } = {
        type: 'auto',
    };

    constructor(
        private predictActResponseFunction: PredictActResponseFunction
    ) {
    }

    setToolChoice(toolChoice: {
        type: 'tool' | 'any' | 'auto';
        name?: string;
    }) {
        this.toolChoice = toolChoice;
    }

    setTools(tools: BaseAgentTool[]) {
        this._toolCollection = undefined;
        this.tools = tools;
    }

    addTool(tool: BaseAgentTool) {
        this._toolCollection = undefined;
        this.tools.push(tool);
    }

    listToolNames(): string[] {
        return this.tools.map((tool) => tool.ToolName);
    }

    removeToolByName(toolName: string) {
        this.tools = this.tools.filter((tool) => tool.ToolName !== toolName);
    }

    setSystemPrompt(systemPrompt: string) {
        const enhancedPrompt = `${systemPrompt}
        If you cannot complete a request due to safety concerns, please:
        1. Explain what specific aspect is problematic
        2. Suggest alternative approaches that would be acceptable
        3. Provide partial assistance where possible within guidelines.
        Raise an exception After you have provided the above information. include the error message in the exception.
        `;

        this.systemPrompt = enhancedPrompt;
    }

    private IsConfigured(): boolean {
        return this.tools.length > 0 && this.systemPrompt !== '';
    }

    private get toolCollection() {
        if (!this._toolCollection) {
            this._toolCollection = new ToolCollection(this.tools);
        }
        return this._toolCollection;
    }

    private setHistory(key: string, messages: Beta.BetaMessageParam[]) {
        this.history[key] = messages;
    }

    private getHistory(key: string) {
        return this.history[key] || [];
    }

    async act(
        goal: string,
        imagePathOrBase64String?: string,
        options?: ActOptions
    ): Promise<Beta.BetaMessageParam[]> {
        if (!goal.trim()) {
            throw new Error('Goal cannot be empty');
        }

        if (!this.IsConfigured()) {
            throw new Error('Claude agent is not configured. Please configure the agent first.');
        }

        const messages: Beta.BetaMessageParam[] = [];

        if (options?.agentHistory) {
            messages.push(...options.agentHistory);
        }

        if (options?.chatId) {
            messages.push(...this.getHistory(options.chatId));
        }

        // Add the new goal as a user message
        const userContent: Beta.BetaContentBlockParam[] = [{
            type: 'text',
            text: goal,
        }];

        if (imagePathOrBase64String !== undefined) {
            const image = await Base64Image.fromPathOrString(imagePathOrBase64String);
            const imageString = image.toString(false);
            userContent.push({
                type: 'image',
                source: {
                    type: 'base64',
                    media_type: 'image/png',
                    data: imageString,
                },
            });
        }

        messages.push({
            content: userContent,
            role: 'user',
        });

        if (this.onlyNMostRecentImages) {
            ClaudeAgent.filterNMostRecentImages(
                messages,
                this.onlyNMostRecentImages,
                this.imageTruncationThreshold,
            );
        }

        while (true) {
            const response = await this.predictActResponseFunction({
                max_tokens: this.maxTokens,
                messages,
                model: this.model,
                system: this.systemPrompt,
                tools: (new ToolCollection(this.tools).toParams()),
                betas: this.betas,
                tool_choice: this.toolChoice,
            });

            if (response.stop_reason === 'refusal') {
                const refusalMessage = response.content
                    .filter(block => block.type === 'text')
                    .map(block => (block as any).text)
                    .join(' ');

                throw new Error(`Agent refused to answer: ${refusalMessage || 'The request violates agent\'s usage policies'}`);
            }

            messages.push({
                content: response.content as Beta.BetaContentBlockParam[],
                role: 'assistant',
            });

            const toolResultContent: Beta.BetaToolResultBlockParam[] = [];

            for (const block of response.content) {
                if (block.type === 'tool_use') {
                    logger.debug(`Agent will execute tool '${block.name}' with input '${JSON.stringify(block.input)}'`);
                    const toolUseBlock = block as Beta.BetaToolUseBlock;
                    const result = await this.toolCollection.run(
                        toolUseBlock.name,
                        toolUseBlock.input as Record<string, any>,
                    );
                    const toolResult = this.makeApiToolResult(result, toolUseBlock.id);
                    toolResultContent.push(toolResult);
                }
                if (block.type === 'thinking') {
                    logger.debug(`Agent is thinking: ${block.thinking}`);
                }

                if (block.type === 'text') {
                    logger.info(`Agent: ${block.text}`);
                }
            }

            if (toolResultContent.length === 0) {
                if (options?.chatId) {
                    this.setHistory(options.chatId, messages);
                }

                return messages;
            }
            messages.push({
                role: 'user',
                content: toolResultContent,
            });
        }
    }

    private makeApiToolResult(
        result: ToolResult,
        toolUseId: string,
    ): Beta.BetaToolResultBlockParam {
        const content: Array<Beta.BetaTextBlockParam | Beta.BetaImageBlockParam> = [];
        let isError = false;

        if (result.error) {
            isError = true;
            content.push({
                type: 'text',
                text: this.maybePrependSystemToolResult(result, result.error),
            });
        } else {
            if (result.output) {
                content.push({
                    type: 'text',
                    text: this.maybePrependSystemToolResult(result, result.output),
                });
            }
            if (result.base64Images) {
                for (const base64Image of result.base64Images) {
                    content.push({
                        type: 'image',
                        source: {
                            type: 'base64',
                            media_type: 'image/png',
                            data: base64Image,
                        },
                    });
                }
            }
        }

        return {
            type: 'tool_result',
            tool_use_id: toolUseId,
            content,
            is_error: isError,
        };
    }

    private maybePrependSystemToolResult(result: ToolResult, text: string): string {
        if (result.system) {
            return `<system>${result.system}</system>\n${text}`;
        }
        return text;
    }

    private static filterNMostRecentImages(
        messages: Beta.BetaMessageParam[],
        imagesToKeep: number,
        minRemovalThreshold = 10,
    ): void {
        const toolResultBlocks = messages
            .flatMap((message) => (Array.isArray(message.content) ? message.content : []))
            .filter((item) => typeof item === 'object'
                && 'type' in item
                && item.type === 'tool_result') as Beta.BetaToolResultBlockParam[];

        const totalImages = toolResultBlocks.reduce((count, result) => {
            const content = Array.isArray(result.content) ? result.content : [];
            return count + content.filter((item) => typeof item === 'object'
                && 'type' in item
                && item.type === 'image').length;
        }, 0);

        let imagesToRemove = totalImages - imagesToKeep;
        imagesToRemove -= imagesToRemove % minRemovalThreshold;

        if (imagesToRemove <= 0) return;

        for (const result of toolResultBlocks) {
            if (Array.isArray(result.content)) {
                const newContent = result.content.filter((item) => {
                    if ('type' in item && item.type === 'image') {
                        if (imagesToRemove > 0) {
                            imagesToRemove -= 1;
                            return false;
                        }
                    }
                    return true;
                });
                result.content = newContent;
            }
        }
    }
}
