---
sidebar_position: 1
---

# How AskUI Works

## Overview

In this article, we will give a detailed overview of AskUI`s architecture and how it works under the hood.


![architecture](./../images/how_askui_works_architecture.png)

AskUI is built on top of a number of components. We will cover what these components are and how they work together to provide a flexible and reliable way to automate interactions with UI elements of any operating system or platform.

By the end of this article, whether you're a software developer, QA engineer, or automation specialist, you'll have a solid understanding of how AskUI works, and be able to use this knowledge to build more efficient automation for your project.


AskUI consists of three building blocks:

- AskUI Control Client
- AskUI UI Controller
- AskUI Inference Server

We will step through each of them and see how they work together to perform UI automation.

------
## Glossary

Throughout this article, we will use some terms that describe certain parts of AskUI. Some of them are used only internally and not exposed by the AskUI Control Client API, but are important for understanding how AskUI works and what it can do. Please refer to this table while reading.

| **Term**        | **Description** |
| --------------- | --------------- |
| *Element-description*    | A description for a UI element. In the AskUI Control Client API, for example, it is the coded description like `button()` or `textfield().contains().text('Email')`. |
| *Action*       | A method in the AskUI Control Client API that describes an action to be taken against the operating system. For example `click()`, `type()`. |
| *InputEvent* (internal) | A specific type of action to be taken against the operating system. For example *MouseInputEvent* or *KeyboardInputEvent*. |
| *ControlCommand* (internal) | A command sent to the UI controller telling what to perform on the operating system. It consists of one or more *InputEvents*. |

------

## AskUI Control Client

![control-client](./../images/how_askui_works_client.png)

The **AskUI Control Client** provides the API that tells AskUI what/how to automate. Once you start using AskUI, you will mostly interact with AskUI via the **AskUI Control Client**. In most of our tutorials and demonstrations, you will see `let aui: UIControlClient` is declared and combined with an *Action* and *Element-descriptions* which ends up forming an instruction, e.g:

```ts
await aui.click().button().withText('login').exec();
```

- As shown above, you form an instruction by chaining an *Action* with *Element-descriptions* using the Fluent API of the **AskUI Control Client**. It is designed as a **[fluent interface](https://en.wikipedia.org/wiki/Fluent_interface)** to increase readability and make it more understandable.

- The **AskUI Control Client** sends a request to the **AskUI UI Controller**:
    - to take a screenshot.
    - with a *ControlCommand* that tells what *InputEvent* to perform on the operating system.

- The **AskUI Control Client** communicates with the **AskUI Inference Server**:
    - to send a screenshot to be annotated with the instruction.
    - to receive the annotation, e.g. detected elements.


To use the **AskUI Control Client**, user credentials are required. User credentials can be obtained via our __AskUI Studio__. Please [fill out this form](https://xa5a040gvfz.typeform.com/to/DmarVHMn) to schedule a demonstration or request a trial to obtain access to __AskUI Studio__.

See our [API documentation](askui-ui-control-client.md) for more information on this component.

------

## AskUI UI Controller


![controller](./../images/how_askui_works_controller.png)

The **AskUI UI Controller** is a binary that controls the operating system. This binary gets automatically downloaded when the `UiController` is initialized by calling `UiController.start()`. Once executed, it stays in the background and communicates with the **AskUI Control Client** on a specific port to receive the *ControlCommand*. Based on the given *ControlCommand*, it triggers *InputEvents* respectively.

- The **AskUI UI Controller** is responsible for:
    - Taking a screenshot.
    - Triggering the *InputEvent*, i.e MouseInputEvent, KeyboardInputEvent, or shell execution.
    - Running the [interactive annotation](../../03-Element%20Selection/annotations-and-screenshots.md#interactive-annotation).

See our [API documentation](askui-ui-controller.md) for more information on this component.

------

## AskUI Inference Server


![server](./../images/how_askui_works_server.png)

The **AskUI Inference Server** is responsible for the prediction of UI elements within the given screenshot. As soon as it receives a request from the **AskUI Control Client**, it performs the prediction on the given image and returns the annotation to the **AskUI Control Client**. 

For the inference, we use a machine-learning model that consists of several submodels:
- **Object Detector**: Detects UI elements (e.g button, textfield).
- **Icon Classifier**: Predicts the class of an icon based on the detected objects (e.g. a user icon 👤).
- **Optical Character Recognition (OCR)**: Converts the image of a text into text.
- **Custom Element Detector**: Searches for an area in the given screenshot that matches the image given by the *Element-description* `.customElement()`.

------

## Them All in Action

Assuming that we run AskUI on the same device we want to automate, the simplest synopsis can be described as such:


![Image description](./../images/how_askui_works_architecture.png)

When running AskUI, 
1. The **AskUI Control Client** checks whether it is needed to be processed by the **Inference Server**.

2. If the code **contains any of the [Element-description](../../../api/01-API/table-of-contents.md#element-descriptions) or [Getters](../../../api/01-API/table-of-contents.md#getters)**, then the **AskUI Control Client** tells the **AskUI UI Controller** to take a screenshot of the given screen and sends it to the **Inference Server**. 

3. After the **AskUI Control Client** has retrieved the annotation back from the server, it sends a *ControlCommand* to the **AskUI UI Controller**. Afterwards, the **AskUI UI Controller** triggers the *InputEvent* on the operating system.

    ```ts
    // an example of AskUI code containing an element-identifier
    await aui.click().button().withText('Confirm').exec();
    // Here, the element-description 'button()' is used together,
    // so the client will fire a request to the server.
    ```

4. If the code **contains an [Action](../../../api/01-API/table-of-contents.md#actions) but no Element-description**, then the **AskUI Control Client** sends the *ControlCommand* to the **AskUI UI Controller** to trigger the *InputEvent* directly.

    ```ts
    // an example of AskUI code containing only a command
    await aui.pressThreeKeys('control','alt','del').exec();
    // It uses only a command 'pressThreeKeys()',
    // so it will be executed by the UI Controller directly.
    ```

- An **Element-description** represents a specific type of UI element that can be recognized by inference. Most of the commonly used UI elements such as *button*, *textfield* are supported and can be used.

- An **Action** represents a specific type of action to be performed, i.e *Mouse/Keyboard Input Event* or *Shell Command*. This action can be performed on a specific element when combined with **Element-descriptions** or can be performed on its own as shown in the example right above.

Please visit our [API Docs](../../../api/01-API/table-of-contents.md), if you want to learn more about different types of *Element-description* and *Action*.

------

## Conclusion

Here we have seen the three core components of AskUI. If you aim to use AskUI in a more advanced way, e.g. integrating it into your CI/CD pipeline, it may be worthwhile to get an overview of how it is composed. For more practical examples, please refer to our [Tutorials](../../06-Tutorials/index.mdx) and [API docs](../../../api/01-API/table-of-contents.md). And don't forget to come over to our [Outverse-Community](https://app.outverse.com/askui/community/home), if you have any questions about AskUI!