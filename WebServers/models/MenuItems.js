const { sequelize, DataTypes, Model } = require('sequelize');
const sequelizeConnect = require('../sequelize_connect');

class MenuItem extends Model { }

MenuItem.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
}, {
    sequelize: sequelizeConnect,
    timestamps: false,
});

module.exports = MenuItem



// MenuItem.init({
//     name: {
//         type:DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             len: [1,50]
//         }    
//     },
//     price: {
//         type: DataTypes.FLOAT,
//         allowNull: false,
//         isInt: true
// }, 
//     sequelize: sequelizeConnect,
//     timestamps: false,
// });
