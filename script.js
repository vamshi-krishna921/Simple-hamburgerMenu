let cross = document.querySelector(".cross");
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".ham-menu");
let nav = document.querySelector("nav");
hamburgerMenu.addEventListener("click", (e) => {
  hamburgerMenu.style.display = "none";
  header.classList.add("menu-open");
  cross.style.display = "block";
  e.stopPropagation();
});
function close() {
  cross.style.display = "none";
  hamburgerMenu.style.display = "block";
  header.classList.remove("menu-open");
}
cross.addEventListener("click", (e) => {
  close();
});
document.addEventListener("click", (e) => {
  if (header.classList.contains("menu-open")) {
    close();
  }
});
nav.addEventListener("click", (e) => {
  e.stopPropagation(); 
});