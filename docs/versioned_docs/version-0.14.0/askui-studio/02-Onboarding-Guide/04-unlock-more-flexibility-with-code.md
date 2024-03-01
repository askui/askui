---
displayed_sidebar: askuiStudioSidebar
custom_edit_url: null
---

# Unlock More Flexibility with Code

Sometimes creating workflows with a No Code-Editor like the Workflow Editor of AskUI Studio is not enough to describe complex workflows 🤔.

What if you need to loop over elements or want to extract information into a variable for later use in your workflow?

This is where you need the power of a programming language!

:::warning
When you switch to _Code View_ you **may** not be able to convert your workflow back to the simple step view.
:::

## Switch to Code View

To switch to Code View you have to click the **\<>Code** icon in your Workflow Editor.

![](../images/04-unlock-more-flexibility-with-code/01-Switch-to-Code-Editor.png)

This will bring up the code for your workflow which should look something like this.

![](../images/04-unlock-more-flexibility-with-code/02-Code-Editor-View.png)

:::info
Please also consult our developer docs on how to write workflows with code. A good starting point might be one of our guides or a tutorial. Also, the API docs are linked below for an explanation of every feature:

* [Guide: Text Element Selectors](../../general/03-Element%20Selection/text-and-element-selectors.md)
* [Tutorial: Cat Image Search on Google](../../general/06-Tutorials/google-cat-search.md)
* [API docs](../../api/01-API/table-of-contents.md)
:::

## The Basics
Let us explain real quick what you are seeing.

You may notice the first line with the *import* and the *it-*block that contains your steps from the No Code View. Inside the *it-block* is where you will write your code. Do not touch anything else 😉.

```typescript
import { aui } from "@/helper/jest.setup";

it("first-workflow.ts", async () => {
...
});
```

If you look at the code you might notice that it is written in TypeScript as our AskUI SDK is written in that programming language.

### What Can You Do with Code?

We will show you three things you can only do within the Code View:

- Get a value out of your screenshot
- Reuse and/or manipulate that value by storing it inside a variable
- Use loops to iterate over elements

### Get a Value Out of Your Screenshot

Maybe you have a text-captcha that consists of just numbers on your GUI. You need to solve it for your workflow to continue. Therefore you need to *get()* the value ([See API docs for get()](https://docs.askui.com/docs/api/Getters/get)). See the next section on how to store the value in a variable for reuse.

```typescript
await aui.get().text().above().text().withText("123456").exec();
```

### Store Values in Variables and Reuse Them

You can define arbitrary variables like this.

```typescript
const arbi42 = "A string variable";
const arbi27 = 27;
```

Or you can store the text-captcha from the section above and trim it with the power of TypeScript. You only need the numbers and not some unwanted whitespaces at the beginning, end or in the middle.

```typescript
// See the API-Docs for get()
// for the returned type of the detected elements
const captchaDetectedElement = 
  await aui.get().text().above().text("123456").exec();

// Get only the text-property of the element
const captchaDetectedElement = texts[0];

// Extract the numbers with a Regex
const captcha = captchaRaw.text.match(/\d{6}/)[0];
```

Now the only thing that is left is to type the captcha back into the right textfield

```typescript
await aui.typeIn(captcha).textfield().contains().text().withText("123456").exec();
```

### Loops for Iteration Over Elements
Sometimes you have some data you want to input into a form and don’t want to write an instruction for every textfield. If you store your data in an array you can iterate over it like this.

```typescript
const data = ['Johannes', 'Dienst', 'AskUI Street', '42', 'Karlsruhe'];
        
// Focus the first textfield
await aui.click().textfield().contains().text('Firstname').exec();

// Use the tab-key to navigate through the form
for (let entry of data) {
  await aui.type(entry).exec();
  await aui.pressKey('tab').exec();
}
```

You can also retrieve elements and iterate over this. Loops can be used in a lot of ways 🦄.
