const {sequelize} = require('./sequelize_index');
const {MenuItems} = require('./MenuItems')

describe('MenuItems', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a MenuItems', async () => {
        const menuItem = await MenuItems.create({ name: 'Falafel Wrap', price: 8.95})
        expect(menuItem.id).toBe(1)
    })
})