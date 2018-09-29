// const yargs = require('yargs')

// const geocode = require('./geocode/geocode')

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'The address to fetch the weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('h', 'help')
//     .argv

//     geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//         if (errorMessage) {
//             console.log(errorMessage)
//         } else {
//             console.log(JSON.stringify(results, null, 2))
//         }
//     })

    // ef5cc8724d7397bd0aaccd531199cf79

const request =require('request')

request({
    url: 'https://api.darksky.net/forecast/ef5cc8724d7397bd0aaccd531199cf79/30.0151465,31.2816676?units=si',
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(JSON.stringify(body.currently.temperature))
    } else {
        console.log('Unable to fetch weather data.')
    }
})