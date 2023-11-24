const express = require("express");
const router = express.Router();
const { colors } = require("../models");

router.get("/", async (req, res) => {
  try {
    const allColors = await colors.findAll();
    res.json(allColors);
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;
