import { CustomElementJson } from '../test-case-dto';

export interface AnnotationRequest {
  imagePath?: string,
  outputPath?: string,
  fileNamePrefix?:string,
  customElements?: CustomElementJson[],
}
