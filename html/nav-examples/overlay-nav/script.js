const menuButton = document.querySelector(".menu-button");
const overlayMenu = document.querySelector(".overlay-navigation");

menuButton.addEventListener("click", (e) => {
  e.preventDefault();

  overlayMenu.classList.toggle("visible");
});
