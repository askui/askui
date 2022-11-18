import { logger } from '../../lib/logger';
import { ProxyAgentArgs } from '../../shared/proxy-agent-args';

export class ProxyImportError extends Error { }

async function dynmicImportHpagent() {
  try {
    // eslint-disable-next-line import/no-extraneous-dependencies
    return await import('hpagent');
  } catch (err: unknown) {
    throw new ProxyImportError('Can\'t find "hpagent" module to configure proxy! Please, install hpagent for proxy support with "npm install --save-dev hpagent".');
  }
}

export async function buildProxyAgentArgsFromEnvironment(): Promise<ProxyAgentArgs | undefined> {
  const httpProxyUrl = process.env['HTTP_PROXY'];
  const httpsProxyUrl = process.env['HTTPS_PROXY'];

  if (httpProxyUrl === undefined && httpsProxyUrl === undefined) {
    logger.debug('No proxy defined. "HTTPS_PROXY" and "HTTP_PROXY" environment variables are empty.');
    return undefined;
  }

  const hpagent = await dynmicImportHpagent();

  logger.info('Using proxy! One of following environment variables are defined: "HTTPS_PROXY", "https_proxy", "HTTP_PROXY" and "http_proxy"');
  return {
    http: new hpagent.HttpProxyAgent({
      proxy: (httpProxyUrl || httpsProxyUrl) as string,
    }),
    https: new hpagent.HttpsProxyAgent({
      proxy: (httpsProxyUrl || httpProxyUrl) as string,
    }),
  };
}
