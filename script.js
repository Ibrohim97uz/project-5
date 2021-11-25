const burger = document.querySelector(".burger_menu");
const burgerNav = document.querySelector(".burger_nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("burger_transform");
  burgerNav.classList.toggle("show");
  burgerNav.classList.toggle("height");
});
