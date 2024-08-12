const hamburger = document.querySelector("#hamburger");
const navList = document.querySelector(".nav");

hamburger.addEventListener("click", function () {
  console.log("shake and bake");
  navList.classList.toggle("open-nav");
});
