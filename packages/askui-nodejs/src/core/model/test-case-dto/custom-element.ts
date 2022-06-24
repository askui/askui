import {
  array, number, object, ValidationError,
} from 'yup';
import { Base64Image } from '../../../utils/base_64_image/base-64-image';
import { CustomElementJson } from './custom-element-json';

export class CustomElement implements CustomElementJson {
  private static schema = object({
    threshold: number().optional().min(0).max(1),
    rotationDegreePerStep: number().optional().min(0).lessThan(360),
    mask: array().optional().min(3, 'mask must contain at least 3 points'),
  });

  constructor(
    public customImage: string,
    public name?: string,
    public threshold?: number,
    public rotationDegreePerStep?: number,
    public imageCompareFormat?: 'RGB' | 'grayscale',
    public mask?: ({ x: number; y: number; })[],
  ) {
  }

  static async fromJsonListWithImagePathOrImage(
    ceJson: CustomElementJson[] = [],
  ): Promise<CustomElement[]> {
    return Promise.all(
      ceJson.map((customElement) => CustomElement.fromJsonWithImagePathOrImage(customElement)),
    );
  }

  static async fromJsonWithImagePathOrImage(
    ceJson: CustomElementJson,
  ): Promise<CustomElement> {
    const customImage = (await Base64Image.fromPathOrString(ceJson.customImage)).toString();
    const customElement = CustomElement.fromJson({
      ...ceJson,
      customImage,
    });
    customElement.validate();
    return customElement;
  }

  static fromJson(ceJson: CustomElementJson): CustomElement {
    return new CustomElement(
      ceJson.customImage,
      ceJson.name,
      ceJson.threshold,
      ceJson.rotationDegreePerStep,
      ceJson.imageCompareFormat,
      ceJson.mask,
    );
  }

  validate() {
    try {
      CustomElement.schema.validateSync(this, { abortEarly: false, strict: true });
    } catch (e) { // ValidationError
      throw new ValidationError((e as ValidationError).errors.join(', '));
    }
  }
}
