const request = require('request')

const geocodeAddress = (address) => {

    const encodedAddress = encodeURIComponent(address)

    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAYwDeUT6Rs5uDCmYF6Mm2E8z5hhPuHTSc`,
            json: true
        }, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                reject(`Unable to fetch the address: ${error}`)
            } else {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            }
        })
    })
}

geocodeAddress('19146').then((result) => {
    console.log(JSON.stringify(result))
}, (err) => {
    console.log(err)
})