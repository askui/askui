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
}
