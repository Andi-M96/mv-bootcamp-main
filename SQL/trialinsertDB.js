// const sqlite3 = require('sqlite3').verbose();
// /**
//  * This code inserts some rows in the tables for the Restaurants assignment
//  */
// function insert(restaurantsArray) {
//     // connect to a database named restaurants.sqlite
//     const db = new sqlite3.Database('./restaurants.sqlite');
//     try {
//         db.serialize(function () { // serialize means execute one statement at a time
//             console.log('inserting some data');
//             let stmt;
//             // insert a row into the RESTAURANTS table
//             try {
//                 // for security reasons - very important to use a 
//                 // prepared statement here
//                 stmt = db.prepare(`INSERT INTO RESTAURANTS (name, imagelink) VALUES (?, ?)`);
//                 stmt.run("hells kitchen", "https://www.imdb.com/title/tt0437005/");
//                 stmt.run("heavens kitchen", "https://www.imdb.com/title/tt0437005/");
//             } finally {
//                 // IMPORTANT! Close the statement
//                 stmt.finalize();
//             }
//             // insert a row into the MENU table
//             try {
//                 // TODO
//                 stmt = db.prepare(`INSERT INTO MENU (title, restaurant_id) VALUES (?, ?)`);
//                 stmt.run("Pasta Italia", 1);
//                 stmt.run("Le Baguette", 2);
//             } finally {
//                 // IMPORTANT! Close the statement
//                 stmt.finalize();
//             }
//             // insert a row into the MENUITEMS table
//             try {
//                 // TODO
//                 stmt = db.prepare(`INSERT INTO MENUITEMS (name, itemType, price) VALUES (?, ?, ?)`);
//                 stmt.run("Chicken Pasta", "Main", 13.99);
//                 stmt.run("Tiramisu", "Dessert", 7.99);
//                 stmt.run("Red Wine", "Drinks", 27.99);
//             } finally {
//                 // IMPORTANT! Close the statement
//                 stmt.finalize();
//             }
//         });
//     } finally {
//         // very important to always close database connections
//         // else could lead to memory leaks
//         db.close();
//         console.log('database closed');
//     }
// }
// module.exports = insert;
// // local testing (comment out if running tests from jest)
// insert();