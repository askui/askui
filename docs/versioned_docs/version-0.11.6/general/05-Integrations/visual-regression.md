---
sidebar_position: 7
---

# Visual Regression

On this page you will learn how to use AskUI in combination with Jest and the package `jest-image-snapshot` to include a visual regression test in your AskUI runs.

## Install jest-image-snapshot
In your terminal, navigate into the folder where you initialized AskUI while following our [Getting Started](../02-Getting%20Started/getting-started.md) ([Linux](../02-Getting%20Started/getting-started-linux.md), [macOS](../02-Getting%20Started/getting-started-macos.md))

Install `jest-image-snapshot` as a dev-dependency

```shell
npm install --save-dev jest-image-snapshot
```

## Integration
The package provides a function `toMatchImageSnapshot` which implements Jest's `Matchers<R>` interface making it a Jest matcher that can be used with Jest's `expect()`.

You have to add this matcher to Jest with `expect.extend` like this in your workflow file ([See the docs](https://jestjs.io/docs/expect#expectextendmatchers)):

```typescript
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });
```

Now the only thing you have to provide for a regression test in your workflows is an image to the function `expect()` as `Buffer`:

```typescript
expect(imageBuffer).toMatchImageSnapshot();
```

You can use AskUI to get the screenshot as a _base64_ encoded `string`. The string is in the format of a data URL. So you have to strip the scheme `data:[<mediatype>][;base64],` away because it is not a valid image with the scheme. Here is the full code:

```typescript
const annotate = await aui.annotate();
const imageBase64 = annotate.image;

// Strip away this: data:image/png;base64,
// Not valid png -> Only if used as a data URL
let imageBuffer = Buffer.from(
    imageBase64.split('base64,')[1], 'base64');

expect(imageBuffer).toMatchImageSnapshot();
```

## Get It to Work with TypeScript
When you run this as it is you will get an error.

This is because Jest's typings in `jest.d.ts` do not include `toMatchImageSnapshot`.

Luckily TypeScript has a mechanism called [Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html). When we create a file `jest.d.ts` in our project and declare our matcher there, TypeScript will pick it up.

```typescript
declare namespace jest {
    interface Matchers {
      toMatchImageSnapshot(): CustomMatcherResult;
    }
}
```

## How Jest-Image-Snapshot Works
Explanation from the [repository](https://github.com/americanexpress/jest-image-snapshot):

> Given an image (Buffer instance with PNG image data) the `toMatchImageSnapshot()` matcher will create an image_snapshots directory in the directory the test is in and will store the baseline snapshot image there on the first run. Note that if `customSnapshotsDir` option is given then it will store baseline snapshot there instead. On subsequent test runs the matcher will compare the image being passed against the stored snapshot. To update the stored image snapshot run Jest with `--updateSnapshot` or `-u` argument. All this works the same way as Jest snapshots.

You also want to check out the [options you can provide](https://github.com/americanexpress/jest-image-snapshot#%EF%B8%8F-api) to `toMatchImageSnapshot()` to fine-tune the behavior. For example you might want to set a threshold for a mismatch so that minimal differences do not _fail_ a run:

```typescript
expect(image).toMatchImageSnapshot({
    failureThreshold: 0.01,
    failureThresholdType: 'percent'
  });
```
