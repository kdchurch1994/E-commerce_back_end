const { Model, DataTypes } = require('sequelize'); //Allows us to create the sequelize models

const sequelize = require('../config/connection'); //Imports the connection to the database through sequelize

class ProductTag extends Model {} //Creates the ProductTag model

ProductTag.init( //Configure the fields of the SQL Table product_tag
  { 
    id: { //Creates and defines the id column
      type: DataTypes.INTEGER, //Stores the data type as an integer
      allowNull: false, //Does not allow null values
      primaryKey: true, //sets ID as the primary key
      autoIncrement: true //autoIncrements the ID so that whenver a new product tag is added, their ID is one value higher than the previous product_tag that was added to the database
    },
    product_id: { //Creates and defines the product_id column
      type: DataTypes.INTEGER, //Stores the data type as an integer
      references: { //references the product table and sets product_id as a foreign key using the id primary key from the product table.
        model: 'product', 
        key: 'id'
      }
    },
    tag_id: { //Creates and defines the tag_id column
      type: DataTypes.INTEGER, //Stores the data type as an integer
      references: { //references the category table and sets tag_id as a foreign key using the id primary key from the tag table.
        model: 'tag',
        key: 'id'
      }
    }
  },
  { 
    sequelize, //passes in the imported sequelize connection, which is the connection to the ecommerce_db database
    timestamps: false, // don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, //doesn't allow the pluralize the name of the database table (stops the database from having multiple tables named product_tag)
    underscored: true, //use underscores as opposed to camel-casing
    modelName: 'product_tag', //The name of our model (table) in the database
  }
);

module.exports = ProductTag; //exports the product_tag model
