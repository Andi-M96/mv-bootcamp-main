const Scooter = require('../src/Scooter')

describe('Scooter Test', () => {
    test('Charge working scooter', () => {
        const scooter = new Scooter(99);
        expect(scooter.charge()).toBeTruthy();

    })

})
