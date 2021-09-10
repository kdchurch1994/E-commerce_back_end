require('dotenv').config();  //Allows us to use the .env file to get the database name, mysql username, and mysql password

const Sequelize = require('sequelize'); //imports sequelize, which in this case is being used to establish a connection to the database


const sequelize = process.env.JAWSDB_URL //Allows us to use the JAWSDB database if we decide to deploy this application to heroku
  ? new Sequelize(process.env.JAWSDB_URL) //uses the JAWSDB for heroku deployment
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, { //Uses the .env for a local database connection, which includes the name of the database, our mysql username and password, and the localhost of the machine.
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize; //exports the sequelize connection to be used in other files of the codebase. 
