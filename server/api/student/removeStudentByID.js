const router = require("express").Router();
const { Student } = require("../../db/models");
//remove student based on their id
//http://localhost:8080/api/students/removeStudentByID/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const student = await Student.destroy({ where: { id: req.params.id } });
    student
      ? res.status(200).send("Successfully removed")
      : res.status(404).send("Student Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
