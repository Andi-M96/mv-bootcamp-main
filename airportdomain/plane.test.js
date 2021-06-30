
const Passenger = require('./Passenger');
const Plane = require('./plane');

describe('Plane', () => {
    test('constructs', () => {
        const AM007 = new Plane('AM007');
        expect(AM007.flightNum).toBe('AM007');
        expect(AM007.passengers).toEqual([]);
    });

    test('boards a passenger', () => {
        const AM007 = new Plane('AM007');
        const and1 = new Passenger('Andy');
        AM007.boardPassenger(and1)
        expect(AM007.passengers).toContainEqual(and1);
    });

    test('sets origin', () => {
        const AM007 = new Plane('AM007');
        AM007.setOrigin('LGW');
        expect(AM007.origin).toBe('LGW');
    });

    test('sets destination', () => {
        const AM007 = new Plane('AM007');
        AM007.setDestination('BCN');
        expect(AM007.destination).toBe('BCN');
    });
});