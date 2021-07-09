const Maintenance = require('../src/Maintenance')
const Scooter = require('../src/Scooter')


describe('Maintenance has name test', () => {
    const maintenance = new Maintenance("Andi");
    test('has a name', () => {
        expect(maintenance.name).toEqual("Andi");
    })


    test('Check if scooter broken', () => {
        const scooter = new Scooter(98);
        scooter.isBroken = true
        expect(maintenance.repairScooter(scooter)).toBeTruthy();

    })
})
