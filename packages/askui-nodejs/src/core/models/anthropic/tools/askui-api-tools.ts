/* eslint-disable */
import { DetectedElement } from '../../../model/annotation-result/detected-element';
import { BaseAgentTool, ToolResult, BetaTool } from './base';
import { OsAgentHandler } from './os-agent-tools';

export class AskUIGetAskUIElementTool extends BaseAgentTool {
    constructor(
        private osAgentHandler: OsAgentHandler,
        private locatorFunction: (aiElementName: string) => Promise<DetectedElement[]>,
        private elementType: string,

    ) {
        super();
    }

    async execute(params: { elementName: string }): Promise<ToolResult> {
        const { elementName } = params;
        const detectedElements = await this.locatorFunction(elementName);
        const scaledElementsBoundingBoxes: { x: number, y: number }[] = detectedElements.map((element) => {
            const xMid = (element.bndbox.xmin + element.bndbox.xmax) / 2;
            const yMid = (element.bndbox.ymin + element.bndbox.ymax) / 2;
            const [x, y] = this.osAgentHandler.scaleCoordinates('computer', xMid, yMid);
            return {
                x, y,
            };
        });
        return {
            output: `Found ${scaledElementsBoundingBoxes.length} elements of type ${this.elementType}. center coordinates: ${JSON.stringify(scaledElementsBoundingBoxes)}`,
        };
    }

    toParams(): BetaTool {
        return {
            description: `Locates and retrieves the bounding box coordinates of AskUI ${this.elementType} elements on the screen. ` +
                `This tool is essential for UI automation as it provides the exact pixel coordinates needed to interact with UI elements. ` +
                `The coordinates returned  can be used for clicking, hovering, or other mouse interactions. ` +
                `Use this tool when you need to find and interact with specific ${this.elementType} UI elements by their semantic names.`,
            input_schema: {
                properties: {
                    elementName: {
                        type: 'string',
                        description: `The semantic name or identifier of the ${this.elementType} element to locate on the screen. `
                    },
                },
                required: ['elementName'],
                type: 'object',
            },
            name: `get_askui_${this.elementType}_element_tool`,
        };
    }
}

export class AskUIListAIElementTool extends BaseAgentTool {
    constructor(
        private listFunction: () => Promise<string[]>,
    ) {
        super();
    }

    async execute(): Promise<ToolResult> {
        const elementNames = await this.listFunction();
        return {
            output: `Found ${elementNames.length} element names that can be used to retrieve bounding boxes. Names: ${JSON.stringify(elementNames)}`,
        };
    }

    toParams(): BetaTool {
        return {
            description: 'Retrieves a comprehensive list of all valid AskUI AI element names that can be used for element location and interaction. ' +
                'The returned names can be used as input for the get_askui_aiElement_element_tool to locate specific ai elements. ' ,
            input_schema: { type: 'object', properties: {}, required: [] },
            name: 'list_ai_element_names_tool',
        };
    }
}
