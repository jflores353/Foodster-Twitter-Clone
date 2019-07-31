const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const monk = require("monk");

const app = express();

//* connect to DB
const db = monk("localhost/foodster");
//* pass in how does it connect to the DB "localhost",
// *  then what DB to connect to "foodster"

const posts = db.get("posts"); // * 'posts' is now a collection in DB

app.use(cors()); // * installed cors middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Foodster! is responding ***"
  });
});

app.get("/posts", (req, res) => {
  posts.find().then(posts => {
    res.json(posts);
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
      content: req.body.content.toString(),
      created: new Date()
    };
    // console.log(post);
    posts.insert(post).then(createdPost => {
      res.json(createdPost);
    });
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
