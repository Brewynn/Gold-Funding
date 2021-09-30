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
  [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ].some((toMatchItem) =>
    navigator.userAgent.match(toMatchItem)
  );

/**
 * Scroll section
 *
 * @param {Object} section
 *
 */
const scrollSection = (section) => {
  const offsetTop = section.current.offsetTop;
  const newOffsetTop = isMobile() ? offsetTop - 50 : offsetTop;

  window.scroll({
    top: newOffsetTop,
    behavior: 'smooth'
  });
}

/**
 * Capitalize the first letter or space and letter
 *
 * @param {String} str
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
 * @param {Function} setState
 * @param {Function} callback
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

/**
 * Change the image size when the viewport change
 *
 * @return {String}
 *
 */
const getImagePath = (path, fileType) => {
  const screenWidth = window.innerWidth;
  let imageSize = 'original';

  if (isMobile()) {
    if (screenWidth <= 320) {
      imageSize = '320w';
    }

    if ((screenWidth > 320) && (screenWidth <= 480)) {
      imageSize = '480w';
    }

    if ((screenWidth > 480) && (screenWidth <= 640)) {
      imageSize = '640w';
    }

    if ((screenWidth > 640) && (screenWidth <= 800)) {
      imageSize = '800w';
    }
  }

  return `${path}-${imageSize}.${fileType}`;
};

export {
  scrollSection,
  capitalize,
  buttonDisabled,
  forEachSetState,
  isMobile,
  resizeEvent,
  getImagePath,
};
