import { DetectedElement } from '../model/annotation-result/detected-element';

export interface AnnotationJson {
  image: string,
  objects: DetectedElement[]
}
