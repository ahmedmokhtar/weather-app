const yargs = require('yargs')

const geocode = require('./geocode/geocode')

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

    geocode.geocodeAddress(argv.address, (errorMessage, results) => {
        if (errorMessage) {
            console.log(errorMessage)
        } else {
            console.log(JSON.stringify(results, null, 2))
        }
    })