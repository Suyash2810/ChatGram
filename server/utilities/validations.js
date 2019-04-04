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

module.exports = {
    validString,
    validateName
}