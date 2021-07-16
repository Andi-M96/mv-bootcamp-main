const {Sequelize} = require('sequelize');

const connection = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './restaurantsAPI-seq.sqlite'
});

module.exports=connection;