const express = require("express");
const Subscriber = require("./subscriber-model");
const { validateSubscriber } = require("./subscriber-middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    // const subscribers = await Subscriber.getSubscribers();
    // res.json(subscribers);
    throw new Error("test");
  } catch (err) {
    next(err);
  }
});

router.post("/", validateSubscriber, async (req, res, next) => {
  try {
    const newSubscriber = req.body;
    await Subscriber.addSubscriber(newSubscriber);
    res.status(201).json({
      message: `Thanks for subscribing, ${newSubscriber.first_name}!`,
      promo: "Be sure to check your inbox for a special gift from us!",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
