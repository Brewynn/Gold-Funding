import React from 'react';
import { buttonDisabled } from '../../../utils/client/helperFunctions';

const Pagination = ({ items, onClick }) => (
  <div className="slideshow__pagination">
    <div className="slideshow__pagination-items">
      {items.map((__, index) => (
        <button
          className="slideshow__pagination-item"
          key={index}
          onClick={() => {
            buttonDisabled();
            onClick(index);
          }}
        >
          {index}
        </button>
      ))}
    </div>
  </div>
);

export default Pagination;
