var moment = require('moment');

var generateMessage = (from, text) => {

    let message = {
        from,
        text,
        timeStamp: moment().valueOf()
    }

    return message;
}

var generateLocationMessage = (from, latitude, longitude) => {

    var locationMessage = {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        timeStamp: moment().valueOf()
    }

    return locationMessage;
}

module.exports = {
    generateMessage,
    generateLocationMessage
}