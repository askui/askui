import urljoin from 'url-join';
import { HttpClientGot } from '../utils/http/http-client-got';
import { ControlCommand, CommandData } from '../core/ui-control-commands';
import { CustomElement } from '../core/model/test-case-dto';
import { Annotation } from '../core/annotation/annotation';
import { AnnotationJson } from '../core/annotation/annotation-json';
import { resizeBase64ImageWithSameRatio } from '../utils/transformations';
import { IsImageRequired } from './is-image-required-interface';

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

  async predictControlCommand(
    instruction: string,
    customElements: CustomElement[] = [],
    image?: string,
  ): Promise<ControlCommand> {
    const resizedImage = await this.resizeIfNeeded(customElements, image);
    const httpBody = {
      image: resizedImage.base64Image,
      instruction,
      customElements,
    };
    const url = urljoin(this.url, 'inference');
    const httpResponse = await this.httpClient.post<CommandData>(url, httpBody);
    return CommandData.getControlCommandFromJson(httpResponse, resizedImage.resizeRatio);
  }

  async predictImageAnnotation(
    image: string,
    customElements: CustomElement[] = [],
  ): Promise<Annotation> {
    const resizedImage = await this.resizeIfNeeded(customElements, image);
    const httpBody = {
      image: resizedImage.base64Image,
      customElements,
    };
    const url = urljoin(this.url, 'inference', '?format=json');
    const httpResponse = await this.httpClient.post<AnnotationJson>(url, httpBody);
    return Annotation.fromJson({ ...httpResponse, image }, resizedImage.resizeRatio);
  }
}
