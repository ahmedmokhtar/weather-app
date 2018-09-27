const request = require('request')

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAYwDeUT6Rs5uDCmYF6Mm2E8z5hhPuHTSc',
    json: true
}, (error, response, body) => {
    console.log(body)
})