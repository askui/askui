---
custom_edit_url: null
---

# Online Shop Tutorial

The following tutorial shows how to test the login process of a simple demo online shop.

## Setup

* Follow the askui installation guide
* Setup the askui example project with `npx askui init`
* Open a browser on your screen

## Test

After running the askui init command as described in the setup you will have a file named `my-first-askui-test-suite.spec.ts`. In this file add a new test step:

```ts
it('Should log into account', async () => {

});
```

### 1. Open the Demo Shop

First we need to open the demo shop in the browser. For that we can type the url into browser bar and hit enter:

```ts
it('Should log in account', async () => {
    await aui.typeIn("https://askui-demo-shop-6e358.web.app/").url().exec();
    await aui.pressKey('enter').exec();
});
```

### 2. Open Login Dialog

Next, to open the login dialog we need to click the text login in the top of the page. We can do this with the following instrcution:

```ts
it('Should log in account', async () => {
    ...
    await aui.click().text().withText("Login").exec();
});
```

### 3. Fill out Login Information

After opening the login dialog we need to enter an email address and a password. For this we will used the `typeIn` command. After filling in an email address in some cases the textfield will open an autocomplete window that overlaps the password field:
![Overlap](./login_overlap.png)

To keep the password field visual we will click on the headline of the page called "Login". This has no effect apart from removing the focus from the email input field and therefore removing the overlap.

```ts
it('Should log in account', async () => {
    ...
    await aui.typeIn("test@askui.com").textfield().contains().text().withText("Email Address").exec();
    await aui.click().text().withText("Login").above().textfield().exec();
    await aui.typeIn("passwort").textfield().contains().text().withText("Password").exec();
});
```

### 4. Click on Login Button

After filling in email and password we need to click the login button. The following instruction does that for us:


```ts
it('Should log in account', async () => {
    ...
    await aui.click().button().withText("Log in").exec();
});
```


### 5. Check whether Login worked

Finally we need to check that the login worked. The demo web shop displays the email of the logged in user in the header. Therefore we can check if the email is present.

```ts
it('Should log in account', async () => {
    ...
    await aui.expect().text().withText("test@askui.com").exists().exec();
});
```

## Result

The following code block shows the finished test for the login of the web shop:

```ts
it('Should log in account', async () => {
    await aui.typeIn("https://askui-demo-shop-6e358.web.app/").url().exec();
    await aui.pressKey('enter').exec();
    await aui.click().text().withText("Login").exec();
    await aui.typeIn("test@askui.com").textfield().contains().text().withText("Email Address").exec();
    await aui.click().text().withText("Login").above().textfield().exec();
    await aui.typeIn("passwort").textfield().contains().text().withText("Password").exec();
    await aui.click().button().withText("Log in").exec();
    await aui.expect().text().withText("test@askui.com").exists().exec();
});
```