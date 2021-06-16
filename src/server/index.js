const express = require("express");

const app = express();

app.use("/dist", express.static("../../dist"));

app.use("/ping", (req, res) => {
  res.status(200);

  return res.send("pong");
});

const server = app.listen("9000", () => {
  console.log("Express server started at http://localhost:9000");
});

export default server;
