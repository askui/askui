import { logger } from '../lib';
import { CredentialArgs } from './credentials-args';

export function envCredentials(): CredentialArgs | undefined {
  const envToken = process.env['ASKUI_TOKEN'];
  const envWorkspaceId = process.env['ASKUI_WORKSPACE_ID'];
  if (envToken && envWorkspaceId) {
    logger.info('Credentials are used from ENV variables: ASKUI_TOKEN and ASKUI_WORKSPACE_ID');
    return {
      workspaceId: envWorkspaceId,
      token: envToken,
    };
  }
  return undefined;
}
