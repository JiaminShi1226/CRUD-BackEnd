const express = require("express");
const router = express.Router();
const { Campus } = require("../../db/models");

//http://localhost:8080/api/campuses/getCampusByID/:id
router.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    campus
      ? res.status(200).json(campus)
      : res.status(404).send("Campus Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
