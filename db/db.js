const { Sequelize } = require("sequelize");
const { name } = require("../package.json");

//adding a dot env to secure database
const dotenv = require("dotenv");
dotenv.config();
// name === crudbackend

//change to your own username and password
// const db = new Sequelize(`postgres://postgres:0917@localhost:5432/${name}`, {
//   logging: false,
// });

const db = new Sequelize(`${process.env.REACT_APP_DATABASE}`, {
  logging: false,
});

console.log(process.env.REACT_APP_TEST);

// const db = new Sequelize(`postgres://postgres:TashiShyangba23@localhost:5432/${name}`, {
//   logging: false,
// });




module.exports = db;
