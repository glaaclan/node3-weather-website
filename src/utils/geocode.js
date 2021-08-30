/*
const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ2xhZHlzMTciLCJhIjoiY2tzcGlydmQ1MDNvcTJ3cTQ1aXltYjltMiJ9.EwVr7oZk-S3DIDgtS5aDAg&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

geocode("Philadelphia", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

module.exports = geocode;
*/
/////////////////////////////////////
//Callback Chaining
const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ2xhZHlzMTciLCJhIjoiY2tzcGlydmQ1MDNvcTJ3cTQ1aXltYjltMiJ9.EwVr7oZk-S3DIDgtS5aDAg&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
