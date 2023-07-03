const { Sequelize } = require("sequelize");
const { name } = require("../../package.json");

//adding a dot env to secure database
const dotenv = require("dotenv");
dotenv.config();
// name === crudbackend

//Database
const db = new Sequelize(`${process.env.REACT_APP_DATABASE}`, {
  logging: false,
});

module.exports = db;
