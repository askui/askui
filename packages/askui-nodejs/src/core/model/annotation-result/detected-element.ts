import { BoundingBox } from './boundary-box';

/**
*
* @param {string} name - The element type e.g text, button
* @param {string} text - The detected text inside the element
* @param {string[]} colors - The element top 3 dominate colors
* @param {BoundingBox} bndbox - The element bounding box
*
*/
export class DetectedElement {
  constructor(
    public name: string,
    public text: string,
    public bndbox: BoundingBox,
    public colors?: string[],
  ) { }

  static fromJson(detectedElement: DetectedElement, resizeRatio = 1) {
    return new DetectedElement(
      detectedElement.name,
      detectedElement.text,
      BoundingBox.fromJson(detectedElement.bndbox, resizeRatio),
      detectedElement.colors ? detectedElement.colors : undefined,

    );
  }
}
