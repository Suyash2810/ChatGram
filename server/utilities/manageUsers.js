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
        var UsersList = [];
        if (user) {
            UsersList = this.users.filter((user) => user.id !== id);
        }

        return UsersList;
    }

    getUserById(id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUsersListByRoom(room) {
        var UsersList = [];
        this.users.forEach(
            (user) => {
                if (user.room == room) {
                    UsersList.push(user.name);
                }
            }
        )

        return UsersList;
    }
}


module.exports = {
    Users
}