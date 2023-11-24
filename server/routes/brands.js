const express = require("express");
const router = express.Router();
const { brands } = require("../models");
const { products } = require("../models");

router.get("/", async (req, res) => {
  try {
    const allBrands = await brands.findAll({ include: [products] });
    res.json(allBrands);
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;
