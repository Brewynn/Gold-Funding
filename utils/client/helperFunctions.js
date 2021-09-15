import { SECTION } from '../universal/constant';
import { mapObject } from '../universal/helperFunction';
/**
 * Scroll section
 *
 * @param {Object} sections
 * @param {string} section
 *
 */
const scrollSection = (section) =>
  section.current.scrollIntoView(
    {
      behavior: 'smooth',
      block: 'center',
    }
  );

/**
 * Capitalize the letter
 *
 * @param {String} sections
 * @return {string}
 *
 */
const capitalize = (str) =>
  str.replace(/./, (firstLetter) => firstLetter.toUpperCase());

/**
 * Change the nav section color when the user is scrolling
 *
 * @param {Object} sections
 * @param {Function} setStateSection
 *
 */
const changeTabColor = (sections, setStateSection) => {
  let sectionPositions = {};
  const section = window.location.hash.replace('#', '');

  if (section) {
    scrollSection(sections[section || 'home']);
  } else {
    window.location.hash = '#home';
  }

  Object.entries(sections).forEach(([sectionName, el]) => {
    const { offsetTop, clientHeight } = el.current;
    const offsetDown = (clientHeight + offsetTop);
    const keyName = `is${capitalize(sectionName)}`;

    sectionPositions[keyName] = (scroll) => (
      (offsetDown > scroll) && (offsetTop <= scroll)
    );
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

 /**
 * Map the state and update it with a new state
 *
 * @param {setState} setState
 * @param {callback} callback
 *
 */
const forEachSetState = (setState, callback) => {
  setState((state) => {
    let newState = { ...state };

    mapObject(state, (item) => (newState = callback(item, newState)));

    return newState;
  });
};

/**
 * Disable all buttons when any user clicks on the button
 *
 * @param {Number} seconds
 *
 */
const buttonDisabled = (seconds = 1) => {
  const els = document.querySelectorAll('button');
  const disabled = (disabled) => els.forEach((el) => (el.disabled = disabled));

  disabled(true);
  setTimeout(() => disabled(false), seconds * 1000);
};

export {
  scrollSection,
  capitalize,
  changeTabColor,
  buttonDisabled,
  forEachSetState
};
