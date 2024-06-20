/**
 * Defines a 'custom element'. This is a UI element which is defined by
 * providing an image and other parameters such as degree of rotation.
 * It allows filtering for a UI element based on an image instead of using
 * text or element descriptions like `button().withText('Submit')` in
 * `await aui.click().button().withText('Submit').exec()`.
 *
 * **Important:** The `CustomElementJson` needs to capture as accurately as
 * possible what the custom element looks like during test execution as
 * otherwise our machine learning models cannot find it, even with the
 * additional data provided. This is especially true for the resolution used
 * while cropping the `CustomElementJson.customImage` which should be as
 * similar as possible to the resolution during test execution.
 *
 * Rotated custom elements can be filtered for using
 * `CustomElementJson.rotationDegreePerStep`.
 */
export interface CustomElementJson {
  /**
   * An cropped image in form of a base64 string or file path,
   * e.g., "./custom.png".
   */
  customImage: string,

  /**
   * A unique name which can be used for filtering for the custom element,
   * e.g.,
   * ```typescript
   * ...customElement({
   *   name: 'unique-name',
   *   // ... (rest of the custom element)
   * }).withText('unique-name')
   * ```
   *
   * If not set, the text inside the custom element is
   * detected via
   * [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition).
   * It can also be used for filtering for the custom element.
   */
  name?: string | undefined,

  /**
   * A threshold for how similar UI elements shown during test execution
   * need to be to the custom element as defined by the other fields in
   * `CustomElementJson` to be recognized as such. Takes values between
   * `0.0` (= all elements are recognized as the custom element which is
   * probably not what you want) and `1.0` (= elements need to look exactly
   * like defined by `CustomElementJson` which is unlikely to be achieved
   * as even minor differences count). Defaults to `0.9`.
   *
   * **Important**: The `threshold` impacts the prediction quality.
   */
  threshold?: number | undefined,

  /**
   * A threshold for when to stop searching for UI elements similar to the
   * custom element. As soon as UI elements have been found that are at least
   * as similar as the `stopThreshold`, the search is going to stop. After that
   * elements are filtered using the `threshold`. Because of that the
   * `stopThreshold` should be greater than or equal to `threshold`. It is
   * primarily to be used as a speed improvement (by lowering the value).
   * Takes values between `0.0` and `1.0`. Defaults to `0.9`.
   *
   * **Important**: The `stopThreshold` impacts the prediction speed.
   */
  stopThreshold?: number | undefined,

  /**
   * A step size in rotation degree. Rotates the custom image by
   * `rotationDegreePerStep` until 360° is exceeded. Range is between
   * 0° - 360°. Defaults to 0°.
   *
   * **Important**: This increases the prediction time quite a bit. So only use
   * it when absolutely necessary.
   */
  rotationDegreePerStep?: number | undefined,

  /**
   * A color compare style. Allows matching a custom element by color, e.g.,
   * instead of filtering for all icons (blue and green ones),
   * only the green ones captured by `customImage` are filtered for using
   * 'RGB'. Defaults to 'grayscale'.
   *
   * **Important**: The `imageCompareFormat` impacts the prediction time as
   * well as quality. Although this highly depends on the use case, the other
   * parameters and the actual scene in which to find the UI element, as a
   * rule of thumb, 'edges' is likely to be a bit faster than 'grayscale' and
   * 'grayscale' is likely to be a bit faster than 'RGB'. For quality it is
   * most often the other way around.
   */
  imageCompareFormat?: 'RGB' | 'grayscale' | 'edges' | undefined,

  /** A polygon to match only a certain area of the custom element. */
  mask?: ({ x: number; y: number; })[] | undefined,
}
