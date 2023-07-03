const express = require("express");
const router = express.Router();
const { Campus } = require("../../db/models");

//http://localhost:8080/api/campuses/removeCampusByID/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const RemoveCampus = await Campus.destroy({ where: { id: req.params.id } });
    RemoveCampus
      ? res.status(200).send("Campus removed successfully")
      : res.status(404).send("Campus Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
