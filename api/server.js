const express = require("express");
const helmet = require("helmet");
const path = require("path");
const subscriberRouter = require("./subscribers/subscriber-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/subscribers", subscriberRouter);

if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(__dirname, "client/dist")));
}

module.exports = server;
