const request = require('request')

const geocodeAddress = (address, callback) => {
    
    const encodedAddress = encodeURIComponent(address)

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAYwDeUT6Rs5uDCmYF6Mm2E8z5hhPuHTSc`,
        json: true
    }, (error, response, body) => {
    
        if (error) {
            callback('Unable to connect to Google servers.', undefined)
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.', undefined)
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
    })
}

module.exports.geocodeAddress = geocodeAddress