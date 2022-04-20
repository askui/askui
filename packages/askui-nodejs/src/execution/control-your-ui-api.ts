import urljoin from 'url-join';
import { HttpClientGot } from '../utils/http/http-client-got';
import { ControlCommand } from '../core/ui-control-commands';
import { CustomElement } from '../core/model/test-case-dto';
import { Annotation } from '../core/annotation/annotation';
import { AnnotationJson } from '../core/annotation/annotation-json';
import { resizeBase64ImageWithSameRatio } from '../utils/transformations';
import { IsImageRequired } from './is-image-required-interface';

export class ControlYourUiApi {
  constructor(
    public apiEndpointUrl: string,
    public httpClient: HttpClientGot,
  ) { }

  async isImageRequired(
    instruction: string,
  ): Promise<boolean> {
    const url = urljoin(this.apiEndpointUrl, 'instruction', 'is-image-required');
    const httpBody = {
      instruction,
    };
    const httpResponse = await this.httpClient.post<IsImageRequired>(url, httpBody);
    return httpResponse.isImageRequired;
  }

  async predictControlCommand(
    instruction: string,
    customElements: CustomElement[],
    image?: string,
  ): Promise<ControlCommand> {
    let imageString = '';
    let resizeRatio = 1;
    if (image) {
      imageString = image;
      if (!(customElements.length > 0)) {
        const resizedImage = await resizeBase64ImageWithSameRatio(image);
        imageString = resizedImage.base64Image;
        resizeRatio = resizedImage.resizeRatio;
      }
    }
    const httpBody = {
      image: imageString,
      instruction,
      customElements,
    };
    const url = urljoin(this.apiEndpointUrl, 'upload');
    const httpResponse = await this.httpClient.post<ControlCommand>(url, httpBody);
    return ControlCommand.fromJson(httpResponse, resizeRatio);
  }

  async predictImageAnnotation(
    image: string,
    customElements: CustomElement[] = [],
  ): Promise<Annotation> {
    let imageString = image;
    let resizeRatio = 1;
    if (!(customElements.length > 0)) {
      const resizedImage = await resizeBase64ImageWithSameRatio(image);
      imageString = resizedImage.base64Image;
      resizeRatio = resizedImage.resizeRatio;
    }
    const httpBody = {
      image: imageString,
      customElements,
    };
    const url = urljoin(this.apiEndpointUrl, 'annotate', '?format=json');
    const httpResponse = await this.httpClient.post<AnnotationJson>(url, httpBody);
    return Annotation.fromJson({ ...httpResponse, image }, resizeRatio);
  }
}
