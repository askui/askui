import { Annotation } from './annotation';
import { AnnotationJson } from './annotation-json';

export class AnnotationData {
  constructor(
    public annotations: Annotation[],
  ) {}

  static fromJson(json: AnnotationJson[], resizeRatio: number, image: string) {
    return new AnnotationData(
      json.map((data) => Annotation
        .fromJson({ image, detected_elements: data.detected_elements }, resizeRatio)),
    );
  }
}
