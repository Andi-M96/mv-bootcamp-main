// get the express package from node_modules
const express = require('express');
// convenience - assign express method to app variable
const app = express();
// port 3000

const port = 3000;
// serve static assets from the public dir

app.use(express.json());

app.use(express.static('public'));

  app.get("/restaurants", (request, response) => {
    response.send('read all restaurants');
  });

  app.post("/restaurants", (request, response) => {
    response.send(request.body);
  });

  app.put("/restaurants", (request, response) => {
    response.send('update all restaurants');
  });

  app.delete("/restaurants", (request, response) => {
    response.send('delete all restaurants');
  });


// app.get("/flipcoin", (request, response) => {

// if(Math.random >= 0.49){
//     response.send('heads')
// } 

//     response.send('tails')
   
//   });
// creates/starts the server and then logs to console the string using callback
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
/*
 callback function = asynchronous strategy to handle async requests/functions
 promises, async/await can also be used
*/