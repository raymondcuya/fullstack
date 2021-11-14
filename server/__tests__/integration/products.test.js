const request = require('supertest');
const app = require('../../src/app');

describe('Test Get /products', () => {
  test('It should respond with 200 success', async () => {
    const response = await request(app)
      .get('/v1/products')
      .expect((res) => {
        res.body.products.length === 8;
        res.body.totalProducts === 1000;
      })
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
