const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const tasto = document.querySelector("ul[class=tasto]");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

tasto.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
