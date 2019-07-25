const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");

loadingElement.style.display = "none";

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
});
