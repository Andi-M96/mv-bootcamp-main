const {sequelize} = require('./sequelize_index');
const {Restaurant} = require('./Restaurant');
const {Menus} = require('./Menus');
const {MenuItems} = require('./MenuItems')


describe('Relationships', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    
    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        const menu = await Menus.create({title: 'set 1'});
        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();
        const menuItem = await MenuItems.create({name: 'egg', price: 2.00});
        await menus[0].addItems(menuItem);
        const menuItems = await menus[0].getItems();

        expect(menuItems.length).toBe(1);

        expect(menus[0].title).toBe('set 1');
    })

})