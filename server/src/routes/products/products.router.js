const express = require('express');

const { getProducts } = require('./products.controller');

const productsRouter = express.Router();

productsRouter.get('/', getProducts);

module.exports = productsRouter;
