const {sequelize} = require('./sequelize_index');
const {Menus} = require('./Menus')

describe('Menus', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Menus', async () => {
        const menu = await Menus.create({ title: 'Mains'})
        expect(menu.id).toBe(1)
    })
})