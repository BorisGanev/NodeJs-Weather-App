const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20Lombard%20street%20philadelphia',
    json: true
}, (error, response, body) => {
    console.log(body);
});