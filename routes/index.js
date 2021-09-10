const router = require('express').Router(); //Imports the use of the Router function from express
const apiRoutes = require('./api'); //Imports the use of the routes from the api directory (which includes the category, product, and tag routes)

router.use('/api', apiRoutes); //Uses the routes defined in the api directory

router.use((req, res) => { //If a wrong route is selected, the user is notified that they used the wrong route. 
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router; //Exports the use of the routes by Express's router functionality