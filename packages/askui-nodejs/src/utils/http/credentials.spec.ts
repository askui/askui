import { Credentials } from './credentials';

describe('Credentials', () => {
  describe('base64Encoded()', () => {
    test('should return base64-encoded credentials', () => {
      const credentials = new Credentials({ workspaceId: 'id123', email: 'name@tenant.com', token: 'password' });

      expect(credentials.base64Encoded).toBe('aWQxMjN8bmFtZUB0ZW5hbnQuY29tOnBhc3N3b3Jk');
    });
  });
});
