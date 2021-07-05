const Person = require('../src/Person')


describe('Person', () => {
    test('has a name', () => {
        const person = new Person("Andi");
        expect(person.name).toEqual("Andi");
    })

})