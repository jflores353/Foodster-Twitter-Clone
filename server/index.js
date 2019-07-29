const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors()); // * installed cors middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Foodster! is responding ***"
  });
});

const isValidPost = post => {
  return (
    post.name &&
    post.name.toString().trim() !== "" &&
    post.content &&
    post.content.toString().trim() !== ""
  );
};

app.post("/posts", (req, res) => {
  if (isValidPost(req.body)) {
    // * insert into DB
    const post = {
      name: req.body.name.toString(),
      content: req.body.content.toString()
    };

    console.log(post);
  } else {
    res.status(422);
    res.json({
      message: `***Both Name and Content are required!***`
    });
  }
});

app.listen(5000, () => {
  console.log(`***Server now listening on http://localhost:5000`);
});
