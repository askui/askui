import http from 'http';
import https from 'https';

/**
 * Proxy agent configuration for HTTP(S) requests
 *
 * All modules which implement the `http.Agent`'s or `https.Agent`'s
 * interface, respectively, can be used.
 * We recommend to use [hpagent](https://github.com/delvedore/hpagent).
 *
 * Installation:
 * ```shell
 * npm install --save hpagent
 * ```
 *
 * Configuration:
 * ```typescript
 *  const httpProxyUrl = "http://your-proxy:3128";
 *  const httpsProxyUrl = "https://your-proxy:3129";
 *
 *  const aui = await UiControlClient.build({
 *    proxyAgents: {
 *      http: new HttpProxyAgent({ proxy: httpProxyUrl }),
 *      https: new HttpsProxyAgent({ proxy: httpsProxyUrl }),
 *    },
 *  });
 * ```
 *
 * @param {http.Agent} http - Agent for http requests
 * @param {https.Agent} https - Agent for https requests
 ** */
export interface ProxyAgentArgs {
  http: http.Agent,
  https: https.Agent,
}
