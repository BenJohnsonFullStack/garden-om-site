const express = require("express");
const Subscriber = require("./subscriber-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("Hello subscribers");
});

module.exports = router;
