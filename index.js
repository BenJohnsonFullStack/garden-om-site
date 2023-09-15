require("dotenv").config();
const server = require("./api/server");
const path = require("path");

const PORT = process.env.PORT || 9000;

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
