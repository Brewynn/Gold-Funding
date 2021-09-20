import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title, subTitle, innerRef}) => (
  <h1 className="slideshow__title" ref={innerRef}>
    {title}
    <span className="slideshow__sub-title">
      {subTitle}
    </span>
  </h1>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  innerRef: PropTypes.object.isRequired,
};

export default Title;
