const router = require("express").Router();
const { Student } = require("../../db/models");

router.use("/:id", async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
    const updatedStudent = await Student.update(
      {
        firstName,
        lastName,
        email,
        imageUrl,
        gpa,
        campusId,
      },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );

    updatedStudent
      ? res.status(200).send("Student edited successfully")
      : res.status(404).send("Student Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
