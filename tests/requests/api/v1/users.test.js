const request = require('supertest');
const app = require('../../../../app');

const { createUser } = require('../../../factories/user');

describe('GET /users', () => {
  describe('when there are no users', () => {
    test('return an empty array', async () => {
      const response = await request(app).get('/api/v1/users');

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('when there are users created', () => {
    beforeEach(() => createUser({ name: 'John' }));

    test('return all created users', async () => {
      const response = await request(app).get('/api/v1/users');

      expect(response.statusCode).toBe(200);
      expect(response.body).not.toEqual([]);
      expect(response.body.length).toEqual(1);
      expect(response.body[0].name).toEqual('John');
    });
  });
});
