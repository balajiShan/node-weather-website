const request = require('request')

const message = "Chennai Rocks! ";

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/efa3a101b60f76da440fcf5087adeccd/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, message + body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast