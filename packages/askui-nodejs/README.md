# askui - Humanizing UI Automation

**askui** allows you to automate the interaction with an application, multiple applications or even the entire operating system. 
You can use this to write end-to-end tests or automate any kind of application.


## Start

To use **askui** follow these steps:

### 0. Create *node.js* project

```
npm init
```

### 1. Install askui with Needed Dependencies

```
npm i -D askui typescript ts-node @types/jest ts-jest jest
```

### 2. Create your First Test

```
npx askui init
```

### 3. Execute the Test

```
npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts 
```

## Documentation

Visit our [documentation](https://docs.askui.com) for examples and a full list of supported commands.

### Notes

Important note for Linux users: Currently, Wayland is not supported.
You can read more in our [troubleshooting chapter](https://docs.askui.com/docs/general/Troubleshooting/linux#wayland).
If you want to use the askui library libfuse2 is needed ([libfuse2 installation](https://docs.askui.com/docs/general/Troubleshooting/linux#libfuse2)).

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
