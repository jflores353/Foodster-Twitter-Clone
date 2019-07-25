const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Foodster!"
  });
});

app.listen(5000, () => {
  console.log(`***Server now listening on http://localhost:5000`);
});
