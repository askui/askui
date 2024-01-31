---
sidebar_position: 6
pagination_next: general/Getting Started/write-your-first-instruction
---

# Enterprise Checklist
If you want to get started with AskUI in an enterprise environment you will experience challenges unique to your company. This checklist will give you everything that AskUI needs and guidance on how to resolve upcoming errors. If you are not familiar with setting this up we __strongly_ suggest to get someone from your IT-department involved who knows how the network in your company works.

Common problems you may run into:
* [Network](#network): You need to use a proxy for internet access.
* [Permissions](#permissions): Your machine does not have the necessary permissions.
* [Software needed](#software-needed): AskUI needs Node.js and Python and to install dependencies.

:::tip
On windows please use the PowerShell all the time.
:::

## Network
This is often a tricky one. So if you experience problems installing AskUI that suggests the problem is missing internet access:

* Please check our [Troubleshooting - Proxy page](../../07-Troubleshooting/proxy.md)
* Get help from your IT-department

## Software Needed

### Node.js
Install Node.js from the [official download page](https://nodejs.org/en/download).

Open a terminal (Windows: PowerShell) and run the following commands to check if you have the correct versions of `node` and `npm` installed:

* `node --version`
* `npm --version`

### Python
Python `3.10` or higher needs to be installed. Open a terminal (Windows: PowerShell) and run `python --version` to check if you have the correct version.

* [Official Download page for Windows](https://www.python.org/downloads/windows/)
* [Official Download page for macOS](https://www.python.org/downloads/macos/)

### Windows
When you want to use the `AskUI Runner` you will create a virtual environment.

* Follow [these instruction](https://mothergeo-py.readthedocs.io/en/latest/development/how-to/venv-win.html). And consult your IT-department if you run into problems.

### Install Dependencies
You will probably have to install dependencies like node-packages over a company internal repository management system like Artifactory.

* Find out how to set up `Node.js` and `Python` for your internal repository management system. Consult your IT-department if necessary.
* Check our [proxy troubleshooting page](../../07-Troubleshooting/proxy.md) for AskUI specific guidance on how to setup the proxy for `Node.js`.

### Permissions
The AskUI Controller needs permissions for _screen recording_ and _accessibility features_ to control your machine like a human. Follow the instructions for your operating system.

### macOS

* [Enable screen recording instructions](https://support.apple.com/en-gb/guide/mac-help/mchld6aa7d23/mac)
* [Enable accessibility instructions](https://support.apple.com/en-gb/guide/mac-help/mh43185/mac)
