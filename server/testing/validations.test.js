var {
    validString
} = require('../utilities/validations');

const expect = require('expect');

describe("String Validation", () => {

    it("should accept valid string with no spaces", () => {
        expect(validString("Hello")).toBe(true);

    });

    it("should reject strings with no characters", () => {
        expect(validString('   ')).toBe(false);
    });

    it("should reject integer values", () => {
        expect(validString(88255)).toBe(false);
    });

    it("should accept strings with spaces before and after the characters", () => {
        expect(validString("  Hello  ")).toBe(true);
        expect(validString(' c ')).toBe(true);
    });
});