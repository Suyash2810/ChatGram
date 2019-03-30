var {
    Users
} = require('../../utilities/manageUsers');

var seedUsers = [{
        id: "1",
        name: "Eliot",
        room: "Hunger Games"
    },
    {
        id: "2",
        name: "Fletcher",
        room: "Dorm"
    },
    {
        id: "3",
        name: "Mike",
        room: "Hunger Guys"
    },
    {
        id: "4",
        name: "David",
        room: "Hunger Guys"
    },
    {
        id: "5",
        name: "William",
        room: "Dorm"
    },
    {
        id: "6",
        name: "Diego",
        room: "Hunger Games"
    }
];
var users = new Users();

var populateUsers = () => {

    users.users = seedUsers;
}

module.exports = {
    populateUsers,
    users
}