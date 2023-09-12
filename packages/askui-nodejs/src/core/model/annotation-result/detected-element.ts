import { BoundingBox } from './boundary-box';

/**
*
* @param {string} name - The element type e.g text, button
* @param {string} text - The detected text inside the element
* @param {BoundingBox} bndbox - The element bounding box
* @param {string[]} colors - An optional, the element top 3 dominate colors
*
*/
export class DetectedElement {
  constructor(
    public name: string,
    public text: string,
    public bndbox: BoundingBox,
    public colors?: string[],
    public similarityScore?: number,
  ) { }

  static fromJson(detectedElement: DetectedElement, resizeRatio = 1) {
    return new DetectedElement(
      detectedElement.name,
      detectedElement.text,
      BoundingBox.fromJson(detectedElement.bndbox, resizeRatio),
      detectedElement.colors || undefined,
      detectedElement.similarityScore || 0,

    );
  }
}
