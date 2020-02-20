// const request = require('supertest');
// const routes = require('../routes');
// const app = require('../../../index');

// describe('This is to test the app routers', () => {
//   afterAll(async () => {
//     await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
//   });

//   it('teste /teste path', (done) => {
//     return request(app.app)
//       .get('/ingredients/teste')
//       .expect('Content-Type', /text/)
//       .expect('Content-Length', '5')
//       .expect(200, done);
//   });
// });
