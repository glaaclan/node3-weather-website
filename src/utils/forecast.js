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
