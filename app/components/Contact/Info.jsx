import React from 'react';

const Info = ({ items }) =>
  <>
    {items.map(({ title, subTitle }, index) => (
      <div
        className="contact__info-container-text"
        key={index}
      >
        <span className="contact__info-text">{title}</span>
        <span className="contact__info-text">{subTitle}</span>
      </div>
    ))}
  </>

export default Info;
