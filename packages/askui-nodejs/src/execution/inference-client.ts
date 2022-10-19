import urljoin from 'url-join';
import { HttpClientGot } from '../utils/http/http-client-got';
import { ControlCommand, InferenceResponse } from '../core/ui-control-commands';
import { CustomElement } from '../core/model/test-case-dto';
import { Annotation } from '../core/annotation/annotation';
import { resizeBase64ImageWithSameRatio } from '../utils/transformations';
import { IsImageRequired } from './is-image-required-interface';
import { InferenceResponseError } from './inference-response-error';

export class InferenceClient {
  url: string;

  oldUrl: string;

  constructor(
    public baseUrl: string,
    public httpClient: HttpClientGot,
    readonly workspaceId?: string,
    public apiVersion = 'v3',
    public oldApiVersion = 'v2',
  ) {
    const versionedBaseUrl = urljoin(this.baseUrl, 'api', this.apiVersion);
    const oldVersionBaseUrl = urljoin(this.baseUrl, 'api', this.oldApiVersion);
    this.url = workspaceId ? urljoin(versionedBaseUrl, 'workspaces', workspaceId) : versionedBaseUrl;
    this.oldUrl = workspaceId ? urljoin(oldVersionBaseUrl, 'workspaces', workspaceId) : oldVersionBaseUrl;
  }

  async isImageRequired(
    instruction: string,
  ): Promise<boolean> {
    const url = urljoin(this.oldUrl, 'instruction', 'is-image-required');
    const httpBody = {
      instruction,
    };
    const httpResponse = await this.httpClient.post<IsImageRequired>(url, httpBody);
    return httpResponse.isImageRequired;
  }

  // eslint-disable-next-line class-methods-use-this
  private async resizeIfNeeded(customElements: CustomElement[], image?: string) {
    if (!(image) || customElements.length > 0) {
      return { base64Image: image, resizeRatio: 1 };
    }
    return resizeBase64ImageWithSameRatio(image);
  }

  async inference(
    customElements: CustomElement[] = [],
    image?: string,
    instruction?: string,
  ): Promise<ControlCommand | Annotation> {
    const resizedImage = await this.resizeIfNeeded(customElements, image);
    const httpBody = {
      image: resizedImage.base64Image,
      instruction,
      customElements,
    };
    const url = urljoin(this.url, 'inference');
    const httpResponse = await this.httpClient.post<InferenceResponse>(url, httpBody);
    return InferenceResponse.fromJson(httpResponse, resizedImage.resizeRatio, image);
  }

  async predictControlCommand(
    instruction: string,
    customElements: CustomElement[] = [],
    image?: string,
  ): Promise<ControlCommand> {
    const inferenceResponse = await this.inference(customElements, image, instruction);
    if (!(inferenceResponse instanceof ControlCommand)) {
      throw new InferenceResponseError('Internal Error. Can not execute command');
    }
    return inferenceResponse;
  }

  async predictImageAnnotation(
    image: string,
    customElements: CustomElement[] = [],
  ): Promise<Annotation> {
    const inferenceResponse = await this.inference(customElements, image);
    if (!(inferenceResponse instanceof Annotation)) {
      throw new InferenceResponseError('Internal Error. Can not execute annotation');
    }
    return inferenceResponse;
  }
}
