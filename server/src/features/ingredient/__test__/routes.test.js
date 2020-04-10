const request = require('supertest');
const mongoose = require('mongoose');
const Ingredient = require('../model');
const app = require('../../../index');

describe('This is to test the ingredients routes', () => {
  it('GET / - Getting all ingredients', done => {
    request(app.app)
      .get('/ingredients/')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(res => {
        expect(res.body.message).toEqual('All ingredient getted with success!');
        expect(res.body.data).toEqual([]);
      })
      .expect(200, done);
  });

  it('GET /:id - Getting an ingredient', done => {
    const ingredient = { name: 'Hamburger', price: 7.00 };
    const newIngredient = new Ingredient(ingredient);
    newIngredient.save().then(data => {
      request(app.app)
        .get(`/ingredients/${data._id}`)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(res => {
          expect(res.body.message).toEqual('Ingredient getted with success!');
          expect(res.body.data.name).toEqual('Hamburger');
          expect(res.body.data.price).toEqual(7.00);
        })
        .expect(200, done);
    });
  });

  it('GET /:id - Getting a non existing ingredient', done => {
    request(app.app)
      .get('/ingredients/41224d776a326fb40f000001')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(res => {
        expect(res.body.message).toEqual('Ingredient not found!');
        expect(res.body.data).toEqual(null);
      })
      .expect(404, done);
  });

  it('POST / - Creating an ingredient', done => {
    const newIngredient = { name: 'Hamburger', price: 7.00 };
    request(app.app)
      .post('/ingredients/')
      .send(newIngredient)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(res => {
        expect(res.body.message).toEqual('Ingredient(s) created with success!');
        expect(res.body.data[0].name).toEqual(newIngredient.name);
        expect(res.body.data[0].price).toEqual(newIngredient.price);
      })
      .expect(200, done);
  });

  it('PUT /:id - Updating an ingredient', done => {
    const ingredient = { name: 'Hamburger', price: 7.00 };
    const newIngredient = new Ingredient(ingredient);
    newIngredient.save().then(data => {
      const updatedIngredient = { name: 'Cheese', price: 3.00 };
      request(app.app)
        .put(`/ingredients/${data._id}`)
        .send(updatedIngredient)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(res => {
          expect(res.body.message).toEqual('Ingredient updatted with success!');
          expect(res.body.data.name).toEqual(updatedIngredient.name);
          expect(res.body.data.price).toEqual(updatedIngredient.price);
        })
        .expect(200, done);
    });
  });

  it('DELETE /:id - Deleting an ingredient', done => {
    const ingredient = { name: 'Hamburger', price: 7.00 };
    const newIngredient = new Ingredient(ingredient);
    newIngredient.save().then(data => {
      request(app.app)
        .delete(`/ingredients/${data._id}`)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(res => {
          expect(res.body.message).toEqual('1 ingredient deleted with success!');
          expect(res.body.data).toEqual(null);
        })
        .expect(200, done);
    });
  });

  it('DELETE /:id - Deleting a non existing ingredient', done => {
    request(app.app)
      .delete('/ingredients/41224d776a326fb40f000001')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(res => {
        expect(res.body.message).toEqual('Nothing deleted!');
        expect(res.body.data).toEqual(null);
      })
      .expect(200, done);
  });

  it('DELETE / - Deleting all ingredients', done => {
    const ingredient = { name: 'Hamburger', price: 7.00 };
    const newIngredient = new Ingredient(ingredient);
    newIngredient.save().then(() => {
      request(app.app)
        .delete('/ingredients/')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(res => {
          expect(res.body.message).toEqual('All ingredients was deleted with succes!');
          expect(res.body.data).toEqual(null);
        })
        .expect(200, done);
    });
  });

  afterEach(done => mongoose.connection.db.dropDatabase(done));

  afterAll(() => {
    mongoose.connection.close();
    app.server.close();
  });
});
