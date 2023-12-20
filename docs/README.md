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

### Spellchecker

Before every commit, a spellchecker will run against the next version of the docs located under `docs/`.
To run the spellchecker manually before committing:

```shell
npm run spellcheck-docs
```

### Create a New Release Notes Entry

The blog is stored under `docs/blog`. Every entry gets its own folder and we use the following format as a naming convention `YYYY-MM-DD`. This makes sorting easier. Inside the folder you can store images and _maximal_ one Markdown file (`.md` file extension). The Markdown file contains your **Release Note** entry.

#### Anatomy of a Release Note File

Every **Release Note** has a metadata header which looks like this.
Choose a unique title and slug.

```yaml
---
title: 2023.12.13 Annotate DetectedElements from get()
slug: release-notes-annotate-detected-elements
authors: [leonmeier, johannesdienst]
tags: [ReleaseNotes]
hide_table_of_contents: false
---
```

#### Add an Author

If you want to add a new author follow the convention in `authors.yml`. The author-image has to be added to `docs/static/img`.

### Regenerate API Documentation

1. Head over to [askui-inference](https://github.com/askui/askui-inference#generate-fluent-api-and-documentation)
2. Copy over the generated documentation
3. Adjust api documentation wherever we override it in `UiControlClient`
