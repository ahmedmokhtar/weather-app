const request =require('request')

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/ef5cc8724d7397bd0aaccd531199cf79/${lat},${lng}?units=ca`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const results = {
                temperature: body.currently.temperature,
                condition: body.currently.summary,
                realFeel: body.currently.apparentTemperature
            }
            callback(undefined, results)
        } else {
            callback('Unable to fetch weather data.')
        }
    })
}

module.exports.getWeather = getWeather