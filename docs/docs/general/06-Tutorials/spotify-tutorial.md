---
custom_edit_url: null
---

# Desktop App Automation Tutorial

The following tutorial shows how to automate a desktop application. As an example we will automatically like songs in the Spotify desktop application.

## Setup

* Create a new npm project (create an empty folder and run `npm init -y`)
* Follow the askui installation guide
* Generate the askui example project files with `npx askui init`
* Open the Spotify desktop application on your screen
    * If you have multiple screens, configure the used display by setting the display variable at `helpers/askui-helper.ts`

## Test

After running the `npx askui init` command as described in the setup you will have a file `specs/my-first-askui-test-suite.spec.ts`. In this file add a new test:

```ts
it('Should auto-like spotify song', async () => {

});
```

### 1. Navigate to the Search Page

First we need to open the search page where we can look for a song:

```ts
it('Should auto-like spotify song', async () => {
    await aui.click().text().withText("Search").exec();
});
```

### 2. Search for a Song
Then we can use the search field (a textfield) to search a song:

```ts
it('Should auto-like spotify song', async () => {
    ...
    await aui.typeIn("Bohemian Rhapsody").textfield().exec();
    await aui.pressKey('enter').exec();
});
```

### 3. Open Menu for a Song
On the search result page we need to right click a song to open the menu for the song:

```ts
it('Should auto-like spotify song', async () => {
    ...
    await aui.moveMouseTo().text().withText("Bohemian Rhapsody").above().text().withText("Queen").exec();
    await aui.mouseRightClick().exec();
    await aui.click().text().withText("Save to your Liked Songs").exec();
});
```
As the text "Bohemian Rhapsody" is present on the page multiple times, we are specifying the position of the text we want to click further by saying that it is the one above the text "Queen".

### 4. Check whether the Song was added to Liked Songs
Finally we want to check whether the song was actually added to the liked songs:

```ts
it('Should auto-like spotify song', async () => {
    ...
    await aui.click().text().withText("Liked Songs").exec();
    await aui.expect().text().withText("Bohemian Rhapsody").exists().exec();
});
```

## Result

The following code block shows the complete code for the spotify automation:

```ts
it('Should auto-like spotify song', async () => {
    await aui.annotateInteractively();
    await aui.click().text().withText("Search").exec();
    await aui.typeIn("Bohemian Rhapsody").textfield().exec();
    await aui.pressKey('enter').exec();
    await aui.moveMouseTo().text().withText("Bohemian Rhapsody").above().text().withText("Queen").exec();
    await aui.mouseRightClick().exec();
    await aui.click().text().withText("Save to your Liked Songs").exec();
    await aui.click().text().withText("Liked Songs").exec();
    await aui.expect().text().withText("Bohemian Rhapsody").exists().exec();
});
```
To run this test use the `npx jasmine --config=specs/support/jasmine.json` command.
