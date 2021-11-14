import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ size, total, paginate }) => {
  const pageCount = Math.ceil(total / size);

  return (
    <div className="fr pa3">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={paginate}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        breakClassName={'break-me'}
      ></ReactPaginate>
    </div>
  );
};

export default Pagination;
