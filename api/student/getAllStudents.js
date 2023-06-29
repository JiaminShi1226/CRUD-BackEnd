const express = require("express");
const router = express.Router();
const {Student} = require("../../db/models");
//Send a response will all the student from database when requested
router.get("/",async(req,res,next)=>{
    console.log("Get all student hit");
    try {
        const allStudents = await Student.findAll();
        allStudents
        ?res.status(202).json(allStudents) //if allStudent is truthy
        :res.status(404).send("Student List Not Found"); //if allStudent is falsey
    } catch (error) {
        next(error);
    }
});

module.exports = router;