const Student = require("./student");
const Campus = require("./campus");

Campus.hasMany(Student,{
  foreignKey: "campusId",
  allowNull: true,
  onDelete: "SET NULL",
  onUpdate: "SET Null",
});
Student.belongsTo(Campus);

module.exports = {
 Student,
 Campus,
};