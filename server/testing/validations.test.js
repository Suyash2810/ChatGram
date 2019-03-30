var {
    validString
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