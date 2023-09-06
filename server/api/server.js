const express = require("express");
const subscriberRouter = require("./subscribers/subscriber-router");

const server = express();

server.use(express.json());
server.use("/api/subscribers", subscriberRouter);

module.exports = server;
