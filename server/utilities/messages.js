var generateMessage = (from, text) => {

    let message = {
        from,
        text,
        timeStamp: new Date().getTime()
    }

    return message;
}

module.exports = {
    generateMessage
}