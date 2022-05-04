import { Credentials } from './credentials';

describe('Credentials', () => {
  describe('base64Encoded()', () => {
    test('should return base64-encoded credentials', () => {
      const credentials = new Credentials({ tenant: 'tenant', email: 'name@tenant.com', token: 'password' });

      expect(credentials.base64Encoded).toBe('dGVuYW50fG5hbWVAdGVuYW50LmNvbTpwYXNzd29yZA==');
    });
  });
});
