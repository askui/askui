import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should click on text', async () => {
    await aui
      .click()
      .text()
      .exec();
  });
});
