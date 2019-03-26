var generateMessage = (from, text) => {

    let message = {
        from,
        text,
        timeStamp: new Date().getTime()
    }

    return message;
}

var generateLocationMessage = (from, latitude, longitude) => {

    var locationMessage = {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        timeStamp: new Date().getTime()
    }

    return locationMessage;
}

module.exports = {
    generateMessage,
    generateLocationMessage
}