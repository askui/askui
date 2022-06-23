# askui Node.js Lib Example

## Installation

Change to the repositories root directory and runs the following commands in order:

1. `npm install`
2. `npm run build -w packages/askui-nodejs`
3. `cd ./examples/askui-nodejs-base-example`
4. `npm install`

## Usage

```shell
npx jest --config ./test/jest.config.ts
```

### Integration of askui-nodejs lib in gitlab CI

1 - add the chrome docker image as a service in the Gitlab CI, give an alias_name name to the service

```yml
parallel:
    matrix:
    - BROWSER: chrome
      BROWSER_VERSIONS: [100.0.4896.60, 99.0.4844.51, 97.0.4692.71, 90.0.4430.212]
    - BROWSER: firefox
      BROWSER_VERSIONS: [98.0.2, 97.0.2, 96.0.3, 82.0.3]
  services:
    - name: registry.gitlab.com/vqa4gui/mvp/askui/browser/$BROWSER:${RELEASE_VERSION}-$BROWSER_VERSIONS-amd64
      alias: <alias_name>
```

2 - Write your tests with jasmine. Please note, that you have to use alias_name that you defined in step 1 for the controlServerUrl : `http://<alias_name>:6769`

3- write a test stage in the CI pipeline.

**example test stage in Gitlab CI**

```yml
test:
  stage: test
  parallel:
    matrix:
    - BROWSER: chrome
      BROWSER_VERSIONS: [100.0.4896.60, 99.0.4844.51, 97.0.4692.71, 90.0.4430.212]
    - BROWSER: firefox
      BROWSER_VERSIONS: [98.0.2, 97.0.2, 96.0.3, 82.0.3]
  services:
    - name: registry.gitlab.com/vqa4gui/mvp/askui/browser/$BROWSER:${RELEASE_VERSION}-$BROWSER_VERSIONS-amd64
      alias: askui-runner
  script:
    - npm run test
  artifacts:
      paths:
        - report/
      expire_in: 
        - 1 week
```

4- the variable RELEASE_VERSION is set to the actual version "v0.8.0", for future releases this can be overwritten, by starting the ci pipeline with the new value  
