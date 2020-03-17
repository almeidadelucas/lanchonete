const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../index');

// TODO: Criar um banco para teste e limpá-lo depois de cada teste
describe('This is to test the ingredients routes', () => {
  it('GET / - Getting all ingredients', (done) => {
    request(app.app)
      .get('/ingredients/')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect((res) => expect(res.body).toEqual([]))
      .expect(200, done);
  });

  it('GET /:id - Getting a non existing ingredient', (done) => {
    request(app.app)
      .get('/ingredients/41224d776a326fb40f000001')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect((res) => expect(res.text).toEqual('Ingredient not found'))
      .expect(404, done);
  });

  it('POST /:id - Creating an ingredient', (done) => {
    const newIngredient = { name: 'Hamburger', price: 7.00 };
    request(app.app)
      .post('/ingredients/')
      .send(newIngredient)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect((res) => {
        expect(res.body[0].name).toEqual(newIngredient.name);
        expect(res.body[0].price).toEqual(newIngredient.price);
      })
      .expect(200, done);
  });

  afterAll(() => {
    mongoose.connection.close();
    app.server.close();
  });
});
