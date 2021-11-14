require('dotenv').config();

const mongo = require('../src/services/mongo');

beforeAll(() => {
  return mongo.mongoConnect();
});

afterAll(() => {
  return mongo.mongoDisconnect();
});
