export class BoundingBox {
  constructor(
    public xmin: number,
    public ymin: number,
    public xmax: number,
    public ymax: number,
  ) { }

  static fromJson(boundinBox: BoundingBox, resizeRatio = 1) {
    return new BoundingBox(
      boundinBox.xmin * resizeRatio,
      boundinBox.ymin * resizeRatio,
      boundinBox.xmax * resizeRatio,
      boundinBox.ymax * resizeRatio,

    );
  }
}
