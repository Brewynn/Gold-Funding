import React from 'react';

const Title = ({ title, subTitle, innerRef }) => (
  <h1 className="slideshow__title" ref={innerRef}>
    {title}
    <span className="slideshow__sub-title">
      {subTitle}
    </span>
  </h1>
);

export default Title;
