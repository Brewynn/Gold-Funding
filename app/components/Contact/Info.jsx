import React from 'react';
import PropTypes from 'prop-types';

const Info = ({items}) =>
  <>
    {items.map(({info, icon}, index) => (
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
  </>;

Info.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Info;
