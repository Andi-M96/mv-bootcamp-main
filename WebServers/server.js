// get the express package from node_modules
const express = require("express");
const connection = require("./sequelize_connect");
const Restaurant = require("./models/Restaurant");
const Menu = require("./models/Menu");
const MenuItem = require("./models/MenuItems");
const { request, response } = require("express");
const { check, validationResult } = require('express-validator');
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');


// convenience - assign express method to app variable
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// setup our templating engine
const handlebars = expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')


// serve static assets from the public dir
app.use(express.static("public"));

// Relationships
Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})
Menu.hasMany(MenuItem, {as: 'items', foreignKey: 'menu_id'});
MenuItem.belongsTo(Menu, {foreignKey: 'menu_id'});

// connecting to DB
connection
  .sync({
    //refreshs database every time server is rerun
    // force: true
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.error('Unable to connect:', err);
  });


// EXPRESS VALIDATORS
const restaurantValidator = [
  check('name').not().isEmpty().trim().escape(),
  check('name').isLength({ max: 50 }),
  check('imageLink').isURL()
]

const menuValidator = [
  check('title').not().isEmpty().trim().escape(),
  check('title').isLength({ max: 50 }),
  check('RestaurantId').not().isEmpty()
]

// const menuItemValidator = [
//   check('name').not().isEmpty().trim().escape(),
//   check('name').isLength({ max: 50 }),
//   check('price').isInt()
// ]

// SEQUELIZE VALIDATION


// GETS

app.get('/restaurants/:id', async (request, response) => {
  const restaurants = await Restaurant.findAll()
  const restaurant = await Restaurant.findByPk(
    request.params.id, {
      include: [
        {
          model: Menu, as: 'menus',
          include: [{model:MenuItem, as: 'items'}],
        },
      ],
      nest: true
  });
  console.log(restaurant)
  response.render('restaurantTemplate', { restaurant, restaurants })
  //response.status(200).send(restaurant);
});

app.get('/restaurants', async (request, response) => {
  const restaurants = await Restaurant.findAll({
    include: [{model: Menu, as: 'menus'}]
  });
  //response.status(200).json(restaurants);
  response.render('homeTemplate', { restaurants })
});

app.get("/addRestaurant", async (request, response) => {
  const restaurants = await Restaurant.findAll()
	response.render("addRestaurant", { restaurants });
});

app.get("/updateRestaurant/:id", async (request, response) => {
  const restaurant= await Restaurant.findByPk(request.params.id)
  const restaurants = await Restaurant.findAll()
  console.log(restaurant)
	response.render("updateRestaurant", { restaurant, restaurants });
});

// Finds all menus for that restaurant id
app.get('/restaurants/:id/menus', async (request, response) => {
  const menus = await Menu.findAll({
    where: { RestaurantId: request.params.id },
  })
  if (!menus) {
    return response.status(404).send("Cannot Find")
  }
  response.status(200).send(menus);
});

app.get('/menus', async (request, response) => {
  const menu = await Menu.findAll({
    include: [MenuItem]
  });
  response.status(200).json(menu);
});

app.get('/menuitems', async (request, response) => {
  const menuItem = await MenuItem.findAll();
  response.status(200).json(menuItem);
});

// HANDLEBAR GETS

// this route returns HTML for all the restaurants
// app.get('/web/restaurants', async (req, res) => {
//   const restaurants = await Restaurant.findAll()
//   res.render('homeTemplate', { restaurants })
// })
// // this route returns HTML for a single restaurant
// app.get('/web/restaurants/:id', async (req, res) => { // http://localhost:3000/web/restaurants/1
//   const restaurant = await Restaurant.findOne({
//     where: { id: req.params.id },
//     include: [
//         {
//             model: Menu,
//             include: [MenuItem],
//         },
//     ],
// });
//   res.render('restaurantTemplate', { restaurant })
// })

// POSTS
app.post("/restaurants", async (request, response) => {
  // const errors = validationResult(request);
  //   if (!errors.isEmpty()) {
  //     return response.status(400).json({ errors: errors.array() });
    // }
    console.log(request.body)
  const restaurant = await Restaurant.create({
    name: request.body.name,
    imageLink: request.body.imageLink
  })
  response.redirect("/restaurants")
});

