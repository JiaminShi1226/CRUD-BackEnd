const Student = require("./student");
const Campus = require("./campus");

Campus.hasMany(Student);
Student.belongsTo(Campus, {
  foreignKey: {
    allowNull: false,
  },
});

module.exports = {
 Student,
 Campus,
};