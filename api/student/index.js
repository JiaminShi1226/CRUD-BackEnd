const router = require("express").Router();


// Mounted on /api/students/

router.use("/", require("./addStudent"));
router.use("/", require("./getAllStudents"));
router.use("/", require("./getStudentByID"));
router.use("/", require("./removeStudentByID"));
router.use("/", require("./editStudentByID"));

router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
