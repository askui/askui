/**
 * Defines a 'custom element'. This is a UI element which is defined by
 * providing an image and other parameters such as degree of rotation.
 * It allows filtering for a UI element that is not recognized
 * by our machine learning models by default.
 * It can also be used for pixel assertions of elements using classical
 * [template matching](https://en.wikipedia.org/wiki/Template_matching).
 *
 * **Important:** The `CustomElementJson` needs to capture as accurately as possible
 * what the custom element looks like during test execution as otherwise
 * our machine learning models cannot find it, even with the additional data
 * provided. This is especially true for the resolution used while cropping
 * the `CustomElementJson.customImage` which should match the resolution during
 * test execution.
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
   */
  threshold?: number | undefined,

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
   * only the green ones captured by `customImage` are filtered for using 'RGB'.
   * Defaults to 'grayscale'.
   *
   * **Important**: This increases the prediction time quite a bit. So only use
   * it when absolutely necessary.
   */
  imageCompareFormat?: 'RGB' | 'grayscale' | undefined,

  /** A polygon to match only a certain area of the custom element. */
  mask?: ({ x: number; y: number; })[] | undefined,
}
