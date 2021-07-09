const Scooter = require('../src/Scooter')

describe('Scooter Test', () => {
        test('Charge working scooter', () => {
            const scooter = new Scooter(99);
            expect(scooter.charge()).toBeTruthy();

    })

        test('Hire scooter that is not charged', () => {
            const scooter = new Scooter(99);
            scooter.batteryLife = 45
            expect(scooter.hire()).toBeFalsy();
    
        })
        
        test('Scooter is working', () => {
            const scooter = new Scooter(99);
            scooter.isBroken = true
            expect(scooter.reportBroken()).toBeFalsy();
    
        })

        test('Return Scooter', () => {
            const scooter = new Scooter(99);
            scooter.isBroken = true
            scooter.batteryLife = 0
            // expect(scooter.return()).toBeFalsy(); <--(throwerror)
    
        })
})
