const router = require("express").Router();

// Mounted on /api/campuses
router.use("/", require("./getAllCampuses"));
router.use("/", require("./addCampus"));
router.use("/", require("./getCampusByID"));
router.use("/", require("./removeCampusByID"));
router.use("/", require("./editCampusByID"));

router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;