import { AIElement, AIElementJson } from './ai-element';
import { CustomElementJson } from '../model/custom-element-json';

describe('AIElement', () => {
  const dummyAIElementMetadata: AIElementJson = {
    image: {
      mask: [
        { x: 1, y: 1 },
        { x: 2, y: 2 },
      ],
    },
    name: 'test-element',
    version: 1,
  };
  const dummyImagePath = '/path/to/image.png';

  it('should create an AIElement from a valid JSON', () => {
    const element = AIElement.fromJson(dummyAIElementMetadata, dummyImagePath);
    expect(element).toBeInstanceOf(AIElement);
    expect(element.name).toBe(dummyAIElementMetadata.name);
    expect(element.imagePath).toBe(dummyImagePath);
    expect(element.mask).toEqual(dummyAIElementMetadata.image?.mask);
  });

  it('should throw an error for unsupported version', () => {
    const invalidMetadata = { ...dummyAIElementMetadata, version: 2 };
    expect(() => AIElement.fromJson(invalidMetadata, dummyImagePath)).toThrow(
      'Unsupported AIElement version',
    );
  });

  it('should convert AIElement to CustomElementJson', () => {
    const element = new AIElement(
      dummyAIElementMetadata.name,
      dummyImagePath,
      dummyAIElementMetadata.image?.mask,
    );
    const customElement = element.toCustomElement();
    expect(customElement).toEqual<CustomElementJson>({
      customImage: dummyImagePath,
      mask: dummyAIElementMetadata.image?.mask,
      name: dummyAIElementMetadata.name,
    });
  });

  it('should convert AIElement without a mask to CustomElementJson without a mask', () => {
    const element = new AIElement(
      dummyAIElementMetadata.name,
      dummyImagePath,
      undefined,
    );
    const customElement = element.toCustomElement();
    expect(customElement).toEqual<CustomElementJson>({
      customImage: dummyImagePath,
      mask: undefined,
      name: dummyAIElementMetadata.name,
    });
  });

  it('should check if element has a specific name', () => {
    const element = new AIElement(
      dummyAIElementMetadata.name,
      dummyImagePath,
      dummyAIElementMetadata.image?.mask,
    );
    expect(element.hasName(dummyAIElementMetadata.name)).toBe(true);
    expect(element.hasName('other-name')).toBe(false);
  });
});
