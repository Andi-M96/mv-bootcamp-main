
const Passenger = require('./passenger');
const Plane = require('./plane');

describe('Plane', () => {
    test('constructs', () => {
        const AM007 = new Plane('AM007');
        expect(AM007.flightNum).toBe('AM007');
        expect(AM007.passengers).toEqual([]);
    });

    test('boards a passenger', () => {
        const AM007 = new Plane('AM007');
        const pass2 = new Passenger('Andy');
        AM007.boardPerson(pass2)
        expect(AM007.passengers).toContainEqual(pass2);
    });

    test('sets origin', () => {
        const AM007 = new Plane('AM007');
        AM007.setOrigin('LGW');
        expect(AM007.origin).toBe('LGW');
    });

    test('sets destination', () => {
        const AM007 = new Plane('AM007');
        AM007.setDestination('STN');
        expect(AM007.destination).toBe('STN');
    });
});