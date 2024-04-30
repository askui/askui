import { CustomElementJson } from '../core/model/custom-element-json';
import { FluentCommand } from './dsl';

class TestCommand extends FluentCommand {
  // eslint-disable-next-line class-methods-use-this
  async fluentCommandExecutor(
    _instruction: string,
    _customElements: CustomElementJson[],
    _experimental: boolean,
  ): Promise<void> {
    return Promise.resolve();
  }
}

describe('DSL', () => {
  describe('custom element', () => {
    test('should call exec function with zero custom element', async () => {
      const underTest = new TestCommand();
      const testCommandSpy = jest.spyOn(underTest, 'fluentCommandExecutor');

      await underTest.click().button()
        .exec();
      expect(testCommandSpy).toHaveBeenCalledWith(
        'Click on button',
        [],
        false,
      );
    });

    test('should call exec function with one custom element', async () => {
      const underTest = new TestCommand();
      const testCommandSpy = jest.spyOn(underTest, 'fluentCommandExecutor');

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
        false,
      );
    });

    test('should call exec function with two custom element', async () => {
      const underTest = new TestCommand();
      const testCommandSpy = jest.spyOn(underTest, 'fluentCommandExecutor');

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
        false,
      );
    });
  });
});
