---
displayed_sidebar: apiSidebar
---
# execOnShell

Executes a shell command on the device.

**Example:**
```typescript 
// Open the lastpass app
await aui.execOnShell('monkey -p com.lastpass.authenticator 1').exec()
```

   * @param {string} shell_command - A shell command which is executed.
