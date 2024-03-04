import { logger } from '../lib';
import { CredentialArgs } from './credentials-args';
import { envCredentials } from './read-environment-credentials';
import { ClientArgs } from './ui-controller-client-interface';

export function readCredentials(clientArgs: ClientArgs): CredentialArgs {
  const environmentCredentials = envCredentials();
  const inCodeCredentials = clientArgs.credentials;

  const credentials = inCodeCredentials ?? environmentCredentials;
  if (!credentials) {
    throw new Error(
      'No Credentials are Defined! Please define a token and a workspace ID in the environment variables ASKUI_TOKEN and ASKUI_WORKSPACE_ID or define them in the UiControlClient.build.',
    );
  }

  if (!credentials?.token) {
    throw new Error(
      'No Token is Defined! Please define a token in the environment variable ASKUI_TOKEN or define a token in the UiControlClient.',
    );
  }

  if (!credentials?.workspaceId) {
    throw new Error(
      'No Workspace ID is Defined! Please define a workspace ID in the environment variable ASKUI_WORKSPACE_ID or define a workspace ID in the UiControlClient.',
    );
  }

  if (environmentCredentials && inCodeCredentials) {
    logger.warn(
      'In-code credentials in UiControlClient.build and ENV variables(ASKUI_WORKSPACE_ID und ASKUI_TOKEN) are defined! We recommend to remove the in-code credentials of security reason! In-code credentials will be used For this execution.',
    );
  }

  return credentials;
}
