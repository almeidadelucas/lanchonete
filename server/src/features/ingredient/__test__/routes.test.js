const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../index');

describe('This is to test the ingredients routes', () => {
  // it('GET /', (done) => {
  //   request(app.app)
  //     .get('/ingredients/')
  //     .expect('Content-Type', 'application/json; charset=utf-8')
  //     .expect((res) => expect(res.body).toEqual([]))
  //     .expect(200, done);
  // });

  it('GET /:id', (done) => {
    request(app.app)
      .get('/ingredients/nonExistentId')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect((res) => expect(res.body).toEqual([]))
      .expect(404, done);
  });

  afterAll(() => {
    mongoose.connection.close();
    app.server.close();
  });
});
