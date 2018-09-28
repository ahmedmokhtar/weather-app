const request = require('request')

const geocodeAddress = (address) => {
    
    const encodedAddress = encodeURIComponent(address)

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAYwDeUT6Rs5uDCmYF6Mm2E8z5hhPuHTSc`,
        json: true
    }, (error, response, body) => {
    
        if (error) {
            console.log('Unable to connect to Google servers.')
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find that address.')
        } else if (body.status === 'OK') {
            console.log(`Address: ${body.results[0].formatted_address}`)
            console.log(`Latitude: ${body.results[0].geometry.location.lat}\nLongitude: ${body.results[0].geometry.location.lng}`)    
        }
    })
}

module.exports = {
    geocodeAddress
}