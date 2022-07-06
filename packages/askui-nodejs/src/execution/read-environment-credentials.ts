import { logger } from '../lib';
import { CredentialArgs } from '../utils/http/credentials';

export function envCredentials(): CredentialArgs | undefined {
  const envToken = process.env['ASKUI_TOKEN'];
  const envWorkspaceId = process.env['ASKUI_WORKSPACE_ID'];
  const envEmail = process.env['ASKUI_EMAIL'];
  if (envToken && envWorkspaceId && envEmail) {
    logger.info('Credentials are used from ENV variables: ASKUI_TOKEN, ASKUI_TENANT and ASKUI_EMAIL');
    return {
      workspaceId: envWorkspaceId,
      email: envEmail,
      token: envToken,
    };
  }
  return undefined;
}
