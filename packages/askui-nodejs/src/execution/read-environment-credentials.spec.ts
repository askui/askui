import { envCredentials } from './read-environment-credentials';

describe('envCredentials()', () => {
  test('should read the credentials from the environment variables', () => {
    process.env['ASKUI_TOKEN'] = 'token';
    process.env['ASKUI_WORKSPACE_ID'] = 'id123';
    const credentialsFromTheEnv = envCredentials();
    expect(credentialsFromTheEnv).toStrictEqual({ workspaceId: 'id123', token: 'token' });
  });
});
