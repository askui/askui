import urljoin from 'url-join';
import http from 'http';
import { HttpClientGot } from '../utils/http/http-client-got';
import { ControlCommand, InferenceResponse } from '../core/ui-control-commands';
import { CustomElement } from '../core/model/test-case-dto';
import { Annotation } from '../core/annotation/annotation';
import { resizeBase64ImageWithSameRatio } from '../utils/transformations';
import { IsImageRequired } from './is-image-required-interface';
import { InferenceResponseError } from './inference-response-error';
import { DetectedElement } from '../core/model/annotation-result/detected-element';
import { ConfigurationError } from './config-error';
import { InferenceResponseBody } from '@/core/inference-response/inference-response';
import { logger } from '../lib/logger';

export class InferenceClient {
  url: string;

  constructor(
    public baseUrl: string,
    public httpClient: HttpClientGot,
    public resize?: number,
    readonly workspaceId?: string,
    public apiVersion = 'v3',
  ) {
    const versionedBaseUrl = urljoin(this.baseUrl, 'api', this.apiVersion);
    this.url = workspaceId
      ? urljoin(versionedBaseUrl, 'workspaces', workspaceId)
      : versionedBaseUrl;
    if (this.resize !== undefined && this.resize <= 0) {
      throw new ConfigurationError(
        `Resize must be a positive number. The current resize value "${this.resize}" is not valid.`,
      );
    }
    this.resize = this.resize ? Math.ceil(this.resize) : this.resize;
  }

  async isImageRequired(instruction: string): Promise<boolean> {
    const url = urljoin(this.url, 'instruction', 'is-image-required');
    const requestBody = {
      instruction,
    };
    const response = await this.httpClient.post<IsImageRequired>(
      url,
      requestBody,
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
    const requestBody = {
      image: resizedImage.base64Image,
      instruction,
      customElements,
    };
    const url = urljoin(this.url, 'inference');
    const response = await this.httpClient.post<InferenceResponseBody>(
      url,
      requestBody,
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
    customElements: CustomElement[] = [],
    image?: string,
  ): Promise<ControlCommand> {
    const inferenceResponse = await this.inference(
      customElements,
      image,
      instruction,
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
}
