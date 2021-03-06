const sqlite3 = require('sqlite3').verbose();

/**
 * This code creates the tables for the Restaurants assignment
 */
function initialise() {
    // connect to a database named restaurants.sqlite
    const db = new sqlite3.Database('./restaurants-seq.sqlite');

    try {
        db.serialize(function () { // serialize means execute one statement at a time

            console.log('starting table creation');

            // delete tables if they already exist
            db.run("DROP TABLE IF EXISTS Restaurants");
            db.run("DROP TABLE IF EXISTS Menus");
            db.run("DROP TABLE IF EXISTS MenuItems");

            // create new, empty tables with specific columns and column types
            db.run("CREATE TABLE Restaurants (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imageLink TEXT)");
            db.run("CREATE TABLE Menus (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, RestaurantId INT, FOREIGN KEY (RestaurantId) REFERENCES RESTAURANTS(id))");
            db.run("CREATE TABLE MenuItems (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INT, menu_id INT, FOREIGN KEY (menu_id) REFERENCES MENUS(id))");
        });
    } finally {
        // very important to always close database connections
        // else could lead to memory leaks
        db.close();
        console.log('table creation complete - connection closed');
    }
}

module.exports = initialise;

// local testing (comment out if running tests from jest)
initialise();