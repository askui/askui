import { CustomElement } from './custom-element';

describe('CustomElement', () => {
  describe('fromJsonWithImagePathOrImage', () => {
    test('should return CustomElement if CustomElement created from JSON is valid', async () => {
      const expected = new CustomElement(
        'data:image/png;base64,',
        'Dummy_element',
        0.7,
        10,
        'RGB',
        [{ x: 0, y: 1 }, { x: 1, y: 2 }, { x: 3, y: 4 }],
      );
      const actual = await CustomElement.fromJsonWithImagePathOrImage({
        customImage: 'data:image/png;base64,',
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
          'data:image/png;base64,',
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
          'data:image/png;base64,',
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
          'data:image/png;base64,',
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
          'data:image/png;base64,',
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
