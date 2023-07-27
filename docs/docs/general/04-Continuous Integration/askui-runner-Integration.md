# AskUI CI/CD Integration

You have two options to implement your pipeline. With our AskUI-Runner container or without it.

The main difference without the AskUI-Runner is, that you can not download the latest version of your workflows from AskUI Studio inside your pipeline but have to provide them to your build.

If you are more into reading just code we got you covered with a repository of all the pipeline code:

[All the AskUI pipeline-files in a repository](https://github.com/askui/askui-ci)

## AskUI-Runner: Get Workflows from AskUI Studio
When you want to get the latest version of your workflows from AskUI Studio, the AskUI-Runner needs a configuration file `config.yaml` to know where to pull them from.

The AskUI-Runner downloads the workflows and runs them inside a docker container. You do not have to take care of any installation of tools on your side 🥳.

1. Set these environment variables for your pipeline:

```shell
ASKUI_WORKSPACE_ID=<Your workspace id from AskUI Studio>
ASKUI_TOKEN=<An access token from your AskUI Studio workspace>
ASKUI_INFERENCE_SERVER_URL=<Use https://inference.askui.com if your are not on-premise>
ASKUI_WORKFLOW_ENDPOINT_URL=https://app-gateway-api.askui.com/prod/api/v1

DOCKER_USERNAME=<Your Docker Hub username>
DOCKER_PASSWORD=<Your Docker Hub password>
```

2. Create a `config.yaml` inside your pipeline like this:

```bash
# Example uses Github Actions syntax
# You might have to change how to access 
# environment variables!
cat << EOF > config.yaml
    access_token: ${{ secrets.ASKUI_TOKEN }}
    inference_server_url: ${{ secrets.ASKUI_INFERENCE_SERVER_URL }}
    workspace_id: ${{ secrets.ASKUI_WORKSPACE_ID }}
    workflow_endpoint:
        prefixes:
            - workspaces/${{ secrets.ASKUI_WORKSPACE_ID }}/test-cases
        url: ${{ secrets.ASKUI_WORKFLOW_ENDPOINT_URL }}/workspaces/${{ secrets.ASKUI_WORKSPACE_ID }}/objects            
EOF
```

3. Execute your workflows with our AskUI-Runner container. Do not forget to login into Docker Hub 😉.

```bash
# Example uses Github Actions syntax
# You might have to change the path for
# the directory root
#
# ATTENTION: Big workflows might need more than 2g for --shm-size
docker run --shm-size="2g" --rm -v ${{ github.workspace }}/config.yaml:/home/askui/config.yaml -v ${{ github.workspace }}/allure-results:/home/askui/test_project/allure-results askuigmbh/askui-runner:v0.13.1-github
```

4. Generate Allure report:
The run results are placed in `allure-results` where you can render your report from. Check the detailed examples for your pipeline technology.

## Without AskUI-Runner Container
Download the workflows from AskUI Studio and place the folder `test` in the __root__-folder of your repository.

Then implement the following steps in your pipeline:

* __Optional:__ Set up AskUI Controller as service
* Setup `node` in version `16.x`
* Install all dependencies: `npm install`
* Run tests with `npm run test`
  - Set the environment variables:
    - `ASKUI_WORKSPACE_ID`
    - `ASKUI_TOKEN`
    - `ASKUI_INFERENCE_SERVER_URL`
    - __Optional:__ `UI_CONTROLLER_URL` if the UiController is running on a remote machine and not localhost or as a service inside your pipeline.
* For reports:
  - Generate reports
  - Deploy/Send reports

## Github Actions

* [Github Actions example - AskUI-Runner: Get Workflows from AskUI Studio](https://github.com/askui/askui-ci/blob/main/.github/workflows/askui-run-with-studio.yml)
* [Github Actions example - Without AskUI-Runner Container](https://github.com/askui/askui-ci/blob/main/.github/workflows/askui-run-without-studio.yml)

## Gitlab CI

* [Gitlab example - AskUI-Runner: Get Workflows from AskUI Studio](https://github.com/askui/askui-ci/blob/main/gitlab/.gitlab-ci-with-askui-studio.yml)
* [Gitlab example - Without AskUI-Runner Container](https://github.com/askui/askui-ci/blob/main/gitlab/.gitlab-ci-without-askui-studio.yml)

## Azure DevOps

* [Azure DevOps example - AskUI-Runner: Get Workflows from AskUI Studio](https://github.com/askui/askui-ci/blob/main/azure-devops/azure-pipelines-with-askui-studio.yml)
* [Azure DevOps example - Without AskUI-Runner Container](https://github.com/askui/askui-ci/blob/main/azure-devops/azure-pipelines-without-askui-studio.yml)
