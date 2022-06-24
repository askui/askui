# askui - Humanizing UI Automation

**askui** allows you to automate the interaction with an application, multiple applications or even the entire operating system. 
You can use this to write end-to-end tests or automate any kind of application.


## Start

To use **askui** follow these steps:

### 0. Create *node.js* project

```
npm init
```

### 1. Install askui

```
npm i -D askui
```

### 2. Install a testing framework

```
npm i -D jest
```

### 3. Install Typescript

```
npm i -D @types/jest ts-jest ts-node typescript
```

### 4. Create a first test suite

```
npx askui init
```

## Documentation

Visit our [documentation](https://docs.askui.com) for examples and a full list of supported commands.

### Notes

Important note for Linux users: Currently, Wayland is not supported.
You can read more in our [troubleshooting chapter](https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller#wayland).
If you want to use the askui library libfuse2 is needed ([libfuse2 installation](https://docs.askui.com/docs/general/Troubleshooting/askui-ui-controller#libfuse2)).

## Example

The following example shows the use of **askui** for testing a desktop application.

```typescript
it('should be able to add to liked songs', async () => {
    await aui.click().icon().withText('search').exec();
    await aui.typeIn('Bohemian Rhapsody').textfield().exec();
    await aui.pressKey('enter').exec();
    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Songs').exec();
    await aui.mouseRightClick().exec();
    await aui.click().text().withText('Save to your Liked Songs').exec();
    await aui.click().text().withText('Liked Songs').exec();
    await aui.expect().text().withText('Bohemian Rhapsody').exists().exec();
});
```
