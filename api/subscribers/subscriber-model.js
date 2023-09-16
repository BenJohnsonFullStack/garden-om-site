const db = require("../../data/db-config");

const getSubscribers = async () => {
  return db("subscribers");
};

const addSubscriber = async (subscriber) => {
  const result = await db("subscribers").insert(subscriber);
  return result;
};

module.exports = {
  getSubscribers,
  addSubscriber,
};
