const fetch = require('node-fetch');
const { google_key, carbon_key, google_key_embed_maps } = require('../../config')
var googleMaps = require('@google/maps').createClient({
  key: google_key,
  Promise: Promise
});

async function googleApiCall(req, mode) {
  const googleMapsQuery = await {
    origin: req.body.from,
    destination: req.body.to,
    units: 'imperial',
    mode: mode
  };

  return new Promise((resolve, reject) => {
    googleMaps.directions(googleMapsQuery, function(err, response) {
      var generatedUrl = `https://www.google.com/maps/embed/v1/directions?key=${google_key_embed_maps}&origin=${googleMapsQuery.origin}&destination=${googleMapsQuery.destination}&mode=${mode}`
      if (response.json.status == "OK"){
        resolve({
          distance: response.json.routes[0].legs[0].distance.text,
          travel_time: response.json.routes[0].legs[0].duration.text,
          mode: mode,
          carbon: 0,
          url: encodeURIComponent(generatedUrl)
        });
      }
      reject(new Error("Bad Google Maps Request"));
    });
  });
}

async function returnFinalResponse(results, carUrl, transitUrl, res) {
  try {
    var [responseCar, responseTransit] = await Promise.all([
      fetch(carUrl),
      fetch(transitUrl)
    ])
    var [dataCar, dataTransit] = await Promise.all([
      responseCar.json(),
      responseTransit.json()
    ])

    results.filter(function(item){
      item.mode == 'driving' ? item.carbon = dataCar.carbonFootprint : item.carbon;
      item.mode == 'transit' ? item.carbon = dataTransit.carbonFootprint : item.carbon;
    })
    console.log(results)
    res.json(results)

  } catch(err) {
    console.log(err)
  }
}

exports.googleApiCall = googleApiCall;
exports.returnFinalResponse = returnFinalResponse;
