const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('node_file_handling' , 'root' , 'root' , {
    host : 'localhost',
    dialect : 'mysql'
  });

module.exports = sequelize;  


// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('mysql://root:root@localhost:3306', {
//   dialect: 'mysql',
//   logging: false, // You can set this to true for debugging purposes
//   define: {
//     timestamps: false, // Disable Sequelize's default timestamps
//   },
//   query: {
//     raw: true, // Use raw SQL for queries
//   },
// });

// // Create the database if it doesn't exist
// async function createDatabaseIfNotExists() {
//   try {
//     // This call will create the database if it doesn't exist
//     await sequelize.query(`CREATE DATABASE IF NOT EXISTS node_file_handling;`);
//     console.log('Database created or already exists.');
//   } catch (error) {
//     console.error('Error creating database:', error);
//   }
// }

// createDatabaseIfNotExists(); // Call the function to create the database

// module.exports = sequelize;
