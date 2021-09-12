/**
 * Map an object and return an array with the key and value of the object
 *
 * @param {Object} obj
 * @param {Function} callback
 * @return {Array}
 *
 */
const mapObject = (obj, callback) =>
  Object.entries(obj).map(([key, value], index) =>
    callback([key, value, index])
  );

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
 * Validate the field
 *
 * @param {String} field
 * @param {String} value
 * @return {Boolean}
 * 
 */
const validator = (field, value) => {
  switch (field) {
    case 'name':
      return /^[a-z ]+$/i.test(value);

    case 'email':
      return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);

    case 'phone':
      return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value);

    case 'company':
      return /^[a-z0-9 ,.'-]+$/i.test(value);

    default:
      break;
  }
};

module.exports = {
  mapObject,
  forEachSetState,
  validator
};
