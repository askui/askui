# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```shell
npm install
```

### Local Development

```shell
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### How to get Search to Work Locally

For your searchbar to work locally the above command is not sufficient.
You have to generate the static content and then serve it locally.

```shell
npm run build
npm run serve
```

### Build

```shell
npm run build
```

This command generates static content into the `dist` directory and can be served using any static contents hosting service.

### Regenerate API Documentation

1. Head over to [askui-inference](https://github.com/askui/askui-inference#generate-fluent-api-and-documentation)
2. Copy over the generated documentation
3. Adjust api documentation wherever we override it in `UiControlClient`
