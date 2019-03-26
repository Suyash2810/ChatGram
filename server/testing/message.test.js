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

    it("should return the generated url.", (done) => {
        var url = message.generateLocationMessage("Andrew", 45.1454, 46.454785);
        var genurl = 'https://www.google.com/maps?q=45.1454,46.454785';

        expect(url.from).toBe("Andrew");
        expect(url.url).toBeTruthy();
        expect(url.url).toBe(genurl);
        expect(url.timeStamp).toBeTruthy();
        done();
    });
});