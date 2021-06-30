const Bag = require('./Bag')

describe('Bag', () => {
    test('has weight', () => {
        const bag = new Bag(21);
        expect(bag.weight).toBe(21);
    });

    test('does not have weight', () => {
        expect(() => new Bag()).toThrowError('Bag must have weight');
    });
})