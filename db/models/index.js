const Student = require("./student");
const Campus = require("./campus");

Campus.hasMany(Student,{
  foreignKey: "campusId",
});
Student.belongsTo(Campus);

module.exports = {
 Student,
 Campus,
};