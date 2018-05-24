const link = 

function scroll(event) {
  const el = document.getElementById("features");
  console.log("pippo")
  event.preventDefault();
  const offset = el.getBoundingClientRect().top - 160;
  window.scrollTo({
    top: offset,
    behavior: "smooth"
});
}