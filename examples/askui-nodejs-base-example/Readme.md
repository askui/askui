# Askui Node.js Lib Example
## description
 TODO

## Usage

### Integration of askui-nodejs lib in gitlab CI

1 - add the chrome docker image as a service in the Gitlab CI, give an alias_name name to the service

```yml
services:
  - name: registry.gitlab.com/vqa4gui/mvp/control-your-ui/runner/chrome:333e93a8-feature 
    alias: <alias_name>
```
2 - Write your tests with jasmine. Please note, that you have to use alias_name that you defined in step 1 for the controlServerUrl : `http://<alias_name>:6769 `

```typescript
import * as askui from '@vqa4gui/askui';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000 * 60;

describe('Jasmine demo with askui', () => {
  let newClient: askui.Client;

  beforeAll(async () => {
    newClient = new askui.Client(
      'http://<alias_name>:6769',
      'https://controlui-api-dev.askui.com/upload',
    );
    await newClient.start();
  });

  it('Should click on text', async () => {
    const result = await newClient.exec(newClient.click().text().exec());
    expect(result.state).toBe('PASSED');
  });

  it('Should fail', async () => {
    const result = await newClient.exec(newClient.expect().text().withText('NO such text exits').exists()
      .exec());
    expect(result.state).toBe('FAILED');
  });
  afterAll(async () => {
    await newClient.close();
  });
});
```
3- write a test stage in the CI pibline.

**example test stage in Gitlab CI**

```yml
test:
  stage: test
  services:
    - name: registry.gitlab.com/vqa4gui/mvp/control-your-ui/runner/chrome:333e93a8-feature 
      alias: chrome-runner
  script:
    - npm run test
```

## Contributing

TODO

## License

TODO
