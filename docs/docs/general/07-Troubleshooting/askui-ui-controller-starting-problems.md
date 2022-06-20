---
custom_edit_url: null
---

# askui UI Controller Starting Problems

## Wayland

At the moment we don't support the windowing system Wayland for any linux distribution. 
As a solution, you can switch to Xorg instead of Wayland ([how to switch to Xorg](https://www.maketecheasier.com/switch-xorg-wayland-ubuntu1710/)). 



## libfuse2 

If you are using Ubuntu 22.04 or later, you need to install libfuse before using askui lib 
since it's no longer installed per default.

Libfuse2 can be installed with these commands: 

```shell
sudo apt-get update
```

```shell
sudo apt-get install libfuse2

