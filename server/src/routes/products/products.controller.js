const { productsJSON } = require('../../models/products.model');
const productModel = require('../../models/products.model');

async function getProducts(req, res) {
  const { page = 1, size = 10 } = req.query;

  try {
    const products = await productModel.getProducts(page, size);
    const totalProducts = await productModel.getTotalProducts();
    res.status(200).json({ products, totalProducts });
  } catch (err) {
    console.error(err);
  }
}

module.exports = { getProducts };
