const express = require("express");
const router = express.Router();
const { Campus } = require("../../db/models");

//http://localhost:8080/api/campuses/addCampus
router.post("/", async (req, res, next) => {
  try {
    const { name, imageUrl, address, description } = req.body;
    const newCampus = await Campus.create({
      name,
      imageUrl,
      address,
      description,
    });
    newCampus
      ? res.status(200).json(newCampus)
      : res.status(404).send("Failed to add a new campus");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
