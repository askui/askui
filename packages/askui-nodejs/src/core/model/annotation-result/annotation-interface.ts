import { CustomElementJson } from '../custom-element-json';
import { DetectedElement } from './detected-element';

export interface AnnotationRequest {
  imagePath?: string,
  elements?: DetectedElement[]
  outputPath?: string,
  fileNamePrefix?: string,
  customElements?: CustomElementJson[],
}
