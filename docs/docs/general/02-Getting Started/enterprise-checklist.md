---
sidebar_position: 6
pagination_next: general/Getting Started/write-your-first-instruction
---

# Enterprise Checklist
If you want to get started with AskUI in an enterprise environment you will experience challenges unique to your company. This checklist will give you everything that AskUI needs and guidance on how to resolve upcoming errors. If you are not familiar with setting this up we __strongly_ suggest to get someone from your IT-department involved who knows how the network in your company works.

Here is 
* [Network](#network): Your machines configuration will not allow you to connect to the internet directly, but over a proxy
* [Permissions](#permissions)
* [Software needed](#software-needed)

## Network

### Permissions
AskUI needs permissions for _screen recording_ and _accessibility features_ to control your machine like a human. 

## Software Needed

### Node.js

### Python
* Python `3.10` or higher needs to installed. Open a terminal/Powershell and run `python --version` to check if you have the correct version.
* Also _sourcing_ files needs to be possible.
    * Windows: Only possible in Powershell

### Install Dependencies
You will have to install dependencies like node-packages over a company internal repository management system like Artifactory.

* Find out how to set up `Node.js` and `Python`` for your internal repository management system. Consult your IT-department if necessary.
* Check our [Proxy page](../07-Troubleshooting/proxy.md) for AskUI specific guidance