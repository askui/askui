---
custom_edit_url: null
---

# askui UI Controller Starting Problems

## Wayland

At the moment we don't support the windowing system Wayland for any linux distribution. 
As solution you have to use Xorg instead of Wayland. You can look on [this page](https://www.maketecheasier.com/switch-xorg-wayland-ubuntu1710/) to see how to Switch to Xorg from Wayland.



## libfuse2 

With Ubuntu 22.04 libfuse will no longer be installed per default.
That's why you have to manually install libfuse2 to use the askui lib

Therefore just run the following commands:

```shell
sudo apt-get update
```

```shell
sudo apt-get install libfuse2

