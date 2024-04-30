import urljoin from 'url-join';
import http from 'http';
import { HttpClientGot } from '../utils/http/http-client-got';
import { ControlCommand, InferenceResponse } from '../core/ui-control-commands';
import { CustomElement } from '../core/model/custom-element';
import { Annotation } from '../core/annotation/annotation';
import { resizeBase64ImageWithSameRatio } from '../utils/transformations';
import { IsImageRequired } from './is-image-required-interface';
import { InferenceResponseError } from './inference-response-error';
import { DetectedElement } from '../core/model/annotation-result/detected-element';
import { ConfigurationError } from './config-error';
import { InferenceResponseBody } from '../core/inference-response/inference-response';
import { logger } from '../lib/logger';
import { ModelCompositionBranch } from './model-composition-branch';

interface InferenceClientUrls {
  inference: string;
  isImageRequired: string;
}

export class InferenceClient {
  private urls: InferenceClientUrls;

  constructor(
    private readonly baseUrl: string,
    private readonly httpClient: HttpClientGot,
    private readonly resize?: number,
    readonly workspaceId?: string,
    readonly modelComposition?: ModelCompositionBranch[],
    private readonly apiVersion = 'v3',
  ) {
    const versionedBaseUrl = urljoin(this.baseUrl, 'api', this.apiVersion);
    const url = workspaceId
      ? urljoin(versionedBaseUrl, 'workspaces', workspaceId)
      : versionedBaseUrl;
    this.urls = {
      inference: urljoin(url, 'inference'),
      isImageRequired: urljoin(url, 'instruction', 'is-image-required'),
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
  ): Promise<ControlCommand | Annotation> {
    const resizedImage = await this.resizeIfNeeded(customElements, image);
    const response = await this.httpClient.post<InferenceResponseBody>(
      this.urls.inference,
      {
        customElements,
        image: resizedImage.base64Image,
        instruction,
        modelComposition: this.modelComposition,
      },
    );
    InferenceClient.logMetaInformation(response);
    return InferenceResponse.fromJson(
      response.body,
      resizedImage.resizeRatio,
      image,
    );
  }

  async experimental_inference(
    customElements: CustomElement[] = [],
    image?: string,
    instruction?: string,
  ): Promise<ControlCommand | Annotation> {
    const resizedImage = await this.resizeIfNeeded(customElements, image);
    const response = await this.httpClient.post<InferenceResponseBody>(
      this.urls.inference.replace('inference', 'decision-engine'),
      {
        image: resizedImage.base64Image,
        instruction,
      },
    );
    InferenceClient.logMetaInformation(response);
    return InferenceResponse.fromJson(
      response.body,
      resizedImage.resizeRatio,
      image,
    );
  }

  private static logMetaInformation(response: {
    headers: http.IncomingHttpHeaders;
    body: InferenceResponseBody;
  }) {
    if (response.headers['askui-usage-warnings'] !== undefined) {
      logger.warn(response.headers['askui-usage-warnings']);
    }
  }

  async predictControlCommand(
    instruction: string,
    experimental: boolean,
    customElements: CustomElement[] = [],
    image?: string,
  ): Promise<ControlCommand> {
    let inferenceResponse;
    if (experimental) {
      inferenceResponse = await this.experimental_inference(
        customElements,
        image,
        instruction,
      );
    } else {
      inferenceResponse = await this.inference(
        customElements,
        image,
        instruction,
      );
    }
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
}
