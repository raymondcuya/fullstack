import React from 'react';
import SizeBox from './SizeBox';

const Header = ({ size, total, sizeChange }) => {
  return (
    <div className="header bb b--black-20">
      <span>
        <h3 className="pl3 mb0">All Products</h3>
        <h5 className="pb3 pl3 mt2 mb0 gray">{total} Products</h5>
      </span>
      <SizeBox selectedSize={size} sizeChange={sizeChange}></SizeBox>
    </div>
  );
};

export default Header;
