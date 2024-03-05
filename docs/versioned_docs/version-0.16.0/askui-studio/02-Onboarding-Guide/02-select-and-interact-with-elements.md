---
displayed_sidebar: askuiStudioSidebar
custom_edit_url: null
---

# Select and Interact with Elements

## Interacting with Elements / Operating System
AskUI automates based on your Operating System. Thus it offers every action a real human user can do at a Graphical User Interface (GUI).

- Click on elements (Left, right and middle click)
- Move mouse cursor
- Scroll
- Press keys on the keyboard
- Typing characters

Here are some examples of the actions and how they are entered as instructions in a step in the workflow editor. There are several variations of each command you can select from the dropdown-dialog. You might want to search for the one that is best suited for your use case:

```typescript
Click on
Mouse left click
Move mouse to
Scroll x <number> y <number>
Press key control
Type "<text>" in
Type "<text>"
```

## Selecting Elements

Selecting elements with AskUI is done *visually*. This means you describe what you see with a predefined syntax that is nearly natural language.

## Text Selectors
Let us start with a a selector you will use a lot: The **with text** selector.

Clicking on a specific text is done like this:

```typescript
Click on text with text "your text"
```

This clicks on your text, even if it is not exactly matched because it allows some letters to not match (text recognition is sometimes hard 🙃).

### Exactly Matching a Text

Sometimes you need a text to match exactly. You achieve it with this instruction:

```typescript
Click on text equals text "your exact text"
```

### Matching a Text with Regex
You can also specify the text you want to match with Regex. The next instruction matches text that starts with "YES" and can have any number of characters after "YES" such as "YESTerday.”

```typescript
Click on text match regex pattern "^YES*"
```

## Select Different Types of Elements like Icons
AskUI can detect different types of elements:

- Icon
- Button
- Textfield
- Checkbox
- Image
- switch
- table

### Strategies for Selecting Elements
You may wonder how to select them if there is for example more than one button detected by the inference?

**Text Inside The Element**

If there is text inside the element you can select the element by searching for the contained text:

```typescript
Move mouse to textfield contain text "Username"
```

**Matching an Icon with a Textual Description**

For icons you can give a description to AskUI and it will find your element:

```typescript
Move mouse to icon matching "tetris block"
```

**Relational Selectors**

If there is an element you can target near the element you want to select you can use a relational selectors:

- [above](../../api/04-Relations/above.md)
- [below](../../api/04-Relations/below.md)
- [leftOf](../../api/04-Relations/leftof.md)
- [rightOf](../../api/04-Relations/rightof.md)
- [nearestTo](../../api/04-Relations/nearestto.md)
- [contains](../../api/04-Relations/contains.md)
- [in](../../api/04-Relations/in.md)

Here are some examples of how that would look. For a detailed explanation check the API docs linked for each selector, where you will get an idea of how they work.

```typescript
Move mouse to checkbox above image
Move mouse to textfield below text
Move mouse to textfield leftOf text with text "Password"
Move mouse to switch rightOf text with text "Username"
Move mouse to button nearest to textfield
Move mouse to image contains text with text "Van Gogh"
Move mouse to textfield in image
```
