const { Model, DataTypes } = require('sequelize'); //Allows us to create the sequelize models

const sequelize = require('../config/connection.js'); //Imports the connection to the database through sequelize

class Category extends Model {} //Creates the Category model


Category.init( //Configure the fields of the SQL Table category
  {
    id: { //Creates and defines the id column
      type: DataTypes.INTEGER, //Stores the data type as an integer
      allowNull: false, //Does not allow null values
      primaryKey: true, //sets ID as the primary key
      autoIncrement: true //autoIncrements the ID so that whenever a new cateogry of item is created, the new cateogry's ID is one value higher than the previous cateogry that was added to the database
    },
    category_name: { //Creates and defines the category_name column
      type: DataTypes.STRING, //Stores the data type as a string
      allowNull: false //Does not allow null values
    }
  },
  {
    sequelize, //passes in the imported sequelize connection, which is the connection to the ecommerce_db database
    timestamps: false, // don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, //doesn't allow the pluralize the name of the database table (stops the database from having multiple tables named cateogry)
    underscored: true, //use underscores as opposed to camel-casing
    modelName: 'category', //The name of our model (table) in the database
  }
);

module.exports = Category; //exports the category model
