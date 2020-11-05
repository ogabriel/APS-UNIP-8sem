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

describe('POST /users/login and DELETE /users/logout', () => {
  describe('when the user is not created', () => {
    test('return an empty object on login', async () => {
      const response = await request(app)
        .post('/api/v1/users/login')
        .send({ email: 'john', password: 'password' })
        .set('Accept', 'application/json');

      expect(response.statusCode).toBe(302);
      expect(response.redirect).toBe(true);
      expect(response.headers.location).toBe('/login');
    });
  });

  describe('when the user is created', () => {
    test('return sucess on login and sucess on logout', async () => {
      const user = await createUser({ name: 'John', password: 'password' });

      const response_login = await request(app)
        .post('/api/v1/users/login')
        .send({ email: user.email, password: 'password' })
        .set('Accept', 'application/json');

      expect(response_login.statusCode).toBe(302);
      expect(response_login.redirect).toBe(true);
      expect(response_login.headers.location).toBe('/mapa');

      const response_logout = await request(app).delete('/api/v1/users/logout');

      expect(response_logout.statusCode).toBe(302);
      expect(response_logout.redirect).toBe(true);
      expect(response_logout.headers.location).toBe('/');
    });
  });
});
