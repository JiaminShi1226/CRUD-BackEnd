const router = require("express").Router();


// Mounted on /api/students/

router.use("/addStudent", require("./addStudent"));
router.use("/getAllStudents", require("./getAllStudents"));
router.use("/getStudentByID", require("./getStudentByID"));

router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
