let cross = document.querySelector(".cross");
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".ham-menu");
let nav = document.querySelector("nav");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.style.display = "none";
  header.classList.add("menu-open");
  cross.style.display = "block";
});
cross.addEventListener("click", () => {
  cross.style.display = "none";
  hamburgerMenu.style.display = "block";
  header.classList.remove("menu-open");
});
