const router = require('express').Router(); //Imports the use of the Router function from express
const { Category, Product } = require('../../models'); //Imports the use of the Category and Product models

// The `/api/categories` endpoint

router.get('/', (req, res) => { //API route that gets all the categories by displaying the 'id' and 'category_name from the Category table 
  Category.findAll({ // ... and the 'id', 'product_name', 'price', and 'stock' attributes from the Product model
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product, 
        attributes: ['id', 'product_name', 'price', 'stock'],
      }
    ]
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => { 
      console.log(err); //Displays 500 error message if there is an error
      res.status(500).json
    });
});

router.get('/:id', (req, res) => { //API route that gets one Category based on the category's id. 
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price'],
      }
    ]
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category matches this ID' }); //Displays an error message of no categories matches the id that is being used to make the request
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err); //Displays 500 error message if there is an error
    });
});

router.post('/', (req, res) => { //Allows the user to add a category by entering a category name
  Category.create({
    category_name: req.body.category_name 
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err); //Displays 500 error message if there is an error
    });
});

router.put('/:id', (req, res) => { //Allows the user to update the cateogry_name of a category based on the category_id
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )  
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category matches this ID'}) //Displays an error message if no categories matches the id that is being used to make the request
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err); //Displays 500 error message if there is an error
    });

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category matches this ID'}) //Displays an error message if no categories matches the id that is being used to make the request
        return;
      }
      res.json(dbCategoryData); 
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err); //Displays 500 error message if there is an error
    });
});

module.exports = router; //Exports the use of the routes by Express's router functionality
