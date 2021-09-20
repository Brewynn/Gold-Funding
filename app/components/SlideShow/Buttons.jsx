import React from 'react';
import PropTypes from 'prop-types';
import {buttonsNextPrev} from './data';

const Buttons = ({prevImage, nextImage}) => (
  <div className="slideshow__pagination-control">
    {buttonsNextPrev(prevImage, nextImage).map(({icon, onclick}, index) => (
      <button
        key={index}
        onClick={() => onclick()}
        className="slideshow__pagination-buttons"
      >
        {icon}
      </button>
    ))}
  </div>
);

Buttons.propTypes = {
  prevImage: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired,
};

export default Buttons;
