let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".nav");

toggle.onclick = function () {
  nav.classList.toggle("open");
};
window.onscroll = function () {
  this.scrollY >= 700
    ? toggle.classList.add("gray")
    : toggle.classList.remove("gray");
};

