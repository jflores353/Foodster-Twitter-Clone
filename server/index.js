const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const monk = require("monk");
const Filter = require("bad-words");
const rateLimit = require("express-rate-limit");

const app = express();
const filter = new Filter();

//* connect to DB
const db = monk("localhost/foodster");
//* pass in how does it connect to the DB "localhost",
// *  then what DB to connect to "/foodster"

const foodsterPosts = db.get("posts"); // * 'foodsterPosts' is now a collection in DB

app.use(cors()); // * installed cors middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Foodster! is responding ***"
  });
});

app.get("/posts", (req, res) => {
  foodsterPosts.find().then(posts => {
    res.json(posts);
  });
});

//* when the server receives a request on /posts we will then query the DB
app.get("/posts", (req, res) => {
  foodsterPosts.find().then(posts => {
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

app.use(
  rateLimit({
    windowsMs: 30 * 1000, //*  every 30 seconds you are allowed to make a Post
    max: 1
  })
);

app.post("/posts", (req, res) => {
  if (isValidPost(req.body)) {
    // * insert into DB
    const post = {
      name: filter.clean(req.body.name.toString()),
      content: filter.clean(req.body.content.toString()),
      created: new Date()
    };
    console.log(post);
    // * insert post into our collection
    foodsterPosts.insert(post).then(createdPost => {
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
