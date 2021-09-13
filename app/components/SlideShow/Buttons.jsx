import React from 'react';
import { buttonPagination } from './data';

const Buttons = ({ prevImage, nextImage }) => (
  <div className="slideshow__pagination-control">
    {buttonPagination(prevImage, nextImage).map(({ icon, onclick }, index) =>  (
      <button
        key={index}
        onClick={onclick}
        className="slideshow__pagination-buttons"
      >
        {icon}
      </button>
    ))}
  </div>
);

export default Buttons;
