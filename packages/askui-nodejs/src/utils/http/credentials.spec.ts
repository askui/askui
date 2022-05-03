import { Credentials } from './credentials';
import { envCredentials } from './read-environment-credentials';

describe('Credentials', () => {
  describe('base64Encoded()', () => {
    test('should return base64-encoded credentials', () => {
      const credentials = new Credentials({ tenant: 'tenant', email: 'name@tenant.com', password: 'password' });

      expect(credentials.base64Encoded).toBe('dGVuYW50fG5hbWVAdGVuYW50LmNvbTpwYXNzd29yZA==');
    });
  });
  describe('envCredentials', () => {
    test('should read the credentials from the environment variables', () => {
      process.env['ASKUI_TOKEN'] = 'password';
      process.env['ASKUI_TENANT'] = 'tenant';
      process.env['ASKUI_EMAIL'] = 'name@tenant.com';
      const credentialsFromTheEnv = envCredentials();
      expect(credentialsFromTheEnv).toStrictEqual({ tenant: 'tenant', email: 'name@tenant.com', password: 'password' });
    });
  });
});
