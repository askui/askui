# Linux

## Wayland

We do not yet support the windowing system Wayland for any Linux distribution. So you
are going to see multiple errors when trying to run tests or may not even be able to
start the UI Controller. 

You can check if you are running on Wayland with

```shell
echo $XDG_SESSION_TYPE
```

If it says "wayland", you guessed it, you are running on Wayland.

As a solution, you can switch to Xorg instead of Wayland 
([how to switch to Xorg](https://www.maketecheasier.com/switch-xorg-wayland-ubuntu1710/)). 

## libfuse2 

If you are using Ubuntu 22.04 or later, you need to install libfuse before using askui lib 
since it's no longer installed per default.

libfuse2 can be installed with: 

```shell
sudo apt-get update
sudo apt-get install libfuse2
```
