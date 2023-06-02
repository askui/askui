import got, { Got } from 'got';
import { HttpProxyAgent, HttpsProxyAgent } from 'hpagent';
import { Server } from 'http';
import {
  addBasicAuthentication,
  buildProxy,
  buildSecureServer,
  buildSecureProxy,
  SERVER_HOSTNAME,
  PROXY_HOSTNAME,
} from '../../../test/proxy/proxy-utils';

describe('proxy and hpagent', () => {
  let httpProxy: Server;

  describe('default proxy', () => {
    let askuiGot: Got;

    beforeEach(async () => {
      httpProxy = await buildProxy();
      askuiGot = got.extend({
        agent: {
          http: new HttpProxyAgent({
            keepAlive: false,
            proxy: 'http://localhost:3128',
          }),
          https: new HttpsProxyAgent({
            keepAlive: false,
            proxy: 'http://localhost:3128',
          }),
        },
      });
    });

    afterEach(() => {
      httpProxy.close();
    });

    it('should tunnel https connection over http proxy with valid certificate', async () => {
      const response = await askuiGot.get('https://www.google.com', {
        retry: 0,
      });

      expect(response.statusCode).toBe(200);
    });
  });

  describe('http proxy', () => {
    beforeEach(async () => {
      httpProxy = await buildProxy();
    });

    afterEach(() => {
      httpProxy.close();
    });

    it('should tunnel https connection over http proxy with valid certificate', async () => {
      const response = await got.get('https://www.google.com', {
        retry: 0,
        agent: {
          https: new HttpsProxyAgent({
            keepAlive: false,
            scheduling: 'lifo',
            proxy: 'http://localhost:3128',
          }),
        },
      });

      expect(response.statusCode).toBe(200);
    });

    it('should tunnel https connection over http proxy with self signed certificate', async () => {
      const httpServer = await buildSecureServer();
      httpServer.on('request', (_req, res) => res.end('ok'));

      const response = await got.get(`https://${SERVER_HOSTNAME}:8081`, {
        retry: 0,
        agent: {
          https: new HttpsProxyAgent({
            keepAlive: false,
            proxy: 'http://localhost:3128',
          }),
        },
      });

      expect(response.statusCode).toBe(200);
      expect(response.body).toBe('ok');
      httpServer.close();
    });

    it('should tunnel http connection over http proxy', async () => {
      const response = await got.get('http://www.google.com', {
        retry: 0,
        agent: {
          http: new HttpProxyAgent({
            keepAlive: false,
            proxy: 'http://localhost:3128',
          }),
        },
      });

      expect(response.statusCode).toBe(200);
    });
  });

  describe('proxy basic authentication', () => {
    beforeEach(async () => {
      httpProxy = await buildProxy();
    });

    afterEach(() => {
      httpProxy.close();
    });

    it('should tunnel https connection over http proxy proxy basic authentication in proxy url', async () => {
      httpProxy = addBasicAuthentication(httpProxy);

      const response = await got.get('https://www.google.com', {
        retry: 0,
        agent: {
          https: new HttpsProxyAgent({
            keepAlive: false,
            proxy: 'http://username:password@localhost:3128',
          }),
        },
      });

      expect(response.statusCode).toBe(200);
    });

    // flaky test
    it.skip('should tunnel https connection over http proxy proxy basic authentication as proxy header', async () => {
      httpProxy = addBasicAuthentication(httpProxy);

      const response = await got.get('https://www.google.com', {
        retry: 0,
        agent: {
          https: new HttpsProxyAgent({
            keepAlive: false,
            proxy: 'http://localhost:3128',
            proxyRequestOptions: {
              headers: {
                'proxy-authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=',
              },
            },
          }),
        },
      });

      expect(response.statusCode).toBe(200);
    });
  });

  describe('https proxy', () => {
    beforeEach(async () => {
      httpProxy = await buildSecureProxy();
    });

    afterEach(() => {
      httpProxy.close();
    });

    it('should tunnel http connection over https proxy', async () => {
      const response = await got.get('http://www.google.com', {
        retry: 0,
        agent: {
          http: new HttpProxyAgent({
            keepAlive: false,
            proxy: `https://${PROXY_HOSTNAME}:8010`,
          }),
        },
      });

      expect(response.statusCode).toBe(200);
    });

    it('should tunnel https connection over https proxy', async () => {
      const response = await got.get('https://www.google.com', {
        retry: 0,
        agent: {
          https: new HttpsProxyAgent({
            keepAlive: false,
            proxy: `https://${PROXY_HOSTNAME}:8010`,
          }),
        },
      });

      expect(response.statusCode).toBe(200);
    });
  });
});
