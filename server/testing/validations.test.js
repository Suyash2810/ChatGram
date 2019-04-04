var {
    validString,
    validateName
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