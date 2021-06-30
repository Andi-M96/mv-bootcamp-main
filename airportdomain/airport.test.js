const Airport = require('./Airport');
const Plane = require('./Plane');
const Passenger = require('./Passenger');
const Bag = require('./Bag');

describe('Airport', () => {
    test('has a name', () => {
        const LGW = new Airport('LGW');
        expect(LGW.name).toBe('LGW');
    });


    test('an airport has planes', () => {
        const plane1 = new Plane();
        plane1.setOrigin('LGW');
        plane1.setDestination('BCN');

        const and1 = new Passenger({name: "Anda"});
        const cabinLuggage = new Bag(8);
        const holdLuggage = new Bag(25);
        and1.addBag(cabinLuggage);
        and1.addBag(holdLuggage);

        plane1.boardPassenger(and1);

        const LGW = new Airport('LGW');
        LGW.addPlane(plane1);

        expect(LGW.planes.length).toBe(1);

        expect(LGW.planes[0].passengers.length).toBe(1);
        expect(LGW.planes[0].passengers[0]).toMatchObject(and1);
        expect(LGW.planes[0].passengers[0].bags[0].weight).toBe(8);
    });
})