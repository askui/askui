| Term                   | Meaning     |
| ---------------------- | ----------- |
| annotation             | Marked area around an element with metadata name, text, and bounding box coordinates. |
| access token           | Gives you access to the askui inference in combination with your `workspace id`. Every `access token` has an expiry date and is assigned to exactly one workspace.  |
| automation             | A set of instructions to achieve a task. |
| bounding box           | Rectangle described by coordinates that describe an element's location. Displayed visually as red rectangle. |
| command                | An action on the user interface. For example mouse left click or keypress. |
| credentials            | Combination of `workspace id` and `access token` living in the same workspace. |
| element                | A user interface component which websites and blocks are build from. |
| filters                | Screens for a type of an element. For example _button_. |
| inference              | The process of annotating a user interface. |
| inference server       | Backend which performs the inference. |
| instruction            | Single askui directive which usually has following parts: _command_ + (optional)_filters_.|
| interactive annotation | Exploring the annotations of a user interface through an annotated screenshot. |
| selector               | Selects elements on the user interface. |
| UI Controller          | Service to control inputs and observe the visuals on the operating system. |
| UI Control Client      | Retrieves the annotations from the inference server and uses the given instructions to execute inputs on the operating system through the UI Controller. |
| User Portal            | In the [askui User Portal](https://app.v2.askui.com/) you can create `access tokens` for your workspace. |
| workspace              | Every registered user has exactly one workspace. Every workspace can contain multiple access tokens. |
| workspace id           | The id of your workspace. Gives you access to the askui inference in combination with your `access token`. |