const { DataTypes } = require("sequelize");
const db = require("../db");

const Campuse = db.define("campuse", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue:
      "https://cdn.vanderbilt.edu/vu-URL/wp-content/uploads/sites/288/2019/03/19223634/Image-Coming-Soon-Placeholder.png",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Campuse;