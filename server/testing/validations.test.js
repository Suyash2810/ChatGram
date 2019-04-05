var {
    validString,
    validateName,
    checkLetter,
    checkDigits,
    validateLength,
    checkSpecialCharacters
} = require('../utilities/validations');

const expect = require('expect');

describe("String Validation", () => {

    it("should accept valid string with no spaces", (done) => {
        expect(validString("Hello")).toBe(true);
        done();
    });

    it("should reject strings with no characters", (done) => {
        expect(validString('   ')).toBe(false);
        done();
    });

    it("should reject integer values", (done) => {
        expect(validString(88255)).toBe(false);
        done();
    });

    it("should accept strings with spaces before and after the characters", (done) => {
        expect(validString("  Hello  ")).toBe(true);
        expect(validString(' c ')).toBe(true);
        done();
    });
});

describe("Users same name validation", () => {

    it("should return true if two users with the same name exist", (done) => {
        let listUser = [
            "Eliot",
            "Henry",
            "Ryan",
            "Flecther",
            "James",
            "James"
        ];

        let user = "James";

        let result = validateName(listUser, user);

        expect(result).toBe(true);
        done();
    });

    it("should return undefined if only one user exists.", (done) => {
        let listUser = [
            "Eliot",
            "Henry",
            "Ryan",
            "Flecther",
            "James"
        ];

        let user = "Eliot";
        let result = validateName(listUser, user);

        expect(result).toBe(false);

        done();

    });
});

describe("Check for letters", () => {
    it("should return true if contains only letters", (done) => {
        let username = "ss";
        expect(checkLetter(username)).toBe(true);
        done();
    });

    it("should return false if does not contain only characters.", (done) => {
        let username = "12asws";

        expect(checkLetter(username)).toBe(false);
        done();
    });
});

describe("Check for digits", () => {

    it("should return true if contains only digits", (done) => {
        let username = '1234456';
        expect(checkDigits(username)).toBe(true);
        done();
    });

    it("should return false if does not contain only digits", (done) => {

        let username = "123Snehd";

        expect(checkDigits(username)).toBe(false);
        done();
    });
});

describe("Check for length", () => {

    it("should return true if length more than 4", (done) => {
        let username = '1234456';
        expect(validateLength(username)).toBe(true);
        done();
    });

    it("should return false if does not contain only digits", (done) => {

        let username = "12";

        expect(validateLength(username)).toBe(false);
        done();
    });
});

describe("Check for special characters", () => {

    it("should return true if there is special character.", (done) => {
        let username = 'Hello$#@';
        expect(checkSpecialCharacters(username)).toBe(true);
        done();
    });

    it("should return false if does not contain special character", (done) => {

        let username = "12HelloSire";

        expect(checkSpecialCharacters(username)).toBe(false);
        done();
    });
});