const Airport = require('./Airport');
const Plane = require('./plane');
const Passenger = require('./passenger');
const Bag = require('./Bag');
const CabinCrew = require('./cabinCrew');

const Gatwick = new Airport()
const Stansted = new Airport()

Plane1 = new Plane("AM007", Gatwick, Stansted)
Plane2 = new Plane("AM007", Stansted, Gatwick)

Andi = new Passenger("Andi")
Ando = new CabinCrew("Ando", "Steward")

Backpack = new Bag(17)


describe('Airport', () => {
    test('has a name', () => {
        const LGW = new Airport('LGW');
        expect(LGW.name).toBe('LGW');
    });


    test('an airport has planes', () => {
        const plane1 = new Plane();
        plane1.setOrigin('LGW');
        plane1.setDestination('STN');

        const pass2 = new Passenger({name: "Anda"});
        const cabinLuggage = new Bag(8);
        const holdLuggage = new Bag(25);
        pass2.addBag(cabinLuggage);
        pass2.addBag(holdLuggage);

        plane1.boardPerson(pass2);

        const LGW = new Airport('LGW');
        LGW.addPlane(plane1);

        expect(LGW.planes.length).toBe(1);

        expect(LGW.planes[0].passengers.length).toBe(1);
        expect(LGW.planes[0].passengers[0]).toMatchObject(pass2);
        expect(LGW.planes[0].passengers[0].bags[0].weight).toBe(8);
    });
})