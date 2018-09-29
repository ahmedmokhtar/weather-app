const yargs = require('yargs')
const axios = require('axios')

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


const encodedAddress = encodeURIComponent(argv.address)
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAYwDeUT6Rs5uDCmYF6Mm2E8z5hhPuHTSc`

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw Error('Address was not found!')
    }

    const lat = response.data.results[0].geometry.location.lat
    const lng = response.data.results[0].geometry.location.lng
    const weatherUrl = `https://api.darksky.net/forecast/ef5cc8724d7397bd0aaccd531199cf79/${lat},${lng}?units=ca`
    
    console.log(response.data.results[0].formatted_address)

    return axios.get(weatherUrl)
}).then((response) => {
    const temperature = response.data.currently.temperature
    const condition = response.data.currently.summary
    console.log(`The temperature now is: ${temperature}, and it is: ${condition}.`)
}).catch((e) => {
    if (e.error === 'ENOTFOUND') {
        console.log('Unable to connect to servers')
    } else {
        console.log(e.message)
    }
})