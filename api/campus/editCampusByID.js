const express = require("express");
const router = express.Router();
const { Campus } = require("../../db/models");


//http://localhost:8080/api/campuses/editCampusByID/id
router.put("/:id", async (req, res, next) => {
  try {
    const { name, imageUrl, address, description } = req.body;
    const updatedCampus = await Campus.update(
      {
        name,
        imageUrl,
        address,
        description,
      },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );
    updatedCampus
      ? res.status(200).json({ newData: updatedCampus[1][0].dataValues })
      : res.status(404).send("Campus Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
