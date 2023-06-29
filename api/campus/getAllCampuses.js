const express = require("express");
const router = express.Router();
const { Campus } = require("../../db/models");

//http://localhost:8080/api/campuses/getAllCampuses 
router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll();
    allCampuses
      ? res.status(200).json(allCampuses)
      : res.status(404).send("Campus List Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
