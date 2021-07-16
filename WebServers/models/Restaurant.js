const {sequelize, DataTypes, Model} = require('sequelize');
const sequelizeConnect = require('../sequelize_connect');


class Restaurant extends Model {}

//this creates the restaurant data model
Restaurant.init({
    name: DataTypes.STRING,
    imageLink: DataTypes.STRING,
}, {
    sequelize: sequelizeConnect,
    timestamps: false,
});

module.exports = Restaurant