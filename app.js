const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'The address to fetch the weather for',
            string: true
        }
    })
    .help()
    .alias('h', 'help')
    .argv

    geocode.geocodeAddress(argv.address, (errorMessage, geoResults) => {
        if (errorMessage) {
            console.log(errorMessage)
        } else {
            console.log(geoResults.address)
            weather.getWeather(geoResults.latitude, geoResults.longitude, (errorMessage, weatherResults) => {
                if (errorMessage) {
                    console.log(errorMessage)
                } else {
                    console.log(`The temperature now is: ${weatherResults.temperature}, and it is: ${weatherResults.condition}.`)
                    console.log(`The real feel is: ${weatherResults.realFeel}.`)
                }
            })
        }
    })

