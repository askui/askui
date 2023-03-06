---
sidebar_position: 6
---

# Proxy

In enterprises, [proxies](https://en.wikipedia.org/wiki/Proxy_server) are a standard to secure and control network traffic. We support the use of proxies in two ways.

## Using Default Configuration with hpagent

 Per default, our library uses [hpagent](https://github.com/delvedor/hpagent) to support the use of HTTP and HTTPS proxies. `hpagent` is an open source package which provides HTTP(S) proxies that keeps connections alive. To use it, you need to
1. install `hpagent`
```bash
npm install --save-dev hpagent 
```
2. configure which proxies to use by setting the proxies' URLs using the environment variables `HTTP_PROXY` or `HTTPS_PROXY`
```bash
export HTTP_PROXY=http://<your-proxy-url>
export HTTPS_PROXY=https://<your-proxy-url>
```

## Manually Configuring the HTTP and HTTPS Agent

If you need even more control, you can also configure an HTTP agent and HTTPS agent supporting your proxy manually for either one or both, 
- the UI Controller (configuring the `UiController`) running on the OS you would like to control and
- the Inference API (configuring the `UiControlClient`) running on our servers and providing the vision to run your tests.

In the following example we are going to use [hpagent](https://github.com/delvedor/hpagent) again but you can use any HTTP and HTTPS agents that support proxies, e.g., the [http.Agent](https://nodejs.org/api/http.html#class-httpagent) or the [https.Agent](https://nodejs.org/api/https.html#class-httpsagent) provided by the `http` and `https` module of Node.js, respectively.

1. Install `hpagent`
```bash
npm install --save-dev hpagent 
```

2. Import `hpagent` (or the agent(s) you would like to use) and configure the **UiController** and/or the **UiControlClient** inside the `test/helper/jest.setup.ts` file.
```typescript
import { HttpProxyAgent, HttpsProxyAgent } from 'hpagent'; // <-- Add imports
// other code

beforeAll(async () => {
  // Add this block
  const httpProxyUrl = "http://<your-proxy-url>" // <-- Adapt http proxy url
  const httpsProxyUrl = "https://<your-proxy-url>" // <-- Adapt https proxy url

  const proxyAgents = {
    http: new HttpProxyAgent({
      proxy: httpProxyUrl,
    }),
    https: new HttpsProxyAgent({
      proxy: httpsProxyUrl,
    }),
  }

  // other code

  uiController = new UiController({
    proxyAgents // <-- Set proxy agents
  });
  
  // other code

  aui = await UiControlClient.build({
    proxyAgents // <-- Set proxy agents
  });

  // other code
})
```

Here are some example for the `httpProxyUrl` (for more details see [docs from hpagent](https://github.com/delvedor/hpagent#usage))

| Proxy Type | URL | Description | 
| --- | --- | --- | 
| HTTP | e.g. http://proxy.company.com:8293 |  A HTTP proxy without authentication |
| HTTP + Basic Auth | e.g. http://username:password@proxy.company.com:8293 |  A HTTP proxy with authentication |
| SOCKET |  |  Socket proxies are not supported by `hpagent` |

Here are some example for the `httpsProxyUrl` (for more details see [docs from hpagent](https://github.com/delvedor/hpagent#usage))

| Proxy Type | URL | Description | 
| --- | --- | --- | 
| HTTPS | e.g. https://proxy.company.com:8293 |  A HTTPS proxy without authentication |
| HTTPS + Basic Auth | e.g. https://username:password@proxy.company.com:8293 |  A HTTP proxy with authentication.  |
| SOCKET |  |  Socket proxies are not supported by `hpagent` |

## Deep Package Inspection

Company proxies, like [Zscalar](https://www.zscaler.com/resources/security-terms-glossary/what-is-cloud-proxy), use [deep package inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) to analyze the network traffic. Such proxies are adding self-signed certificates to the HTTPS request to break up the TLS connection.

This can result in the following error messages:
```
 RequestError: self signed certificate
```
or
```
 RequestError: unable to verify the first certificate
```

There are multiple options to deal with this:

### Deactivate TLS certificate validation (NOT RECOMMENDED)

This option deactivates the TLS validation (see [here](https://nodejs.org/api/cli.html#node_tls_reject_unauthorizedvalue)) and **is not recommended**. Only for testing!

Windows:
```shell
set NODE_TLS_REJECT_UNAUTHORIZED 0
```

macOS/Unix:
```bash
export NODE_TLS_REJECT_UNAUTHORIZED=0
```

### Add Self-Signed Certificate as Extra CA Certs (RECOMMENDED)

The other option is to add the self-signed certificate as [extra certificates for Node.js](https://nodejs.org/api/cli.html#node_extra_ca_certsfile). 

1. Get the certificate and convert it to a `.pem` file, e.g., by [exporting it with Chrome](https://superuser.com/a/1292098).
2. Set the `NODE_EXTRA_CA_CERTS` with the following commands:

Windows:
```shell
set NODE_EXTRA_CA_CERTS '<path>\<cert>.pem'
```

macOS/Unix:
```bash
export NODE_EXTRA_CA_CERTS='<path>/<cert>.pem'
```

**Additional information:**
- [Get Zscalar custom certificate](https://help.zscaler.com/zia/adding-custom-certificate-application-specific-trusted-store) 


