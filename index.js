require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const path = require("path");

const subscriberRouter = require("./api/subscribers/subscriber-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/subscribers", subscriberRouter);

if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(__dirname, "client/dist")));
}

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
