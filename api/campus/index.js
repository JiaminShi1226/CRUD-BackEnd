const router = require("express").Router();

// Mounted on /api/campus
router.use("/getAllCampuses", require("./getAllCampuses"));

router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;