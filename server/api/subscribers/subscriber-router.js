const express = require("express");
const Subscriber = require("./subscriber-model");

const router = express.Router();

//////////// endpoint test //////////////////
router.get("/", (req, res, next) => {
  res.json("Hello subscribers");
});
//////////// endpoint test //////////////////

router.post("/", async (req, res, next) => {
  try {
    const newSubscriber = req.body;
    console.log(newSubscriber);
    await Subscriber.addSubscriber(newSubscriber);
    res.status(201).json({
      message: `Thanks for subscribing, ${newSubscriber.first_name}!`,
      promo: "Be sure to check your inbox for a special gift from us!",
    });
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
