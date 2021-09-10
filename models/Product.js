// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: { //Creates and defines the id column
      type: DataTypes.INTEGER, //Stores the data type as an integer
      allowNull: false, //Does not allow null values
      primaryKey: true, //sets ID as the primary key
      autoIncrement: true //autoIncrements the ID so that whenver a new product is added, the new product's ID is one value higher than the previous person that was added to the database
    },
    product_name: { //Creates and defines the product_name column
      type: DataTypes.STRING, //Stores the data type as a string
      allowNull: false, //Does not allow null values
    },
    price : { //Creates and defines the price column
      type: DataTypes.DECIMAL, //Stores the data type as a decimal, which is similar to an integer but allows for values after the decimal point
      allowNull: false, //Does not allow null values
      validate: { //validate is being used to ensure the the value actually is a decimal value
        isDecimal: true
      }
    },
    stock: { //Creates and defines the stock column
      type: DataTypes.INTEGER, //Stores the data type as an integer
      allowNull: false, //Does not allow null values
      defaultValue: 10, //Sets the default value in stock to 10 unites
      validate: {
        isNumeric: true
      }
    },
    category_id: { //Creates and defines the category_id column
      type: DataTypes.INTEGER, //Stores the data type as an integer
      references: { //references the category table and sets cateogry_id as a foreign key using the id primary key from the cateogry table.
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize, //passes in the imported sequelize connection, which is the connection to the ecommerce_db database
    timestamps: false, // don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, //doesn't allow the pluralize the name of the database table (stops the database from having multiple tables named product)
    underscored: true, //use underscores as opposed to camel-casing
    modelName: 'product', //The name of our model (table) in the database
  }
);

module.exports = Product; //exports the product model
