const express = require("express");
const data = require("./routes/nist.routes");
const stack = require("./routes/stack.routes");

app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/nist", data);

app.use("/stack", stack);

app.listen(5000, () => {
  console.log("app running on port 5000");
});