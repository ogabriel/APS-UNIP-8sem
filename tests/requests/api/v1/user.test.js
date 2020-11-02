const request = require('supertest');
const app = require('../../../../app');

const { createUser } = require('../../../factories/user');

describe('GET /users/:id', () => {
  describe('when the user is not created', () => {
    test('return an empty object', async () => {
      const response = await request(app).get('/api/v1/users/1');

      expect(response.statusCode).toBe(404);
      expect(response.body).toEqual({});
    });
  });

  describe('when the user is created', () => {
    test('return the created user', async () => {
      const user = await createUser({ name: 'John' });
      const user_id = user.id;

      const response = await request(app).get(`/api/v1/users/${user_id}`);

      expect(response.statusCode).toBe(200);
      expect(response.body.id).toEqual(user_id);
      expect(response.body.name).toEqual('John');
    });
  });
});
