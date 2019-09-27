// index.js
// Graeme Nickeson
// September 26, 2019

const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(passTimes) {
  const format = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/Vancouver'
  };
  
  passTimes.forEach(element => {
    const localDate = new Date(element.risetime * 1000).toLocaleString('en-US', format);
    const time = element.duration;
    console.log(`Next pass at: ${localDate} for ${time} seconds!`);
  });
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });


