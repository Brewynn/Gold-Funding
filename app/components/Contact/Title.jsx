import React from 'react';

const Title = ({ title, subTitle }) => (
  <div className="contact__title">
    <span className="contact__title-text">{title}</span>
    <span className="contact__title-text contact__title-text--underline">{subTitle}</span>
  </div>
);

export default Title;
