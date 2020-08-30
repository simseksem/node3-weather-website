const request = require('postman-request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=642727af2855c702084c9453c24f5c96&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longtitude) + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to to find location!', undefined)
        } else {
            callback(undefined, {
                temprature: body.current.temperature
            })
        }
    })

}

module.exports = forecast