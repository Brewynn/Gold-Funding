import {mapObject} from '../universal/helperFunction';

/**
 * Resize Event
 *
 * @param {Function} callback
 *
 */
const resizeEvent = (callback) =>
  window.addEventListener('resize', () => callback());

/**
 * Verify if a user is using a mobile device
 *
 * @return {Boolean}
 *
 */
const isMobile = () =>
  window.innerWidth <= 800 && window.innerHeight <= 600;

/**
 * Scroll section
 *
 * @param {Object} sections
 * @param {string} section
 *
 */
const scrollSection = (section) => {
  const offsetTop = section.current.offsetTop;
  const newOffsetTop = isMobile() ? offsetTop - 50 : offsetTop;

  window.scrollTo({
    top: newOffsetTop,
    behavior: 'smooth'
  });
}

/**
 * Capitalize the first letter or space and letter
 *
 * @param {String} sections
 * @return {string}
 *
 */
const capitalize = (str) =>
  str
    .replace(/\s+./g, (spaceLetter) => spaceLetter.toUpperCase())
    .replace(/./, (firstLetter) => firstLetter.toUpperCase());


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
  buttonDisabled,
  forEachSetState,
  isMobile,
  resizeEvent,
};
