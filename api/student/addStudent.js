const router = require("express").Router();
const {Student} = require("../../db/models");

//http://localhost:8080/api/students/addStudent
router.post("/", async(req, res, next)=>{
    const {firstName, lastName, email,imageUrl, gpa } = req.body;
    console.log("Add student hit");
    try {
      const newStudent = await Student.create({firstName, lastName, email,imageUrl, gpa});
      newStudent
      ?res.status(200).json(newStudent) //if allStudent is truthy
      :res.status(404).send("Unsuccessful In Adding Student"); //if allStudent is falsey
    } catch (error) {
        next(error);
    }
})

module.exports = router;