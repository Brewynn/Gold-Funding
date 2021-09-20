import React from 'react';
import PropTypes from 'prop-types';
import {buttonDisabled} from '../../../utils/client/helperFunctions';

const Pagination = ({items, onClick}) => (
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

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Pagination;
