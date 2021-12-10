const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu-container");

menuButton.addEventListener("click", (e) => {
  e.preventDefault();

  mobileMenu.classList.toggle("active");
});
