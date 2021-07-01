const Passenger = require('./Person')


describe('Passenger has name test', () => {
    test('has a name', () => {
        const pass2 = new Passenger("Andi");
        expect(pass2.name).toEqual("Andi");
    })
})
