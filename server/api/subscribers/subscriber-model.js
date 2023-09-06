const db = require("../../data/db-config");

const addSubscriber = async (subscriber) => {
  const result = await db("subscribers").insert(subscriber);
  return result;
};

module.exports = {
  addSubscriber,
};
