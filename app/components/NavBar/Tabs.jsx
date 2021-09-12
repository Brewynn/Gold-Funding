import React from 'react';
import { scrollSection, capitalize } from '../../../utils/client/helperFunctions';
import { SECTION } from '../../../utils/universal/constant';

const Tabs = ({ sections }) => (
  <ul className="nav__items">
    {Object.values(SECTION).map((section, index) => (
      <li className="nav__item" key={index}>
        <a
          className="nav__link"
          href={`#${section}`}
          onClick={() => scrollSection(sections[section])}
        >
          {capitalize(section)}
        </a>
      </li>
    ))}
  </ul>
);

export default Tabs;
