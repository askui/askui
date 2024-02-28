---
displayed_sidebar: askuiStudioSidebar
custom_edit_url: null
---

# Gitlab CI
You have two options to implement your pipeline. With our AskUI Runner container or without it.

The main difference without the AskUI Runner is, that you can not download the latest version of your workflows from AskUI Studio inside your pipeline but have to provide them to your build.

## AskUI Runner: Get Workflows from AskUI Studio

When you want to get the latest version of your workflows from AskUI Studio, the AskUI Runner needs a configuration file ***config.yaml*** to know where to pull them from.

The AskUI Runner downloads the workflows and runs them inside a docker container. You do not have to take care of any installation of tools on your side 🥳.

1. Set these Gitlab variables for your pipeline:

```bash
ASKUI_WORKSPACE_ID=<Your workspace id from AskUI Studio>
ASKUI_TOKEN=<An access token from your AskUI Studio workspace>
ASKUI_INFERENCE_SERVER_URL=<Use https://inference.askui.com if your are not on-premise>
ASKUI_WORKFLOW_ENDPOINT_URL=https://app-gateway-api.askui.com/prod/api/v1

DOCKER_USERNAME=<Your Docker Hub username>
DOCKER_PASSWORD=<Your Docker Hub password>
```

2. Create a `config.yaml` inside your pipeline like this:

```bash
cat << EOF > config.yaml
    access_token: $ASKUI_TOKEN
    inference_server_url: $ASKUI_INFERENCE_SERVER_URL
    workspace_id: $ASKUI_WORKSPACE_ID
    workflow_endpoint:
        prefixes:
            - workspaces/${ASKUI_WORKSPACE_ID}/test-cases
        url: ${ASKUI_WORKFLOW_ENDPOINT_URL}/workspaces/${ASKUI_WORKSPACE_ID}/objects            
EOF
```

3. Do not forget to login into Docker Hub and enable Docker-In-Docker like this 😉:

```yaml
services:
  - docker:dind
before_script:
  - docker info
  - echo "$DOCKER_PASSWORD" | docker login --username $DOCKER_USERNAME --password-stdin
```

1. Execute your workflows with our AskUI Runner container.

```bash
docker run --shm-size="2g" --rm -v ./config.yaml:/home/askui/config.yaml -v ./allure-results:/home/askui/test_project/allure-results askuigmbh/askui-runner:v0.13.1-github
```

5. Generate Allure report: The run results are placed in `allure-results` where you can render your report from.

Check the detailed examples for your pipeline technology.

[Please check the full example file on Gitlab.com.](https://gitlab.com/askui/gitlab-ci-integration-askui-studio/-/blob/main/.gitlab-ci.yml)

## Without AskUI Runner Container

Download the workflows from AskUI Studio and place the folder `test` in the ***root*** of your repository.

Then implement the following steps in your pipeline:

- ***Optional:*** Set up AskUI Controller as service
- Setup `node` in version `16.x`
- Install all dependencies: `npm install`
- Run tests with `npm run test`
  - Set the environment variables:
    - `ASKUI_WORKSPACE_ID`
    - `ASKUI_TOKEN`
    - `ASKUI_INFERENCE_SERVER_URL`
    - __Optional:__ `UI_CONTROLLER_URL` if the UiController is running on a remote machine and not localhost or as a service inside your pipeline.
- For reports:
  - Generate reports
  - Deploy/Send reports

[Please check the full example file on Gitlab.com.](https://gitlab.com/askui/gitlab-ci-integration/-/blob/main/.gitlab-ci.yml)
