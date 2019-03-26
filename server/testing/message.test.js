var message = require('../utilities/messages');
const expect = require('expect');

describe("Message generation", () => {

    it("should generate the message", (done) => {
        var obj = message.generateMessage("Andrew", "Hey everyone!");

        expect(obj.from).toBe("Andrew");
        expect(obj.text).toBe("Hey everyone!");
        expect(obj.timeStamp).toBeTruthy();

        done();
    });
});