const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: process.env.REACT_APP_AUTHORIZATION
};

/**
 * Format the url
 *
 * @param {String} url
 * @return {Array}
 *
 */
const getUrlEndpoint = (url) =>
  `${process.env.REACT_APP_ENDPOINT_HOST}${url}`;

/**
 * Sends an HTTP request to the server with the 
 * method POST and returns a response to the client
 *
 * @param {String} url
 * @return {Promise}
 *
 */
const post = async (url, data) =>
  await fetch(getUrlEndpoint(url), {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  }).then((response) => response.json());

/**
 * Sends an HTTP request to the server with the 
 * method GET and returns a response to the client
 *
 * @param {String} url
 * @return {Promise}
 *
 */
const get = async (url) =>
  await fetch(getUrlEndpoint(url), {
    method: 'Get',
    headers,
  }).then((response) => response.json());

export default {
  post,
  get,
  getUrlEndpoint
};
