// iss.js
// Graeme Nickerson
// September 26, 2019

const request = require('request');


/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 * https://api.ipify.org?format=json
 */
const fetchMyIP = function(callback) {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    if (body) {
      const data = JSON.parse(body);
      callback(null, data.ip);
    } else {
      callback(error);
    }
  
  });
};

module.exports = { fetchMyIP };