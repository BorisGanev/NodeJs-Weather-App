const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/056f9ca0b9a35035e93044db6d9e7ca9/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined,{
                temperature: body.currently.temperature, 
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather!');
        }
    });
};

module.exports = {
    getWeather
};