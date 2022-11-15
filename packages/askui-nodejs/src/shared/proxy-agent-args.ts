import http from 'http';
import https from 'https';

/**
 * Proxy agent configuration for https requests
 *
 * All modules which inheritate from the http(s).Agent can be used.
 * We recomment to use [hpagent](https://github.com/delvedore/hpagent)
 *
 * Installation:
 * ```bash
 * npm install --save hpagent
 * ```
 *
 * Configuration:
 * ```typescript
 *  const proxyUrl = "http://your-proxy:8021"
 *
 *  aui = await UiControlClient.build({
 *                    ...,
 *                    proxyAgents: {
 *                      http: new HttpProxyAgent({
 *                                  proxy: proxyUrl
 *                          }),
 *                      https: new HttpsProxyAgent({
 *                                  proxy: proxyUrl
 *                          }),
 *                    }
 *
 *
 * ```
 *
 * @param {http.Agent} http - Agent for http requests
 * @param {https.Agent} https - Agent for https requests
 ** */
export interface ProxyAgentsArgs {
  http: http.Agent,
  https: https.Agent,
}
