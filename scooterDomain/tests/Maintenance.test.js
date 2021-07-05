const Maintenance = require('../src/Person')


describe('Maintenance has name test', () => {
    test('has a name', () => {
        const maintenance = new Maintenance("Andi");
        expect(maintenance.name).toEqual("Andi");
    })
})
