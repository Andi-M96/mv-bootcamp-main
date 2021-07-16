  
const {sequelize, DataTypes, Model} = require('sequelize');
const sequelizeConnect = require('../sequelize_connect');

class Menu extends Model {}

Menu.init({
    title: DataTypes.STRING,
}, {
    sequelize: sequelizeConnect,
    timestamps: false,
});

module.exports = Menu