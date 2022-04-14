import { BoundingBox } from './boundary-box';

export class DetectedElement {
  constructor(
    public name: string,
    public truncated: number,
    public difficult: number,
    public text: string,
    public colors: string[],
    public bndbox: BoundingBox,
  ) { }

  static fromJson(detectedElement: DetectedElement, resizeRatio = 1) {
    return new DetectedElement(
      detectedElement.name,
      detectedElement.truncated,
      detectedElement.difficult,
      detectedElement.text,
      detectedElement.colors,
      BoundingBox.fromJson(detectedElement.bndbox, resizeRatio),

    );
  }
}
