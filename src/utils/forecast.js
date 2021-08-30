/*
const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=116611d490fe76bd3c628d0c351c2dc9&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degress out. There is a " +
          body.current.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
*/
const request = require("request");

// 
// Goal: Add new data to forecast
// 
// 1. Update the forecast string to include new data
// 2. Commit your changes
// 3. Push your changes to Github and deploy to Heroku
// 4. Test your work in the live application

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=116611d490fe76bd3c628d0c351c2dc9&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degress out. It feels like " + body.current.feelslike + "degrees out. The humidity is " + body.current.humidity + "%."
      );
    }
  });
};

module.exports = forecast;
