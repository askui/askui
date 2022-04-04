# Gitlab CI

The askui library can be integrated into [Gitlab CI/CD](https://docs.gitlab.com/ee/ci/Introduction)

## Basic Setup

The example below is basic CI setup and job using GitLab CI/CD to run [jasmine tests](../02-Getting Started/writing-your-first-test.md) with askui library.
This GitLab CI configuration is placed within `.gitlab-ci.yml`.

```yml
#############
# VARIABLES #
#############
variables:
  DEPLOY_TOKEN: ${<DEPLOY_TOKEN_VALUE>}
  USER_NAME: ${<USER_NAME_VALUE>} 

############
# PIPELINE #
############
stages:
  - test

test:
  stage: test
  image: node:16.13
  before_script:
    - |
      {
        echo "@vqa4gui:registry=https://gitlab.com/api/v4/projects/32725616/packages/npm/"
        echo "//gitlab.com/api/v4/projects/32725616/packages/npm/:_authToken=\${NPM_TOKEN}"
      } | tee -a .npmrc
    - docker login registry.gitlab.com -u ${USER_NAME}  -p ${DEPLOY_TOKEN} 
    - npm ci
  services:
    - name: <docker_image_path>
      alias: <alias_name>
  script:
    - npx jasmine --config=jasmine.json

```

:warning:

- [`<DEPLOY_TOKEN_VALUE>` and `<USER_NAME_VALUE>`](../02-Getting Started/getting-started.md#requirements) should be added as [custom CI/CD variables](https://docs.gitlab.com/ee/ci/variables/index.html#custom-cicd-variables)
- `docker_image_path` should be replaced by [one of our docker images download link.](local-docker.md#available-images)
- `<alias_name>` should replaced by a name, that will be used later to access the service from the job's container.([Services in GilaB](https://docs.gitlab.com/ee/ci/services/#define-services-in-the-gitlab-ciyml-file))

### How this configuration works

- On push to the repository, Gilab-hosted Linux instance will start and execute the stages.
- The code is checkout from your project
- Scripts within the stages will be executed:
  - creation of `.npmrc` file, which includes your Deploy token.
  - Start your selected docker image.
  - Install npm dependencies
  - Start testing

### Testing inside Gilab-CI

The main difference between [your first test using askui example](../02-Getting Started/writing-your-first-test.md) and tests inside Gilab-CI is the askui-Server URL. Using Gitlab services, The askui-Server URL is  [`http://<alias_name>:6769`](#basic-setup) instead of `http://localhost:6769`. To have a test that can work locally and inside the Gilab CI we suggest that you define the client as follows:

```typescript
const controluiServerUrl = process.env.CI_JOB_ID ? '<alias_name>' : 'localhost';
newClient = new askui.Client({
  controlServerUrl: `http://${controluiServerUrl}:6769`,
});
```
