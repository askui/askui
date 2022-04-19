---
custom_edit_url: null
---

# Gitlab CI/CD

The askui library can be integrated into a [Gitlab CI/CD Pipeline](https://docs.gitlab.com/ee/ci).

## Basic Setup

The example below is a basic CI/CD pipeline definition (`.gitlab-ci.yml`) with one `test` stage and a `test` job within it to run  [Jasmine tests](../02-Getting%20Started/writing-your-first-test.md) with the askui library. It assumes the CI/CD variables `ASKUI_DEPLOY_TOKEN` and `ASKUI_USER_NAME` to be defined as [custom CI/CD variables](https://docs.gitlab.com/ee/ci/variables/index.html#custom-cicd-variables). They should hold the deploy token and user name you received from your contact person at askui. 

Besides that, the `<docker_image_path>` needs to be replaced by [one of our docker images](local-docker.md#available-images). Moreover, the `<alias_name>` should replaced by a name that will be used to access the service from the job's container (see [Services in Gitlab](https://docs.gitlab.com/ee/ci/services/#define-services-in-the-gitlab-ciyml-file)).

```yml
stages:
  - test

test:
  stage: test
  image: node:16.13
  variables:
    DOCKER_PASSWORD: ${ASKUI_DEPLOY_TOKEN}
    DOCKER_USER: ${ASKUI_USER_NAME}
    NPM_TOKEN: ${ASKUI_DEPLOY_TOKEN}
  before_script:
    - |
      {
        echo "@vqa4gui:registry=https://gitlab.com/api/v4/projects/34584527/packages/npm/"
        echo "//gitlab.com/api/v4/projects/34584527/packages/npm/:_authToken=\${NPM_TOKEN}"
      } | tee -a .npmrc
    - docker login registry.gitlab.com -u ${DOCKER_USER} -p ${DOCKER_PASSWORD} 
    - npm ci
  services:
    - name: <docker_image_path>
      alias: <alias_name>
  script:
    - npx jasmine --config=jasmine.json

```

### How This Configuration Works

On push to the repository on Gitlab, a Gitlab-hosted Linux instance will start and execute the stages.
- The code of your project is checked out.
- Scripts within the stages will be executed:
  - Creates an `.npmrc` file which allows you to install the askui library from our registry.
  - Authenticates and authorizes with our Docker image registry which allows you to pull the image for the service.
  - Installs npm dependencies including the askui library.
  - Starts testing.

### Testing Inside Gitlab-CI

The main difference between [the first test suite using askui example](../02-Getting%20Started/writing-your-first-test.md) and tests inside Gitlab-CI is the askui server URL. Using Gitlab services, the askui server URL is `http://<alias_name>:6769` instead of `http://localhost:6769`. To have a test that can work locally and inside the Gitlab CI we suggest that you create the client like in the following example.

```typescript
const controluiServerUrl = process.env.CI_JOB_ID ? '<alias_name>' : 'localhost';
aui = new AskuiClient({
  controlServerUrl: `http://${controluiServerUrl}:6769`,
});
```
