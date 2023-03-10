---
displayed_sidebar: apiSidebar
---
# execOnShell

Executes a shell command on the device your UiController is connected to.

**Example:**
```typescript 
// Open the lastpass app on Android
await aui.execOnShell('monkey -p com.lastpass.authenticator 1').exec()

// Open Google Chrome on Windows
await aui.execOnShell("start chrome").exec();

// Open Google Chrome on macOS
await aui.execOnShell("open -a 'Google Chrome'").exec();

// Open Google Chrome on Linux
await aui.execOnShell("chrome").exec();
```

   * @param {string} shell_command - A shell command which is executed.
