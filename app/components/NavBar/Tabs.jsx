import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  scrollSection,
  isMobile,
  resizeEvent,
  capitalize,
} from '../../../utils/client/helperFunctions';
import {SECTION} from '../../../utils/universal/constant';

const Tabs = ({sections, setStateSection}) => {
  useEffect(() => {
    if (sections.home.current) {
      scrollEvent();
    }
  }, [sections.home.current]);

  /**
   * Change the hash URL and tab nav color when the user is scrolling
   *
   */
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
      const {isHome, isAbout, isContacts} = sectionPositions;
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

  /**
   * Get the current positions for each section
   *
   * @return {Object}
   *
   */
  const getSectionPositions = () => {
    const sectionPositions = {};

    Object.entries(sections).forEach(([sectionName, el]) => {
      const {offsetTop, clientHeight} = el.current;
      const newOffsetTop = isMobile() ? (offsetTop - 50) : offsetTop;
      const offsetDown = (clientHeight + newOffsetTop);
      const keyName = `is${capitalize(sectionName)}`;

      sectionPositions[keyName] = (scroll) => (
        (offsetDown > scroll) && (newOffsetTop <= scroll)
      );
    });

    return sectionPositions;
  };

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
};

Tabs.propTypes = {
  sections: PropTypes.object.isRequired,
  setStateSection: PropTypes.func.isRequired,
};

export default Tabs;
