const request = require('supertest');
const app = require('../../../app');

describe('This is to test the app routers', () => {
  it('teste /teste path', (done) => {
    request(app.app)
      .get('/ingredients/teste')
      .expect('Content-Type', /text/)
      .expect('Content-Length', '5')
      .expect(200, done);
  });
});
