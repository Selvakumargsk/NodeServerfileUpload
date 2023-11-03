const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('node_file_handling' , 'root' , 'root' , {
    host : 'localhost',
    dialect : 'mysql'
  });

module.exports = sequelize;  