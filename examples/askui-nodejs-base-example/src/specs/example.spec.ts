import * as askui from '@vqa4gui/askui';
import { TestStepResultDto } from '@vqa4gui/askui/dist/cjs/core/model/test-case-result-dto';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;

describe('Jasmine demo with askui', () => {
  let newClient: askui.Client;
  const controluiServerUrl = process.env.CI_JOB_ID ? 'chrome-runner' : 'localhost';

  beforeAll(async () => {
    newClient = new askui.Client(
      `http://${controluiServerUrl}:6769`,
      'https://controlui-api-dev.askui.com/upload',
    );
    await newClient.start();
  });

  it('Should click on text', async () => {
    const result = await newClient.click().text().exec();
    expect((result as unknown as TestStepResultDto).state).toBe('PASSED');
  });

  it('Should fail', async () => {
    const result = await newClient.expect().text().withText('NO such text exits').exists()
      .exec();
    expect(result.state).toBe('FAILED');
  });
  afterAll(async () => {
    await newClient.close();
  });
});
