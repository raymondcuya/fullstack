const http = require('http');

require('dotenv').config();

const app = require('./app');
const { loadProductsData } = require('./models/products.model');
const { mongoConnect } = require('./services/mongo');

require('dotenv').config();

const PORT = process.env.NODE_PORT || 8000;
const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadProductsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
