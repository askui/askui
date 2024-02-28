---
sidebar_position: 9
---

# Like on Spotify Desktop App

The following tutorial shows how to automate a desktop application. As an example we will automatically to like songs in the Spotify desktop application.

## Setup

* Follow the <a href="../Getting%20Started/getting-started" target="_blank">AskUI installation guide and write your first instruction</a>
* Open the Spotify desktop application on your screen
  * If you have multiple screens, configure the used display by setting the display variable at `test/helpers/askui-helper.ts`

## Code

After running the `npx askui init` command as described in the setup you will have a file `test/my-first-askui-test-suite.test.ts`. In this file add a new workflow (`it`-code-block) inside the body of the callback passed to the `describe` function:

```ts
describe(/* a string identifying the test suite */, () => {
    ... (other tests)

    it('should like Spotify song', async () => {

    });
});
```

### 1. Navigate to the Search Page

First, we need to open the search page where we can look for a song:

```ts
it('should like Spotify song', async () => {
    await aui.click().icon().withText('search').exec();
});
```

### 2. Search for a Song

Then we can use the search field (a textfield) to search a song:

```ts
it('should like Spotify song', async () => {
    ...
    await aui.typeIn('Bohemian Rhapsody').textfield().exec();
    await aui.pressKey('enter').exec();
});
```

### 3. Open Menu for a Song

On the search result page we need to right click a song to open the menu for the song:

```ts
it('should like Spotify song', async () => {
    ...
    await aui.moveMouseTo().text('Bohemian Rhapsody').below().text('Songs').exec();
    await aui.mouseRightClick().exec();
    await aui.click().text('Save to your Liked Songs').exec();
});
```

As the text "Bohemian Rhapsody" is present on the page multiple times, we are specifying the position of the text we want to click further by saying that it is the one below the text "Songs".

:::caution
We expect that the song has not yet been liked (although we totally understand if this is the case - we like it, too 😉 - but just for the sake of this workflow, let's unlike it or use another song).
:::

### 4. Check Whether the Song was Added to Liked Songs

Finally, we want to check whether the song was actually added to the liked songs:

```ts
it('should like Spotify song', async () => {
    ...
    await aui.click().text('Liked Songs').exec();
    await aui.expect().text('Bohemian Rhapsody').exists().exec();
});
```

### 5. Remove Song from Like Songs

To be able to run the workflow again, it is necessary to reset the state of Spotify, or more specifically, your liked songs. One option would be to add the following instructions to your code in order to remove the song from the liked songs.

```ts
it('should like Spotify song', async () => {
    ...
    await aui.moveMouseTo().text('Bohemian Rhapsody').below().text('Title').exec();
    await aui.mouseRightClick().exec();
    await aui.click().text('Remove from your Liked Songs').exec();
});
```

## Result

The following code block shows the complete code for the Spotify automation:

```ts
it('should like Spotify song', async () => {
    await aui.click().icon().withText('search').exec();
    await aui.typeIn('Bohemian Rhapsody').textfield().exec();
    await aui.pressKey('enter').exec();
    await aui.moveMouseTo().text('Bohemian Rhapsody').below().text('Songs').exec();
    await aui.mouseRightClick().exec();
    await aui.click().text('Save to your Liked Songs').exec();
    await aui.click().text('Liked Songs').exec();
    await aui.expect().text('Bohemian Rhapsody').exists().exec();
    await aui.moveMouseTo().text('Bohemian Rhapsody').below().text('Title').exec();
    await aui.mouseRightClick().exec();
    await aui.click().text('Remove from your Liked Songs').exec();
});
```

To run this workflow use the `npm run askui` command.
