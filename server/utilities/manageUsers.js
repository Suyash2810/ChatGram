class Users {
    constructor() {
        this.users = [];
    }

    addUserToList(id, name, room) {
        var user = {
            id,
            name,
            room
        };

        this.users.push(user);

        return user;
    }

    removeUserFromList(id) {
        var user = this.users.filter((user) => user.id === id)[0];

        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }

        return this.users;
    }

    getUserById(id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUsersListByRoom(room) {
        var usersList = this.users.filter((user) => user.room === room);
        var namesList = usersList.map((user) => user.name);
        return namesList;
    }
}


module.exports = {
    Users
}