import React from 'react';

const SizeBox = ({ selectedSize, sizeChange }) => {
  //   const
  return (
    <div className="pt0 pb0 mr3 mt4 mb0">
      <select
        className="mt2 ba b--light-gray"
        value={selectedSize}
        onChange={sizeChange}
      >
        <option value="5">5 per page</option>
        <option value="8">8 per page</option>
        <option value="10">10 per page</option>
        <option value="20">20 per page</option>
        <option value="50">50 per page</option>
        <option value="100">100 per page</option>
      </select>
    </div>
  );
};

export default SizeBox;
