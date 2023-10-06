require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const path = require("path");

const subscriberRouter = require("./api/subscribers/subscriber-router");

const server = express();

server.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "default-src": [
          "'self'",
          "https://www.gardenomyoga.com",
          "https://api.emailjs.com/api/v1.0/email/send",
          "https://gardenomyoga.simplybook.me/",
        ],
      },
    },
    cacheControl: {
      noStore: true,
    },
  })
);

server.use(express.json());
server.use("/api/subscribers", subscriberRouter);

if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(__dirname, "client/dist")));
}

server.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "client/dist/assets", "client/dist/index.html")
  );
});

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: "Oh no! Something went wrong. Please try again!",
  });
});

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
