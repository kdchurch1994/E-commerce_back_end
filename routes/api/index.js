const router = require('express').Router(); //Imports the use of the Router function from express
const categoryRoutes = require('./category-routes'); //Imports the use of the routes from the category-routes file
const productRoutes = require('./product-routes'); //Imports the use of the routes from the product-routes file
const tagRoutes = require('./tag-routes'); //Imports the use of the routes from the tag-routes file

router.use('/categories', categoryRoutes); //Allows the server to use the routes defined in the category-routes file
router.use('/products', productRoutes); //Allows the server to use the routes defined in the product-routes file
router.use('/tags', tagRoutes); //Allows the server to use the routes defined in the product-routes file

module.exports = router; //Exports the use of the routes by Express's router functionality
