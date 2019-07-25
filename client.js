const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const content = formData.get("content");

  const post = {
    name,
    content
  };

  console.log(post);
});
