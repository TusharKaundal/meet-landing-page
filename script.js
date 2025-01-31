function handleClick(event) {
  if (event.target.id === "down") {
    document.getElementById("screen_3").scrollIntoView(false);
  }

  if (event.target.id === "info") {
    document.getElementById("screen_2").scrollIntoView(false);
  }
}
document
  .querySelectorAll("button")
  .forEach((item) => item.addEventListener("click", handleClick));
