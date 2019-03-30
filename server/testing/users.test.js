const expect = require('expect');

var {
    users,
    populateUsers
} = require('./seed/seedUserData');

beforeEach(
    populateUsers
);

describe('Storing user data', () => {

    it("should store and return the new user data", (done) => {
        var userData = {
            id: '874gjhsduy3hfyd',
            name: 'Eliot',
            room: 'DarkCenter'
        };

        var getUserData = users.addUserToList(userData.id, userData.name, userData.room);

        expect(getUserData.id).toEqual(userData.id);
        expect(getUserData.name).toEqual(userData.name);
        expect(getUserData.room).toEqual(userData.room);
        done();
    });
});

describe("Getting users list of a room", () => {

    it("should get the list of users in a room", (done) => {

        var usersList = users.getUsersListByRoom("Dorm");

        expect(usersList.length).toBe(2);
        expect(usersList[0]).toBe("Fletcher");
        expect(usersList[1]).toBe("William");
        done();
    });

    it("should not return any data for non-existant room", (done) => {

        var usersList = users.getUsersListByRoom("Dorms");

        expect(usersList).toEqual([]);
        done();
    });
});

describe("Getting user data by ID", () => {

    it("should get the user data for a valid ID", (done) => {

        var userID = "1";

        var userData = users.getUserById(userID);

        expect(userData.id).toBe(userID);

        done();
    });

    it("should not return user data for non-existant id", () => {
        var userId = '89';
        var userData = users.getUserById(userId);
        expect(userData).toEqual(undefined);
    })
});

describe("Remove user from the list", () => {

    it("should remove the user having a particular id.", (done) => {

        var userID = "3";
        var usersList = users.removeUserFromList(userID);
        var user = usersList.filter((user) => user.id === userID)[0];

        expect(user).toEqual(undefined);
        done();
    });
});