---
sidebar_position: 7
---

# Assertions

In this guide we will first show you how to assert if an element is there or not.

## Assert the (non) Existence of Elements
To validate if an element exists or not we use [expect()](../../api/02-Actions/expect.md) in combination with [exists()](../../api/05-Checks/exists.md) or [notExists](../../api/05-Checks/notexists.md).

```typescript
// Expect that a button with text 'Go for it' exists
await aui.expect().text('Login').exists().exec();

// Expect that a text 'Do not go for it' not exists
await aui.expect().text('Login').notExists().exec();
```

## Assert the Correctness of Values
Let's say you want to check if your automation actually wrote something into a textfield. You can do two things:

### 1. Use expect() to check if the text in the textfield matches
This technique is useful if the text you entered is unique on the screen.

```typescript
// Type something into a textfield
await aui.typeIn("Please find me").textfield().contains().text("Enter email").exec();

// Assert if the textfield contains the value
await aui.expect().textfield().contains().text('Please find me').exists().exec();
```

### 2. Retrieve the element with [get()](../../api/06-Getters/get.md) and use an assertions library
If your value is not unique on your screen you can retrieve the element with [get()](../../api/06-Getters/get.md) and a different selector. For example with a relational selector like [below()](../../api/04-Relations/below.md). With an assertion library you can assert if the value is correct.

Jest comes with assertions. You only have to import them into your AskUI-file.

:::info
Do not forget the import mentioned at the start of the snippet!
:::

```typescript
// Add this to the start of your AskUI-file containing your workflows/instructions
import {expect, jest, test} from '@jest/globals';

// Type something into a textfield
await aui.typeIn("Please find me").textfield().contains().text("Enter email").exec();

// You have to retrieve the text you wrote inside the textfield here
// If you retrieve the textfield it does not contain the text inside of it
const textfield = await aui.get().text().below().text("User email").exec();

// below() returns an array. We want the first element of that array!
expect(textfield[0].text).toBe("Please find me");
```


