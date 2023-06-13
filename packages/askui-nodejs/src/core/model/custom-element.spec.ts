import { CustomElement } from './custom-element';

const base64ImageString = 'data:image/png;base64,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';

describe('CustomElement', () => {
  describe('fromJsonWithImagePathOrImage', () => {
    test('should return CustomElement if CustomElement created from JSON is valid', async () => {
      const expected = new CustomElement(
        base64ImageString,
        'Dummy_element',
        0.7,
        10,
        'RGB',
        [{ x: 0, y: 1 }, { x: 1, y: 2 }, { x: 3, y: 4 }],
      );
      const actual = await CustomElement.fromJsonWithImagePathOrImage({
        customImage: base64ImageString,
        name: 'Dummy_element',
        threshold: 0.7,
        rotationDegreePerStep: 10,
        imageCompareFormat: 'RGB',
        mask: [{ x: 0, y: 1 }, { x: 1, y: 2 }, { x: 3, y: 4 }],
      });
      expect(actual).toStrictEqual(expected);
    });

    test('should throw ValidationError if threshold is invalid', () => {
      expect(() => {
        const customElement = new CustomElement(
          base64ImageString,
          'Dummy_element',
          1.1,
          10,
          'RGB',
          [{ x: 0, y: 1 }, { x: 1, y: 2 }, { x: 3, y: 4 }],
        );
        customElement.validate();
      }).toThrow('threshold must be less than or equal to 1');
    });

    test('should throw ValidationError if rotationDegreePerStep is invalid', () => {
      expect(() => {
        const customElement = new CustomElement(
          base64ImageString,
          'Dummy_element',
          0.9,
          -90,
          'RGB',
          [{ x: 0, y: 1 }, { x: 1, y: 2 }, { x: 3, y: 4 }],
        );
        customElement.validate();
      }).toThrow('rotationDegreePerStep must be greater than or equal to 0');
    });

    test('should throw ValidationError if mask is invalid', () => {
      expect(() => {
        const customElement = new CustomElement(
          base64ImageString,
          'Dummy_element',
          0.9,
          10,
          'RGB',
          [{ x: 0, y: 1 }, { x: 1, y: 2 }],
        );
        customElement.validate();
      }).toThrow('mask must contain at least 3 points');
    });

    test('should throw ValidationError if mask and threshold are both invalid', () => {
      expect(() => {
        const customElement = new CustomElement(
          base64ImageString,
          'Dummy_element',
          90,
          10,
          'RGB',
          [{ x: 0, y: 1 }, { x: 1, y: 2 }],
        );
        customElement.validate();
      }).toThrow('threshold must be less than or equal to 1, mask must contain at least 3 points');
    });
  });
});
