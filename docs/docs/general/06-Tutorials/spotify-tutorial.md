---
custom_edit_url: null
---

# Spotify Automation Tutorial

The following tutorial shows how to automatically like songs in spotify.

## Setup

* Follow the askui installation guide
* Setup the askui example project with `npx askui init`
* Open the Spotify desktop application on your screen

## Test

### 1. Navigate to Search Page

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

### 4. Check whether song was added to liked songs
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
