import {
  envProxyAgents,
  ProxyImportError,
} from './proxy-builder';

type HpagnetProxyAgentArgs = { http: { proxy: { origin: string } },
  https: { proxy: { origin: string } } };

function castToHpagent(value: unknown): HpagnetProxyAgentArgs {
  return value as HpagnetProxyAgentArgs;
}

describe('proxy builder', () => {
  beforeEach(async () => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  afterEach(async () => {
    delete process.env['HTTP_PROXY'];
    delete process.env['HTTPS_PROXY'];
  });

  it('should retrun undefined when https_proxy and http_proxy not set', async () => {
    const proxyAgent = await envProxyAgents();

    expect(proxyAgent).toBeUndefined();
  });

  it('should build https and http proxy agent when http_proxy url is set', async () => {
    const expectedProxyUrl = 'http://localhost:3128';
    process.env['HTTP_PROXY'] = expectedProxyUrl;

    const proxyAgentArgs = castToHpagent(await envProxyAgents());

    expect(proxyAgentArgs.http.proxy.origin).toEqual(expectedProxyUrl);
    expect(proxyAgentArgs.https.proxy.origin).toEqual(expectedProxyUrl);
  });

  it('should build https and http proxy agent when https_proxy url is set', async () => {
    const expectedProxyUrl = 'https://localhost:3129';
    process.env['HTTPS_PROXY'] = expectedProxyUrl;

    const proxyAgentArgs = castToHpagent(await envProxyAgents());

    expect(proxyAgentArgs.http.proxy.origin).toEqual(expectedProxyUrl);
    expect(proxyAgentArgs.https.proxy.origin).toEqual(expectedProxyUrl);
  });

  it('should build https and http proxy agent when http_proxy and https_proxy url is set', async () => {
    const expectedHttpProxyUrl = 'http://localhost:3128';
    const expectedHttpsProxyUrl = 'https://localhost:3129';
    process.env['HTTP_PROXY'] = expectedHttpProxyUrl;
    process.env['HTTPS_PROXY'] = expectedHttpsProxyUrl;

    const proxyAgentArgs = castToHpagent(await envProxyAgents());

    expect(proxyAgentArgs.http.proxy.origin).toEqual(expectedHttpProxyUrl);
    expect(proxyAgentArgs.https.proxy.origin).toEqual(expectedHttpsProxyUrl);
  });

  it('should throw ProxyImportError when hpagent isn\'t installed', async () => {
    process.env['HTTP_PROXY'] = 'http://localhost:3128';
    jest.mock('hpagent', () => { throw new Error(); });

    await expect(() => envProxyAgents()).rejects
      .toThrowError(ProxyImportError);
  });
});
