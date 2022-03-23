import urljoin from 'url-join';
import { HttpClientGot } from '../utils/http/http-client-got';
import { ControlCommand } from '../core/ui-control-commands';
import { CustomElement } from '../core/model/test-case-dto';
import { Annotation } from '../core/annotation/annotation';
import { AnnotationJson } from '../core/annotation/annotation-json';

export class ControlYourUiApi {
  constructor(
    public apiEndpointUrl: string,
    public httpClient: HttpClientGot,
  ) { }

  async predictControlCommand(
    image: string,
    instruction: string,
    customElements: CustomElement[],
  ): Promise<ControlCommand> {
    const httpBody = {
      image,
      instruction,
      customElements,
    };
    const url = urljoin(this.apiEndpointUrl, 'upload');
    const httpResponse = await this.httpClient.post<ControlCommand>(url, httpBody);
    return ControlCommand.fromJson(httpResponse);
  }

  async predictImageAnnotation(
    image: string,
    customElements: CustomElement[] = [],
  ): Promise<Annotation> {
    const httpBody = {
      image,
      customElements,
    };
    const url = urljoin(this.apiEndpointUrl, 'annotate', '?format=json');
    const httpResponse = await this.httpClient.post<AnnotationJson>(url, httpBody);
    return Annotation.fromJson({ ...httpResponse, image });
  }
}