app.post("/menus", menuValidator, async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  const menu = await Menu.create({
    title: request.body.title,
    RestaurantId: request.body.RestaurantId
  })
  response.status(201).json(menu)
});

app.post("/menuitems", async (request, response) => {
  const menuItem = await MenuItem.create({
    name: request.body.name,
    price: request.body.price,
    MenuId: request.body.MenuId
  })
  response.status(201).json(menuItem)
});


// PUTS
app.put("/restaurants/:id", (request, response) => {
  Restaurant.update({
    name: request.body.name,
    imageLink: request.body.imageLink
  },
    {
      where: { id: request.params.id }
    })

  response.send("updated restaurant" + request.params.id);
});

app.put("/menus/:id", (request, response) => {
  Menu.update({
    title: request.body.title,
    RestaurantId: request.body.RestaurantId
  },
    {
      where: { id: request.params.id }
    })

  response.send("updated menu" + request.params.id);
});

app.put("/menuitems/:id", (request, response) => {
  Menu.update({
    name: request.body.name,
    price: request.body.price,
    MenuId: request.body.MenuId
  },
    {
      where: { id: request.params.id }
    })

  response.send("updated menuitems" + request.params.id);
});

// PATCH
// app.patch('/restaurants', async (require, response) => {
//   const restaurant = await Restaurant.findByPk(req.params.id);
//   await restaurant.update(require.body);
//   response.status(200).send("Updated!");
//   response.redirect("/updateRestaurant")
// });

app.post('/restaurants/:id/updateRestaurant', async (request, response) => {
//   const restaurant = await Restaurant.findByPk(require.params.id);
//   await Restaurant.update(require.body);
//   response.redirect("/restaurants")
// });

const restaurant = await Restaurant.findByPk(request.params.id);
	console.log(request.body);
	if (!restaurant) {
		return response.status(404).send("NOT FOUND");
	}
	await Restaurant.update(
		{
			name: request.body.name,
			imageLink: request.body.imageLink,
		},
		{
			where: { id: request.params.id },
		}
	);
	response.redirect("/restaurants");
});




app.patch('/menus/:id', async (require, response) => {
  const menu = await Menu.findByPk(require.params.id);
  await menu.update(require.body);
  response.status(200).send("Patched!");
});

app.patch('/menuitems/:id', async (require, response) => {
  const menuItem = await MenuItem.findByPk(require.params.id);
  await menuItem.update(require.body);
  response.status(200).send("Patched!");
});
// DELETES
app.delete("/restaurants/:id", async (request, response) => {
  const restaurant = await Restaurant.findByPk(request.params.id)

  if (restaurant) {
    await Restaurant.destroy({
      where: { id: request.params.id }
    })
    response.status(200).send(restaurant);
  } else {
    response.status(404).send("CANNOT FIND");
  }
});

app.delete("/menus/:id", async (request, response) => {
  await Menu.destroy({
    where: { id: request.params.id }
  })
  response.status(200).send("menus deleted");
});

app.delete("/menuitems/:id", async (request, response) => {
  await MenuItem.destroy({
    where: { id: request.params.id }
  })
  response.status(200).send("menuItem deleted");
});


// creates/starts the server and then logs to console the string using callback
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// DELETE WITH ERROR 
// //delete Restaurant
// app.delete("/restaurants/:id", async (request, response) => {
//   const restaurant = await Restaurant.findByPk(request.params.id)
//   if (!restaurant) {
//       return response.status(404).send("NOT FOUND")
//   }

//   await Restaurant.destroy({
//       where: {id: request.params.id}
//   })
//   response.status(200).send(restaurant)

// });



/*
 callback function = asynchronous strategy to handle async requests/functions
 promises, async/await can also be used
*/


// app.get("/flipcoin", (request, response) => {

// if(Math.random >= 0.49){
//     response.send('heads')
// }

//     response.send('tails')

//   });

// app.get("/restaurants", (request, response) => {
//   response.send("read all restaurants");
// });

// app.post("/restaurants", (request, response) => {
//   response.send(request.body);
// });

// app.put("/restaurants", (request, response) => {
//   response.send("update all restaurants");
// });
