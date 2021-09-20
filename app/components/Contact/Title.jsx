import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title, subTitle}) => {
  const [titleTop, titleBottom] = title.split(' ');

  return (
    <div className="contact__title">
      <span className="contact__titleTop">
        {titleTop}
      </span>
      <span className="contact__titleBottom contact__title--underline">
        {titleBottom}
      </span>
      <span className="contact__subtitle">
        {subTitle}
      </span>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Title;
