// index.js
// Graeme Nickerson
// September 26, 2019

const { fetchMyIP, fetchCoordsByIP } = require('./iss');


// fetchMyIP((err, ipAddress) => {
//   if (err) {
//     console.log("It didn't work!" , err);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ipAddress);
// });

// 207.194.49.162
// fetchCoordsByIP('207.194.49.162', (err, coordinates) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(coordinates);
//   }
// });