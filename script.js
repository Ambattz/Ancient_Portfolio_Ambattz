//navbar
const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

//home page
var typed = new Typed(".autotyper", {
  strings: ["Alvin Ambattu", "an Engineer", "a Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

//profile page
ScrollOut({
  targets: "h1, .desc",
});

//contact page
const components = document.querySelectorAll(".contact");
function addClass() {
  components.forEach((item) => item.classList.add("sent"));
}
sendLetter.addEventListener("click", addClass);
