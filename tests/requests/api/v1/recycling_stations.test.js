const request = require('supertest');
const app = require('../../../../app');

const { createStation } = require('../../../factories/recycling_station');

describe('GET /recycling_stations/:id', () => {
  describe('when the station is not created', () => {
    test('return an empty object', async () => {
      const response = await request(app).get('/api/v1/recycling_stations/1');

      expect(response.statusCode).toBe(404);
      expect(response.body).toEqual({});
    });
  });

  describe('when the station is created', () => {
    test('return the created station', async () => {
      const station = await createStation({ name: 'Recyclemore' });

      const response = await request(app).get(
        `/api/v1/recycling_stations/${station.id}`
      );

      expect(response.statusCode).toBe(200);
      expect(response.body).not.toEqual({});
      expect(response.body.id).toEqual(station.id);
      expect(response.body.name).toEqual('Recyclemore');
    });
  });
});

describe('GET /recycling_stations/localization', () => {
  describe('when there are no stations', () => {
    test('return an empty array', async () => {
      const response = await request(app).get(
        '/api/v1/recycling_stations/localizations'
      );

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('when there are stations created', () => {
    beforeEach(() => createStation({}));

    test('return all the created stations', async () => {
      const response = await request(app).get(
        '/api/v1/recycling_stations/localizations'
      );

      expect(response.statusCode).toBe(200);
      expect(response.body).not.toEqual([]);
      expect(response.body.length).toEqual(1);
      expect(response.body[0].type).toEqual('Feature');
      expect(response.body[0].properties).not.toEqual({});
      expect(response.body[0].geometry.type).toEqual('Point');
      expect(response.body[0].geometry.coordinates[0]).toBeGreaterThanOrEqual(
        -90
      );
      expect(response.body[0].geometry.coordinates[0]).toBeLessThanOrEqual(90);
      expect(response.body[0].geometry.coordinates[1]).toBeGreaterThanOrEqual(
        -180
      );
      expect(response.body[0].geometry.coordinates[1]).toBeLessThanOrEqual(180);
    });
  });
});