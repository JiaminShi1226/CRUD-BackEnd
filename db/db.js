const { Sequelize } = require("sequelize");
const { name } = require("../package.json");
// name === crudbackend

//change to your own username and password
const db = new Sequelize(`postgres://postgres:0917@localhost:5432/${name}`, {
  logging: false,
});

// const db = new Sequelize(`postgres://postgres:TashiShyangba23@localhost:5432/${name}`, {
//   logging: false,
// });



module.exports = db;
