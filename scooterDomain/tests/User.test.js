const User = require('../src/Person')


describe('User has name test', () => {
    test('has a name', () => {
        const user = new User("Andi");
        expect(user.name).toEqual("Andi");
    })
})
