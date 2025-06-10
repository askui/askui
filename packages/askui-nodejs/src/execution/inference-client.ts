import urljoin from 'url-join';
import http from 'http';
import { BetaMessage, BetaMessageParam } from '@anthropic-ai/sdk/resources/beta/messages';
import { HttpClientGot } from '../utils/http/http-client-got';
import { ControlCommand, InferenceResponse } from '../core/ui-control-commands';
import { CustomElement } from '../core/model/custom-element';
import { Annotation } from '../core/annotation/annotation';
import { resizeBase64ImageWithSameRatio } from '../utils/transformations';
import { IsImageRequired } from './is-image-required-interface';
import { InferenceResponseError } from './inference-response-error';
import { DetectedElement } from '../core/model/annotation-result/detected-element';
import { ConfigurationError } from './config-error';
import { InferenceResponseBody, VQAInferenceResponseBody } from '../core/inference-response/inference-response';
import { logger } from '../lib/logger';
import { ModelCompositionBranch } from './model-composition-branch';

interface InferenceClientUrls {
  actEndpoint: string;
  inference: string;
  isImageRequired: string;
  vqaInference: string;
}

export class InferenceClient {
  private urls: InferenceClientUrls;

  constructor(
    private readonly baseUrl: string,
    private readonly httpClient: HttpClientGot,
    private readonly resize?: number,
    readonly workspaceId?: string,
    readonly modelComposition?: ModelCompositionBranch[],
    private readonly apiVersion = 'v1',
  ) {
    const versionedBaseUrl = urljoin(this.baseUrl, 'api', this.apiVersion);
    const url = workspaceId
      ? urljoin(versionedBaseUrl, 'workspaces', workspaceId)
      : versionedBaseUrl;
    this.urls = {
      actEndpoint: urljoin(url, 'act', 'inference'),
      inference: urljoin(url, 'inference'),
      isImageRequired: urljoin(url, 'instruction', 'is-image-required'),
      vqaInference: urljoin(url, 'vqa', 'inference'),
    };
    this.httpClient.urlsToRetry = Object.values(this.urls);
    if (this.resize !== undefined && this.resize <= 0) {
      throw new ConfigurationError(
        `Resize must be a positive number. The current resize value "${this.resize}" is not valid.`,
      );
    }
    this.resize = this.resize ? Math.ceil(this.resize) : this.resize;
  }

  async isImageRequired(instruction: string): Promise<boolean> {
    const response = await this.httpClient.post<IsImageRequired>(
      this.urls.isImageRequired,
      {
        instruction,
      },
    );
    return response.body.isImageRequired;
  }

  // eslint-disable-next-line class-methods-use-this
  private async resizeIfNeeded(
    customElements: CustomElement[],
    image?: string,
  ) {
    if (!image || customElements.length > 0 || this.resize === undefined) {
      return { base64Image: image, resizeRatio: 1 };
    }
    return resizeBase64ImageWithSameRatio(image, this.resize);
  }

  async inference(
    customElements: CustomElement[] = [],
    image?: string,
    instruction?: string,
    modelComposition: ModelCompositionBranch[] = [],
  ): Promise<ControlCommand | Annotation> {
    const resizedImage = await this.resizeIfNeeded(customElements, image);
    const response = await this.httpClient.post<InferenceResponseBody>(
      this.urls.inference,
      this.urls.inference.includes('v4-experimental') ? {
        image: resizedImage.base64Image,
        instruction,
        tasks: ['OCR'],
      }
        : {
          customElements,
          image: resizedImage.base64Image,
          instruction,
          modelComposition: modelComposition.length > 0 ? modelComposition : this.modelComposition,
        },
    );
    InferenceClient.logMetaInformation(response.headers);
    return InferenceResponse.fromJson(
      response.body,
      resizedImage.resizeRatio,
      image,
    );
  }

  async vqaInference(
    image: string,
    prompt: string,
    config?: object,
  ): Promise<VQAInferenceResponseBody> {
    const response = await this.httpClient.post<VQAInferenceResponseBody>(
      this.urls.vqaInference,
      {
        config,
        image,
        prompt,
      },
    );
    InferenceClient.logMetaInformation(response.headers);

    return response.body;
  }

  private static logMetaInformation(headers: http.IncomingHttpHeaders) {
    if (headers['askui-usage-warnings'] !== undefined) {
      logger.warn(headers['askui-usage-warnings']);
    }
  }

  async predictControlCommand(
    instruction: string,
    modelComposition: ModelCompositionBranch[],
    customElements: CustomElement[] = [],
    image?: string,
  ): Promise<ControlCommand> {
    const inferenceResponse = await this.inference(
      customElements,
      image,
      instruction,
      modelComposition,
    );
    if (!(inferenceResponse instanceof ControlCommand)) {
      throw new InferenceResponseError(
        'Internal Error. Can not execute command',
      );
    }
    return inferenceResponse;
  }

  async getDetectedElements(
    instruction: string,
    image: string,
    customElements: CustomElement[] = [],
  ): Promise<DetectedElement[]> {
    const inferenceResponse = await this.inference(
      customElements,
      image,
      instruction,
    );
    if (!(inferenceResponse instanceof Annotation)) {
      throw new InferenceResponseError(
        'Internal Error. Unable to get the detected elements',
      );
    }
    return inferenceResponse.detected_elements;
  }

  async predictImageAnnotation(
    image: string,
    customElements: CustomElement[] = [],
  ): Promise<Annotation> {
    const inferenceResponse = await this.inference(customElements, image);
    if (!(inferenceResponse instanceof Annotation)) {
      throw new InferenceResponseError(
        'Internal Error. Can not execute annotation',
      );
    }
    return inferenceResponse;
  }

  async predictVQAAnswer(
    prompt: string,
    image: string,
    config?: object,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    const inferenceResponse = await this.vqaInference(image, prompt, config);
    const { response } = inferenceResponse.data;
    try {
      return JSON.parse(response);
    } catch (error) {
      logger.warn(`Response is no valid JSON: ${response}`);
    }
    return response;
  }

  async predictActResponse(params: {
    max_tokens: number;
    tool_choice?: {
      type: 'tool' | 'any' | 'auto';
      name?: string;
    };
    messages: BetaMessageParam[];
    model: string;
    system?: string;
    tools?: object[];
    betas?: string[];
  }): Promise<BetaMessage> {
    const response = await this.httpClient.post<BetaMessage>(
      this.urls.actEndpoint,
      params,
    );
    InferenceClient.logMetaInformation(response.headers);
    return response.body;
  }
}
