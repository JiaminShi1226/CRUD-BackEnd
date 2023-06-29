const express = require("express");
const router = express.Router();
const { Student } = require("../../db/models");

//finds and returns the student with the id
//http://localhost:8080/api/students/getStudentByID/:id
router.get("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    student
      ? res.status(200).json(student)
      : res.status(404).send("Student Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;