// index.js
// Graeme Nickerson
// September 26, 2019

const { fetchMyIP } = require('./iss');

fetchMyIP((err, ipAddress) => {
  if (err) {
    console.log("It didn't work!" , err);
    return;
  }
  console.log('It worked! Returned IP:' , ipAddress);
});