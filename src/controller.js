const request = require('request');
const config = require('../config.env');
const API_KEY = (config.API_KEY);

function getPlaces() {
  const address_url = `https://maps.googleapis.com/maps/api/geocode/json?address=90+Corona+St,+Denver,+CO&key=${API_KEY}`
  request(address_urlL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send  (body);
    }
  })
}

<<<<<<< Updated upstream
// function getPlaces(req, res, next) {
//   let { address } = req.body
//   let lat
//   let long
//   lat = lat || 39.7257155
//   long = long || -104.9713034
//   const BASE_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1600&keyword=restaurant&pagetoken&key=${API_KEY}`
//
//
//   request(BASE_URL, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.send(body)
//     }
//   })
// }
=======
function getPlaces(req, res, next) {
  let { address } = req.body
  lat = lat || 39.7257155
  long = long || -104.9713034
  const BASE_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1600&keyword=restaurant&pagetoken&key=${API_KEY}`

  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}
>>>>>>> Stashed changes

module.exports = {
  getPlaces: getPlaces
};
