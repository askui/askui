import fs from 'fs';
import http from 'http';
import https from 'https';
import { join } from 'path';
import dns, { LookupOneOptions } from 'dns';

const proxy = require('proxy');

export const PROXY_HOSTNAME = 'proxy.proxy-unit-test-askui.com';
export const SERVER_HOSTNAME = 'server.proxy-unit-test-askui.com';

/** *
 * This file is oriented by the integration tests of hpagent: https://github.com/delvedor/hpagent/blob/main/test/utils.js
 */
export function addBasicAuthentication(httpProxy: http.Server): http.Server {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-param-reassign
  (httpProxy as any).authenticate = (req: any, fn: any) => {
    const header = req.headers['proxy-authorization'] || ''; // get the auth header
    const token = header.split(/\s+/).pop() || ''; // and the encoded auth token
    const auth = Buffer.from(token, 'base64').toString(); // convert from base64
    const parts = auth.split(/:/); // split on colon
    const username = parts.shift(); // username is first
    const password = parts.join(':');

    if (!(username === 'username' && password === 'password')) {
      fn(null, false);
      return;
    }
    fn(null, true);
  };
  return httpProxy;
}

export async function buildProxy(port = 8009): Promise<http.Server> {
  return new Promise<http.Server>((resolve, _reject) => {
    const httpProxy = proxy(http.createServer().listen(port, () => {
      resolve(httpProxy);
    }));
    httpProxy.agent = new http.Agent();
  });
}

/**
 * We've manually created self signed certificates for the proxy
 * and for the server, with the following domains (Subject CN)
 * proxy.proxy-unit-test-askui.com
 * server.proxy-unit-test-askui.com
 *
 * This will allow us to properly test the TLS-over-TLS proxy,
 * specifically that the first handshake provides the proxy SNI, not the server SNI.
 *
 * These certs were generated using openssl:
 * openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout key_server.pem -out cert_server.pem
 * openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout key_proxy.pem -out cert_proxy.pem
 *
 * Additional we generated the a CA to simulate Zscaler deep package inspection for the server certs
 * https://gist.github.com/fntlnz/cf14feb5a46b2eda428e000157447309
 *
 *
 * The certs are concatenated to the can be passed to Node.JS as trusted certs:
 * $ cat cert_proxy.pem > unit_test.pem
 * $ cat cert_server.pem >> unit_test.pem
 *
 * using `NODE_EXTRA_CA_CERTS` (https://nodejs.org/api/cli.html#node_extra_ca_certsfile)
 *
 * This allows actual verification of the certs w/ hostname instead of ignoring all errors
 */

export const sslProxy = {
  key: fs.readFileSync(join(__dirname, 'certs/key_proxy.pem')),
  cert: fs.readFileSync(join(__dirname, 'certs/cert_proxy.pem')),
};

export const sslServer = {
  key: fs.readFileSync(join(__dirname, 'certs/key_server.pem')),
  cert: fs.readFileSync(join(__dirname, 'certs/cert_server.pem')),
};

/**
 * We override only the SERVER_HOSTNAME DNS requests from the node process (for unit test)
 * to resolve to 127.0.0.1. This allows us to use the self signed certs we made for the fake
 * domains to be verified, and then the connection made to localhost.
 */

const originalDnsLookup = dns.lookup;
dns.lookup = (((
  hostname: string,
  options: LookupOneOptions,
  callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void,
): void => {
  if (hostname === SERVER_HOSTNAME || hostname === PROXY_HOSTNAME) {
    return callback(null, '127.0.0.1', 4);
  }
  return originalDnsLookup(hostname, options, callback);
}) as any); // eslint-disable-line @typescript-eslint/no-explicit-any

export async function buildSecureServer(port = 8081): Promise<https.Server> {
  return new Promise<https.Server>((resolve, _reject) => {
    const secureServer = https.createServer(sslServer).listen(port, () => {
      resolve(secureServer);
    });
  });
}

export async function buildSecureProxy(): Promise<https.Server> {
  return new Promise((resolve, _reject) => {
    const httpProxy = proxy(https.createServer(sslProxy)).listen(8010, () => {
      resolve(httpProxy);
    });
  });
}
