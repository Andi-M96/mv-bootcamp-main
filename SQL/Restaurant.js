const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {Menus} = require('./Menus')
const {MenuItems} = require('./MenuItems')
/**
 * Represents a Restaurant
 */
class Restaurant extends Model {

    // add methods here

}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});
Restaurant.hasMany(Menus, {as: 'menus', foreignKey: 'restaurant_id'})
Menus.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})


module.exports = {
    Restaurant, Menus, MenuItems
};