const express = require("express");
const Subscriber = require("./subscriber-model");

const router = express.Router();

//////////// endpoint test //////////////////
router.get("/", (req, res, next) => {
  res.json("Hello subscribers");
});
//////////// endpoint test //////////////////

router.post("/", (req, res, next) => {
  try {
    throw new Error("test post");
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
