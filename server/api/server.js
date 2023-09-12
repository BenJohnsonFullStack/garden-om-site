const express = require("express");
const helmet = require("helmet");
const subscriberRouter = require("./subscribers/subscriber-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/subscribers", subscriberRouter);

module.exports = server;
