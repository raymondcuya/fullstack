const productsJSON = require('../data/products');
const fsPromises = require('fs/promises');
const path = require('path');

const Products = require('./products.mongo');

async function loadProductsData() {
  let fileHandle;
  try {
    const filepath = path.join(__dirname, '..', 'data', 'products.json');
    fileHandle = await fsPromises.open(filepath, 'r+');
    const data = await fileHandle.readFile('utf8');
    const productsJSON = JSON.parse(data);
    productsJSON.forEach((productJSON) => {
      saveProduct(mapProduct(productJSON));
    });
  } catch (err) {
    console.error(err);
  } finally {
    fileHandle.close();
    const totalProducts = await getTotalProducts();
    console.log(`${totalProducts} products found!`);
  }
}

const mapProduct = (productJSON) => {
  return {
    productName: productJSON.product_name,
    description: productJSON.description,
    price: productJSON.price,
    productImage: productJSON.product_image,
  };
};

async function saveProduct(product) {
  try {
    await Products.updateOne(product, product, { upsert: true });
  } catch (err) {
    console.error(`Could not save product ${err}`);
  }
}

async function getTotalProducts() {
  return await Products.countDocuments();
}

async function getProducts(page, size) {
  const data = await Products.find()
    .limit(size * 1)
    .skip((page - 1) * size)
    .exec();
  return data;
}

module.exports = {
  productsJSON,
  loadProductsData,
  getTotalProducts,
  getProducts,
};
