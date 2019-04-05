var validString = (str) => {

    return typeof str === 'string' && str.trim().length > 0;
}

var validateName = (userList, name) => {
    let user = userList.filter(user => user === name);

    if (user.length !== 1) {
        return true
    } else {
        return false
    };
}

var checkLetter = (username) => {
    var letters = /^[A-Za-z]+$/;
    return letters.test(username) ? true : false;
}

var checkDigits = (username) => {
    let regex = /^[0-9]+$/;
    return regex.test(username) ? true : false;
}

var validateLength = (username) => {
    return username.length > 4 ? true : false;
}

var checkSpecialCharacters = (username) => {
    let regex = /[!@#$%^&*(),.?":{}|<>]/;

    return regex.test(username) ? true : false;
}

module.exports = {
    validString,
    validateName,
    checkLetter,
    checkDigits,
    validateLength,
    checkSpecialCharacters
}