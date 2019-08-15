const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const postsElement = document.querySelector(".posts");
const API_URL = "http://localhost:5000/posts";

loadingElement.style.display = "none";

listAllPosts();

form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(form); // * formData is built into the browser, it works by passing in reference to the form
  const name = formData.get("name");
  const content = formData.get("content");

  const post = {
    name,
    content
  };

  console.log(post);

  form.style.display = "none"; // * now after submit the form will not display
  loadingElement.style.display = ""; //* loading wheel will now display briefly after submit

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(createdPost => {
      console.log(createdPost);
      form.reset();
      setTimeout(() => {
        form.style.display = "";
      }, 30000);
      listAllPosts();
      loadingElement.style.display = "none";
    });
});

function listAllPosts() {
  postsElement.innerHTML = "";
  fetch(API_URL)
    .then(res => res.json())
    .then(posts => {
      console.log(posts);
      posts.reverse();
      posts.forEach(post => {
        const div = document.createElement("div");
        div.style = "color: white";

        const header = document.createElement("h3");
        header.textContent = post.name;

        const contents = document.createElement("p");
        contents.textContent = post.content;

        const date = document.createElement("small");
        date.textContent = new Date(post.created);

        div.appendChild(header);
        div.appendChild(contents);
        div.appendChild(date);

        postsElement.appendChild(div);
      });
    });
}
