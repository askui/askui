| Term                   | Meaning     |
| ---------------------- | ----------- |
| access token           | Gives you access to the askui inference in combination with your `workspace id`. Every `access token` has an expiry date and is assigned to exactly one workspace.  |
| action                 |A method in the askui Control Client API that describes an action to be taken against the operating system. For example click(), type(). |
| annotation             | Marked area around an element with metadata name, text, and bounding box coordinates. |
| automation             | A system of multiple connected workflows. |
| bounding box           | Rectangle described by coordinates that describe an element's location. Displayed visually as red rectangle. |
| credentials            | Combination of `workspace id` and `access token` living in the same workspace. |
| element                | A user interface component which websites and blocks are build from. |
| element-description    | A description for a UI element. In the askui Control Client API, for example, it is the coded description like `button()` or `textfield().contains().text('Email')`. |
| inference              | The process of annotating a user interface. |
| inference server       | Backend which performs the inference. |
| instruction            | Single askui directive which usually has following parts: _action_ + (optional)_element-description_.|
| interactive annotation | Exploring the annotations of a user interface through an annotated screenshot. |
| UI Controller          | Service to control inputs and observe the visuals on the operating system. |
| UI Control Client      | Retrieves the annotations from the inference server and uses the given instructions to execute inputs on the operating system through the UI Controller. |
| User Portal            | In the [askui User Portal](https://app.askui.com/) you can create `access tokens` for your workspace. |
| workflow               | A set of instructions to complete a single task |
| workspace              | Every registered user has exactly one workspace. Every workspace can contain multiple access tokens. |
| workspace id           | The id of your workspace. Gives you access to the askui inference in combination with your `access token`. |