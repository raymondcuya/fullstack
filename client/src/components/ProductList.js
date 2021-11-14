import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div className="mt2">
      {products.map(({ id, productName, description, price, productImage }) => {
        return (
          <Product
            key={id}
            id={id}
            productName={productName}
            description={description}
            price={price}
            imageURL={productImage}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
