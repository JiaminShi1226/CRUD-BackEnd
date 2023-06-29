const {DataTypes} = require("sequelize");
const db = require('../db');

/*Creating a student model that follows :
    Student:{
        firstName: "John",
        lastName: "Doe",
        email: "John@Doe.com",
        imageUrl: "image.url" //picture of the student
        gpa: 3.4 //must be between 0-4 and 2 decimal places
    }
*/

const Student = db.define('student',{
    firstName:{
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
          },
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            notEmpty: true,
          },
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            isEmail: {
                msg: "must be a valid email",
            },
            notEmpty: true,
          },
    },
    imageUrl:{
        type:DataTypes.STRING,
        defaultValue:"https://i.stack.imgur.com/l60Hf.png",
    },
    gpa:{
        type:DataTypes.DECIMAL(3,2),
        allowNull:false,
        default: 0,
        validate:{
            min:0,
            max:4,
            notEmpty: true,
        }
    },
    campusId:{
        type:DataTypes.INTEGER,
    }
});

module.exports = Student;