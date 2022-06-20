---
custom_edit_url: null
---

# Gitlab CI/CD

The askui library can be integrated into a [Gitlab CI/CD Pipeline](https://docs.gitlab.com/ee/ci).

## Basic Setup

The example below is a basic CI/CD pipeline definition (`.gitlab-ci.yml`) with one `test` stage and a `test` job within it to run tests with the askui library. It assumes you have set up a project with the askui library as described under [Getting Started](../02-Getting%20Started/writing-your-first-test.md).

Besides that, the `<docker_image_path>` needs to be replaced by [one of our Docker Images](./askui-ui-controller-docker-images). Moreover, the `<alias_name>` should replaced by a name that will be used to access the service from the job's container (see [Services in Gitlab](https://docs.gitlab.com/ee/ci/services/#define-services-in-the-gitlab-ciyml-file)).

```yml
stages:
  - test

test:
  stage: test
  image: node:16.13
  before_script:
    - npm ci
  services:
    - name: <docker_image_path>
      alias: <alias_name>
  script:
    - npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts 
```

### How This Configuration Works

On push to the repository on Gitlab, a Gitlab-hosted Linux instance will start and execute the stages.
- The code of your project is checked out.
- Scripts within the stages will be executed:
  - Pull the image for the service.
  - Installs npm dependencies including askui.
  - Starts testing.

### Testing Inside Gitlab-CI

The main difference between [the first test suite using askui example](../02-Getting%20Started/writing-your-first-test.md) and tests inside Gitlab-CI is the askui server URL. Using Gitlab services, the askui server URL is `http://<alias_name>:6769` instead of `http://localhost:6769`. To have a test that can work locally and inside the Gitlab CI we suggest that you create the client like in the following example.

```typescript
const uiControllerUrlHost = process.env.CI_JOB_ID ? '<alias_name>' : 'localhost';
aui = await UiControlClient.build({
  uiControllerUrl: `http://${uiControllerUrlHost}:6769`,
});
```
