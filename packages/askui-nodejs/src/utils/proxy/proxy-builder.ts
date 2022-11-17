import { logger } from '../../lib/logger';
import { ProxyAgentsArgs } from '../../shared/proxy-agent-args';

export class ProxyImportError extends Error {
}

async function dynmicImportHpagent() {
  try {
    // eslint-disable-next-line import/no-extraneous-dependencies
    return await import('hpagent');
  } catch (err: unknown) {
    throw new ProxyImportError('Can\'t import hpagent to configure proxy! Please install hpagent for proxy support with "npm i hpagent"');
  }
}

export async function buildProxyAgentsArgsFromEnvironment(): Promise<ProxyAgentsArgs | undefined> {
  const httpProxyUrl = process.env['HTTP_PROXY'] || process.env['http_proxy'] || undefined;
  const httpsProxyUrl = process.env['HTTPS_PROXY'] || process.env['https_proxy'] || undefined;

  if (!(httpProxyUrl || httpsProxyUrl)) {
    logger.debug('No proxy defined! "HTTPS_PROXY", "https_proxy", "HTTP_PROXY" and "http_proxy" environment variables are empty!');
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
