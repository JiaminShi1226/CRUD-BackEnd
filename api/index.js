const router = require("express").Router();

// Mounted on /api/
router.use("/campuses", require("./campus/getAllCampuses"));
router.use("/students", require("./student/getAllStudents"));

router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
