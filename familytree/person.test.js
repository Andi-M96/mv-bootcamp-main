const people = require('./person')

describe('Family tree test suite', () => {
    test('has a name', () => {
        expect(people.anne.name).toEqual("Anne")       
    })
    test('has a name', () => {
        expect(people.charles.name).toEqual("Charles")       
    })
    test('has a name', () => {
        expect(people.elizabeth2.name).toEqual("Elizabeth II")       
    })
    test('has 2 parents', () => {
        expect(people.charles.parents).toHaveLength(2)       
    })
    test('has 2 parents', () => {
        expect(people.anne.parents).toHaveLength(2)       
    })
    test('has 2 parents', () => {
        expect(people.elizabeth2.parents).toHaveLength(2)       
    })
})