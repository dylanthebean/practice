const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", (e) => {
  e.preventDefault();

  mobileMenu.classList.toggle("visible");
});
