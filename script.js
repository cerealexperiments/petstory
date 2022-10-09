const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const navigation = document.querySelector(".navigation");
const navigationBlock = document.querySelector(".header__navigation");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  header.classList.toggle("active");
  navigation.classList.toggle("active");
  navigationBlock.classList.toggle("active");
});

document.querySelectorAll(".header-link").forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    header.classList.remove("active");
    navigation.classList.remove("active");
    navigationBlock.classList.remove("active");
  });
});
