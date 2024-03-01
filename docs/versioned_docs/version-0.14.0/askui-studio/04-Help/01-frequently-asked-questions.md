---
displayed_sidebar: askuiStudioSidebar
custom_edit_url: null
---

# Frequently Asked Questions

## How does AskUI use my data?
Glad you asked! We fully comply with the European Union's General Data Protection Regulation (GDPR). This means you can request deletion, view, and change of your personal data.

When you use AskUI, screenshots get sent to our inference backend to analyze and predict elements. They only stay there for the duration of this process and get deleted immediately after. 

### How can I read a dynamically generated text from the UI and save it to an external file if necessary?
This works best via custom code in the code editor. All code which is written there is run during execution.

### Can I use it to automate Windows desktop applications? SilkTest has difficulties with Excel for example?
Yes, our AskUI Controller basically always automates the operating system. OS automation works the same way as the cases shown.

### Can I separate data to be entered from the workflow, e.g. to execute a workflow with 30 different values?
Yes, this is possible, variables can be used in the code view. In the SDK there is a tutorial here, for AskUI Studio a tutorial will follow https://www.askui.com/blog-posts/integrating-test-data-from-apis-csv-files-and-databases-into-askui-workflows.

### It seems slow. Can I improve the speed?
We are basically limited at the speed of the app to be automated. However, recognizing elements from a screenshot takes a little bit of time. If you can navigate your app by keypresses it will speed up the execution.

### Is it possible to control multiple devices in the same workflow?
This is also possible without any problems. For the SDK there is a [tutorial here](../../general/04-Executing%20Automations/multi-device-automation.md) (for AskUI Studio we are implementing no-code support).

### For native applications: How does the detection work if a window is not fullscreen but partially covering another window? Is it necessary to capture the whole screen or is it enough to capture the window in the foreground?
Currently we always capture the whole screen, but as long as the elements to be automated are visible, we can interact with them.
