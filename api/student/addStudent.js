const router = require("express").Router();
const {Student} = require("../../db/models");

router.post("/", async(req, res, next)=>{
    const {firstName, lastName, email,imageUrl, gpa } = req.body;
    console.log("Add student hit");
    try {
      const newStudent = await Student.create({firstName, lastName, email,imageUrl, gpa});
      res.send(newStudent);
    } catch (error) {
        next(error);
    }
})

module.exports = router;