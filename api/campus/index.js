const router = require("express").Router();

// Mounted on /api/campuses
router.use("/getAllCampuses", require("./getAllCampuses"));
router.use("/addCampus", require("./addCampus"));
router.use("/getCampusByID", require("./getCampusByID"));
router.use("/removeCampus", require("./removeCampus"));

router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;