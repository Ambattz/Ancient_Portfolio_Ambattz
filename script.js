const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

var typed = new Typed(".autotyper", {
  strings: ["Alvin Ambattu", "an Engineer", "a Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  cursorChar: "|",
});
