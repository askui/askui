import { CustomElementJson } from '../custom-element-json';

export interface AnnotationRequest {
  imagePath?: string,
  outputPath?: string,
  fileNamePrefix?:string,
  customElements?: CustomElementJson[],
}
