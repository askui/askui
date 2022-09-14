---
custom_edit_url: null
---

# IPv6

By default, the UI Controller which the askui lib starts and interacts with (you can also start it manually) is started at ip address `127.0.0.1` (IPv4 ip address that `localhost` normally resolves to).

To use IPv6, e.g., because you disabled IPv4, you need to start the UI Controller manually with from the command line providing `--host ::1` (assuming you want to use ip address `::1`, otherwise provide a different address) and provide the `uiControllerUrl` when constructing the `UiControlClient` (by default, in the `<project_dir>/test/helper/jest.setup.ts`):
```typescript
aui = await UiControlClient.build({
    uiControllerUrl: 'http://[::1]:6769',
    // other client args...
});
```

For example, starting the UI Controller (version `latest`, for other versions just replace the respective part of the path) on Mac OS from your project's root directory would like this:
```shell
open ./node_modules/askui/dist/release/latest/darwin/askui-ui-controller.app --args --host ::1
```
