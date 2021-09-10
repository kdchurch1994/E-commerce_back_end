const express = require('express'); //imports express.js
const routes = require('./routes'); //imports the routes in route routes directory
const sequelize = require('./config/connection'); // import sequelize connection

const app = express(); //sets the const app equal to express(); which will allow us to use the functionalities of express
const PORT = process.env.PORT || 3001; //sets the const PORT to equal the environment variable PORT of the deployment environment (i.e. Heroku) or Port 3001 when deployed locally

app.use(express.json()); //Takes incoming POST data in the form of JSON and parses it into the req.body

app.use(express.urlencoded({ extended: true })); //Takes incoming POST data and converts it to the key/value pairings that can be access in the req.body object

app.use(routes); //allows the server to use the routes defined in the routes directory

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`)); //Tells the app to listen to PORT and provide a console message saying that the server is listening on the port value equal to PORT.
  
});
