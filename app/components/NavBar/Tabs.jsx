import React, { useEffect } from 'react';
import { scrollSection, isMobile, resizeEvent, capitalize } from '../../../utils/client/helperFunctions';
import { SECTION } from '../../../utils/universal/constant';

const Tabs = ({ sections, setStateSection }) => {
  useEffect(() => scrollEvent(), []);

  const scrollEvent = () => {
    let sectionPositions = getSectionPositions();
    const section = window.location.hash.replace('#', '');

    if (section) {
      scrollSection(sections[section || 'home']);
    } else {
      window.location.hash = '#home';
    }

    resizeEvent(() => {
      sectionPositions = getSectionPositions();
    });

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const { isHome, isAbout, isContacts } = sectionPositions;
      let section = 'home';

      if (isHome(scrollPosition)) {
        section = SECTION.HOME;
      } else if (isAbout(scrollPosition)) {
        section = SECTION.ABOUT;
      } else if (isContacts(scrollPosition)) {
        section = SECTION.CONTACTS;
      }

      window.location.hash = `#${section}`;
      setStateSection(section);
    });
  };

  const getSectionPositions = () => {
    let sectionPositions = {};

    Object.entries(sections).forEach(([sectionName, el]) => {
      const { offsetTop, clientHeight } = el.current;
      const newOffsetTop = isMobile() ? (offsetTop - 50) : offsetTop;
      const offsetDown = (clientHeight + newOffsetTop);
      const keyName = `is${capitalize(sectionName)}`;

      sectionPositions[keyName] = (scroll) => (
        (offsetDown > scroll) && (newOffsetTop <= scroll)
      );
    });

    return sectionPositions;
  }

  return (
    <ul className="nav__items">
      {Object.values(SECTION).map((section, index) => (
        <li className="nav__item" key={index}>
          <a
            className="nav__link"
            href={`#${section}`}
            onClick={() => scrollSection(sections[section])}
          >
            {section}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
