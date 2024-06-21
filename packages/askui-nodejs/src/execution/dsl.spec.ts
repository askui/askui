import { CommandExecutorContext, FluentCommand } from './dsl';

class TestCommand extends FluentCommand {
  // eslint-disable-next-line class-methods-use-this
  async fluentCommandExecutor(
    _instruction: string,
    _context: CommandExecutorContext,
  ): Promise<void> {
    return Promise.resolve();
  }
}

describe('DSL', () => {
  describe('custom element', () => {
    test('should call exec function with zero custom element', async () => {
      const underTest = new TestCommand();
      const testCommandSpy = jest.spyOn(underTest, 'fluentCommandExecutor');

      await underTest.click().button().exec();
      expect(testCommandSpy).toHaveBeenCalledWith('Click on button', { aiElementNames: [], customElementsJson: [] });
    });

    test('should call exec function with one custom element', async () => {
      const underTest = new TestCommand();
      const testCommandSpy = jest.spyOn(underTest, 'fluentCommandExecutor');

      await underTest
        .click()
        .customElement({
          customImage:
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
          imageCompareFormat: 'grayscale',
          name: 'custom element 1',
        })
        .button()
        .exec();
      expect(testCommandSpy).toHaveBeenCalledWith(
        'Click on custom element button',
        {
          aiElementNames: [],
          customElementsJson: [
            {
              customImage:
                'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
              imageCompareFormat: 'grayscale',
              name: 'custom element 1',
            },
          ],
        },
      );
    });

    test('should call exec function with two custom element', async () => {
      const underTest = new TestCommand();
      const testCommandSpy = jest.spyOn(underTest, 'fluentCommandExecutor');

      await underTest
        .click()
        .customElement({
          customImage:
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
          imageCompareFormat: 'grayscale',
          name: 'custom element 1',
        })
        .button()
        .customElement({
          customImage:
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
          imageCompareFormat: 'grayscale',
          name: 'custom element 2',
        })
        .exec();
      expect(testCommandSpy).toHaveBeenCalledWith(
        'Click on custom element button custom element',
        {
          aiElementNames: [],
          customElementsJson: [
            {
              customImage:
                'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
              imageCompareFormat: 'grayscale',
              name: 'custom element 1',
            },
            {
              customImage:
                'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
              imageCompareFormat: 'grayscale',
              name: 'custom element 2',
            },
          ],
        },
      );
    });

    test('should call exec function with one ai element', async () => {
      const underTest = new TestCommand();
      const testCommandSpy = jest.spyOn(underTest, 'fluentCommandExecutor');

      await underTest
        .click()
        .aiElement('ai element')
        .below()
        .button()
        .rightOf()
        .customElement({
          customImage:
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
          name: 'custom element',
        })
        .exec();
      expect(testCommandSpy).toHaveBeenCalledWith(
        'Click on ai element with name <|string|>ai element<|string|> index 0 below intersecting bbox button index 0 right of intersecting bbox custom element',
        {
          aiElementNames: ['ai element'],
          customElementsJson: [
            {
              customImage:
                'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
              name: 'custom element',
            },
          ],
        },
      );
    });

    test('should call exec function with two ai element', async () => {
      const underTest = new TestCommand();
      const testCommandSpy = jest.spyOn(underTest, 'fluentCommandExecutor');

      await underTest
        .click()
        .aiElement('ai element')
        .below()
        .button()
        .rightOf()
        .aiElement('ai element 2')
        .exec();
      expect(testCommandSpy).toHaveBeenCalledWith(
        'Click on ai element with name <|string|>ai element<|string|> index 0 below intersecting bbox button index 0 right of intersecting bbox ai element with name <|string|>ai element 2<|string|>',
        {
          aiElementNames: ['ai element', 'ai element 2'],
          customElementsJson: [],
        },
      );
    });
  });
});
