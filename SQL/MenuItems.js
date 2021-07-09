const {sequelize, DataTypes, Model} = require('./sequelize_index');


/**
 * Represents a MenuItems
 */
class MenuItems extends Model {

    // add methods here

}
MenuItems.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
   
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    MenuItems
};