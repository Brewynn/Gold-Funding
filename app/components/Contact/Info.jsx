import React from 'react';

const Info = ({ items }) =>
  <>
    {items.map(({ info, icon }, index) => (
      <ul
        className="contact__info-container-text"
        key={index}
      >
        <li className="contact__info-text">
          <i className={`${icon} contact__icon`}></i>
          <span>{info}</span>
        </li>
      </ul>
    ))}
  </>

export default Info;
