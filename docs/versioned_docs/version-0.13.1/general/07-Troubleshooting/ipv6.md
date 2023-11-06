---
sidebar_position: 7
---

# IPv6

By default, the UI Controller which the AskUI lib starts and interacts with (you can also start it manually) is started at IP address `127.0.0.1` (IPv4 IP address that `localhost` normally resolves to).

To use IPv6, e.g., because you disabled IPv4, you need to start the UI Controller manually from the command line providing `--host ::1` (assuming you want to use IP address `::1`, otherwise provide a different address) and provide the `uiControllerUrl` when constructing the `UiControlClient` (by default, in the `<project_dir>/test/helpers/askui-helper.ts`):
```typescript
aui = await UiControlClient.build({
    uiControllerUrl: 'http://[::1]:6769',
    // other client args...
});
```

For example, starting the UI Controller (version `latest`, for other versions replace the respective part of the path) on macOS from your project's root directory is done like this:
```shell
./node_modules/askui/dist/release/latest/darwin/askui-ui-controller.app --args --host ::1
```

On other operating systems the path is different:
```shell
# Windows
start ./node_modules/askui/dist/release/latest/win32/askui-ui-controller.exe --args --host ::1

# Linux
./node_modules/askui/dist/release/latest/linux/askui-ui-controller --args --host ::1
```
