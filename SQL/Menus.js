const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {MenuItems} = require('./MenuItems')

/**
 * Represents a Menus
 */
class Menus extends Model {

    // add methods here

}
Menus.init({
    title: DataTypes.STRING,
   
    
}, {
    sequelize,
    timestamps: false,
});
Menus.hasMany(MenuItems, {as: 'items', foreignKey: 'menu_id'});
MenuItems.belongsTo(Menus, {foreignKey: 'menu_id'});

module.exports = {
    Menus, MenuItems
};