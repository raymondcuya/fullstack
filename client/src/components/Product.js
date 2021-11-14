import React from 'react';

const Product = ({ id, productName, description, price, imageURL }) => {
  return (
    <div className="bg-white dib br3 ma2 grow bw2 shadow-1">
      <img
        className="ma3 center db ba b--black-10 w-40 vh-10"
        alt="product"
        src={imageURL}
      />
      <div className="bt b--light-gray pv2 ph3">
        <dl className="mt2 f6 lh-copy ">
          <dt className="clip">ProductName</dt>
          <dd className="ml0 dark-gray">{productName}</dd>
          <dt className="clip">Description</dt>
          <dd className="ml0 gray">{description}</dd>
          <dt className="clip">price</dt>
          <dd className="ml0 b">{price}</dd>
        </dl>
      </div>
    </div>
  );
};

export default Product;
