/**
*
* @remarks
* The screen top left corner is the origin
*
* @param {number} xmin - The bounding box xmin coordinate in pixels
* @param {number} ymin - The bounding box ymin coordinate in pixels
* @param {number} xmax - The bounding box xmax coordinate in pixels
* @param {number} ymax - The bounding box ymax coordinate in pixels
*
*/
export class BoundingBox {
  constructor(
    public xmin: number,
    public ymin: number,
    public xmax: number,
    public ymax: number,
  ) { }

  static fromJson(boundinBox: BoundingBox, resizeRatio = 1) {
    return new BoundingBox(
      Math.round(boundinBox.xmin * resizeRatio),
      Math.round(boundinBox.ymin * resizeRatio),
      Math.round(boundinBox.xmax * resizeRatio),
      Math.round(boundinBox.ymax * resizeRatio),

    );
  }

  /**
  *
  * @returns {number} The bounding box height in pixels
  *
  */
  get_height(): number {
    return this.ymax - this.ymin;
  }

  /**
  *
  * @returns {number} The bounding box width in pixels
  *
  */
  get_width(): number {
    return this.xmax - this.xmin;
  }
}
