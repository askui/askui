import { CustomElementJson } from '../core/model/test-case-dto/custom-element-json';
import { FluentCommand } from './dsl';

class TestCommand extends FluentCommand {
  // eslint-disable-next-line class-methods-use-this
  async exec(instruction: string, customElements: CustomElementJson[]): Promise<void> {
    // eslint-disable-next-line no-console
    console.log(`${instruction} ${customElements}`);
    return Promise.resolve();
  }
}

describe('DSL', () => {
  describe('custom element', () => {
    test('should call exec function with zero custom element', async () => {
      const underTest = new TestCommand();
      const testCommandSpy = jest.spyOn(underTest, 'exec');

      await underTest.click().button()
        .exec();
      expect(testCommandSpy).toHaveBeenCalledWith(
        'Click on button',
        [],
      );
    });

    test('should call exec function with one custom element', async () => {
      const underTest = new TestCommand();
      const testCommandSpy = jest.spyOn(underTest, 'exec');

      await underTest.click().customElement({
        customImage: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
        imageCompareFormat: 'grayscale',
        name: 'custom element 1',
      }).button()
        .exec();
      expect(testCommandSpy).toHaveBeenCalledWith(
        'Click on custom element button',
        [{
          customImage: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
          imageCompareFormat: 'grayscale',
          name: 'custom element 1',
        }],
      );
    });

    test('should call exec function with two custom element', async () => {
      const underTest = new TestCommand();
      const testCommandSpy = jest.spyOn(underTest, 'exec');

      await underTest.click().customElement({
        customImage: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
        imageCompareFormat: 'grayscale',
        name: 'custom element 1',
      })
        .button()
        .customElement({
          customImage: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
          imageCompareFormat: 'grayscale',
          name: 'custom element 2',
        })
        .exec();
      expect(testCommandSpy).toHaveBeenCalledWith(
        'Click on custom element button custom element',
        [{
          customImage: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
          imageCompareFormat: 'grayscale',
          name: 'custom element 1',
        },
        {
          customImage: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
          imageCompareFormat: 'grayscale',
          name: 'custom element 2',
        },
        ],
      );
    });
  });
});
