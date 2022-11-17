# Proxy

In enterprises, proxies are standard to secure and control the network. Our library uses  [hpagent](https://github.com/delvedor/hpagent) to provide HTTP(S) proxy functionality, but all other [http.Agent](https://nodejs.org/api/http.html#class-httpagent) and [https.Agent](https://nodejs.org/api/https.html#class-httpsagent) should work.

## Automatic HTTP(S) proxy detection

Our library is detecting HTTP(S) proxy automatically when one of the following environment variables are detected: `HTTP_PROXY`, `HTTPS_PROXY`, `http_proxy` or `https_proxy`.

You need only to install [hpagent](https://github.com/delvedor/hpagent) with following command:
```bash
npm i --save hpagent 
```

If this is not working properly, please set the proxy URL manually.


## Manual HTTP(S) proxy setup

[hpagent](https://github.com/delvedor/hpagent) is an open source package which provides HTTP(S) proxies that keeps collections alive.

First, we need to install the library with:
```bash
npm i --save hpagent 
```

Then we have to add the `hpagent` imports and configure the **UiController** and the **UiControlClient** under `test/helper/jest.setup.ts`: file
```typescript
import { HttpProxyAgent, HttpsProxyAgent } from 'hpagent'; // <-- Add imports

  // other code

beforeAll(async () => {
  // Add this block
  const proxyUrl = "http://<your-proxy-url>" // <-- Adapt proxy url

  const proxyAgents = {
    proxyAgents: {
      http: new HttpProxyAgent({
          proxy: proxyUrl
        }),
      https: new HttpsProxyAgent({
          proxy: proxyUrl
        }),
  }}


  uiController = new UiController({
    ...proxyAgents // <-- Set proxy agent
  });
  
  // other code

  aui = await UiControlClient.build({
    ...proxyAgents // <-- Set proxy agent
  });

  // other code
})
```

Here are some example for the `proxyUrl` (for more details see [docs from hpagent](https://github.com/delvedor/hpagent#usage))

| Proxy Type | URL | Description | 
| --- | --- | --- | 
| HTTP | e.g. http://proxy.company.com:8293 |  A HTTP proxy without authentication |
| HTTP + Basic Auth | e.g. http://username:password@proxy.company.com:8293 |  A HTTP proxy with authentication |
| HTTPS | e.g. https://proxy.company.com:8293 |  A HTTPS proxy without authentication |
| HTTPS + Basic Auth | e.g. https://username:password@proxy.company.com:8293 |  A HTTP proxy with authentication.  |
| SOCKET |  |  Socket proxies are not supported by `hpagent` |


## Deep Package Inspection

Company proxies, like [Zscalar](https://www.zscaler.com/resources/security-terms-glossary/what-is-cloud-proxy), are using [deep package inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) to analyze the internet traffic.
Such proxies are adding self-signed certificates to the HTTPS request to break up the TLS connection.

This can result in the following error messages:
```
 RequestError: self signed certificate
```
or
```
 RequestError: unable to verify the first certificate
```

### Deactivate TLS certificate validation (NOT RECOMMENDED)

This option deactivates the TLS validation (see [here](https://nodejs.org/api/cli.html#node_tls_reject_unauthorizedvalue)) and **is not recommended**. Only for testing!

Windows:
```shell
set NODE_TLS_REJECT_UNAUTHORIZED 0
```

macOS/Unix:
```shell
export NODE_TLS_REJECT_UNAUTHORIZED=0
```


### Add Self-Signed Certificate as Extra CA Certs (RECOMMENDED)

The other option is to add the self-signed certificate as [extra certificates for nodejs](https://nodejs.org/api/cli.html#node_extra_ca_certsfile). 

First get the certificate and convert it to a `.pem` file. 
1. [Export `.pem` certificate with chrome](https://superuser.com/a/1292098)

Then set the `NODE_EXTRA_CA_CERTS` with the following commands:

Windows:
```shell
set NODE_EXTRA_CA_CERTS '<path>\<cert>.pem'
```

macOS/Unix:
```shell
export NODE_EXTRA_CA_CERTS='<path>/<cert>.pem'
```

**Additional information:**
- [Get Zscalar custom certificate](https://help.zscaler.com/zia/adding-custom-certificate-application-specific-trusted-store) 


