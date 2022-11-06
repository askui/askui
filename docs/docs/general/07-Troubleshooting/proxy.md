# Proxy

In enterprises are proxies a standard to secure and control the network. Our library use [hpagent](https://github.com/delvedor/hpagent) to provide http(s) proxy functionality, but all other [http.Agent](https://nodejs.org/api/http.html#class-httpagent) and [https.Agent](https://nodejs.org/api/https.html#class-httpsagent) should work.

## Http(s) proxy with hpagent

[hpagent](https://github.com/delvedor/hpagent) is an open source package which allows http(s) proxies and keep them alive.  

First we need to install the the library with:
```bash
npm i --save hpagent 
```

Then we have to add the `hpagent` imports and configure the **UiController** and the **** under `test/helper/jest.setup.ts`: file
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

Here are example for the `proxyUrl` (for more details see [docs from hpagent](https://github.com/delvedor/hpagent#usage))

| Proxy Type | Url | Description | 
| --- | --- | --- | 
| HTTP | e.g. http://proxy.company.com:8293 |  An http proxy without authentication |
| HTTP + Basic Auth | e.g. http://username:password@proxy.company.com:8293 |  An http proxy with authentication |
| HTTPS | e.g. https://proxy.company.com:8293 |  An https proxy without authentication |
| HTTPS + Basic Auth | e.g. https://username:password@proxy.company.com:8293 |  An http proxy with authentication.  |
| SOCKET |  |  Socket proxies are not supported by `hpagent` |


## Deep Package Inspection

Company proxies, like [zscalar](https://www.zscaler.com/resources/security-terms-glossary/what-is-cloud-proxy), are using [deep package inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) to analyse the internet traffic.
Such proxies are adding self signed certificates to the https request to break up the TLS connection.

This can result in following error messages:
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
```batch
set NODE_TLS_REJECT_UNAUTHORIZED 0
```

MacOS/Unix:
```bash
export NODE_TLS_REJECT_UNAUTHORIZED=0
```


### Add Self Signed Certificate as Extra CA Certs (RECOMMENDED)

The other option is to add the self signed certificate as [extra certificates for nodejs](https://nodejs.org/api/cli.html#node_extra_ca_certsfile). 

First get the certificate and convert it to a `.pem` file.

Then set the `NODE_EXTRA_CA_CERTS` with following commands:

Windows:
```batch
set NODE_EXTRA_CA_CERTS '<path>\<cert>.pem'
```

MacOS/Unix:
```bash
export NODE_EXTRA_CA_CERTS='<path>/<cert>.pem'
```

**Additional information:**
- [Get zscalar custom certificate](https://help.zscaler.com/zia/adding-custom-certificate-application-specific-trusted-store) 


