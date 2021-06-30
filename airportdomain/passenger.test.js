const Bag = require('./Bag')
const Passenger = require('./Passenger')


describe('Passenger', () => {
    test('has a name', () => {
        const person = new Passenger("Andi");
        expect(person.name).toEqual("Andi");
    })

    test('has bags', () => {
        const person = new Passenger({name: "Ando"});
        const handluggage = new Bag(6);
        const hullluggage = new Bag(23);
        person.addBag(handluggage);
        person.addBag(hullluggage);
        expect(person.bags.length).toBe(2)
    })

    test('we can read the weight of a bag', () => {
        const ande = new Passenger({name: 'Ande'})
        const backpack = new Bag(9)
        ande.addBag(backpack)
        expect(ande.bags[0].weight).toBe(9)
    })
})