const { DataTypes } = require('sequelize');
const sequelize = require('../utilsfunc/dbfunctions');

const Candidate = sequelize.define('Candidate', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      }, 
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  profilePicture: {
    type: DataTypes.STRING, // You can also use BLOB data type if you want to store images directly in the database
    allowNull: false,
  },
  resume: {
    type: DataTypes.STRING, // You can also use BLOB data type if you want to store files directly in the database
    allowNull: false,
  },
});

module.exports = Candidate;

