// import models
const Product = require('./Product'); //Imports the use of the Product Model
const Category = require('./Category'); //Imports the use of the cateogy model
const Tag = require('./Tag'); //imports the use of the Tag model
const ProductTag = require('./ProductTag'); //imports the use of the ProductTag model

// Products belongsTo Category
Product.belongsTo(Category, {  //Defines the relationship of the Product model to the Category model
  foreignKey: 'category_id', //Imposes the constraint that a product can belong to one category, but not to many categories
  //The link was created using the category_id foreign key
}); 



// Categories have many Products
Category.hasMany(Product, { // A Category can have many products; Creates the relationship between the Category and Product models
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { //A product can belong to many tags
  through: ProductTag,
  foreignKey: 'product_id'

});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { //A tag can belong to many products
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = { Product, Category, Tag, ProductTag }; //exports the use of the Product, Cateogry, Tag, and ProductTag models by exporting the relationship created by index.js
