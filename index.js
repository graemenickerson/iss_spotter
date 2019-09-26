// index.js
// Graeme Nickerson
// September 26, 2019

const { nextISSTimesForMyLocation } = require('./iss');


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
// const coords = { latitude: '49.27670', longitude: '-123.13000' };
// fetchISSPasses(coords, (err, passes) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(passes);
//   }
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  const format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'America/Vancouver'};
  passTimes.forEach(element => {
    const localDate = new Date(element.risetime * 1000).toLocaleString('en-US', format);
    // let localDate = new Date(utcDate + " UTC");
    const time = element.duration;
    
    console.log(`Next pass at: ${localDate} for ${time} seconds!`);
  });
  // console.log(passTimes);
});
