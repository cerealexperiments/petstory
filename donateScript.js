const formInput = document.querySelector(".form__input");
const buttons = document.querySelectorAll(".amount__button");
const points = document.querySelectorAll(".amount__point");
const prices = document.querySelectorAll(".amount__price");

formInput.value = 100;

function selectPoint(pointIndex) {
  document.querySelectorAll(".point--active").forEach((activePoint) => {
    activePoint.classList.remove("point--active");
  });
  document.querySelectorAll(".price--active").forEach((activePrice) => {
    activePrice.classList.remove("price--active");
  });
  buttons[pointIndex].children[0].classList.add("point--active");
  prices[pointIndex].classList.add("price--active");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    document.querySelectorAll(".point--active").forEach((activePoint) => {
      activePoint.classList.remove("point--active");
    });
    document.querySelectorAll(".price--active").forEach((activePrice) => {
      activePrice.classList.remove("price--active");
    });
    buttons[i].children[0].classList.add("point--active");
    prices[i].classList.add("price--active");
    formInput.value = prices[i].textContent.slice(1);
  });
}

formInput.addEventListener("input", () => {
  if (formInput.value.length > 4) {
    formInput.value = formInput.value.substr(0, 4);
  }
  if (formInput.value == 25) {
    selectPoint(7);
  } else if (formInput.value == 50) {
    selectPoint(6);
  } else if (formInput.value == 100) {
    selectPoint(5);
  } else if (formInput.value == 250) {
    selectPoint(4);
  } else if (formInput.value == 500) {
    selectPoint(3);
  } else if (formInput.value == 1000) {
    selectPoint(2);
  } else if (formInput.value == 2000) {
    selectPoint(1);
  } else if (formInput.value == 5000) {
    selectPoint(0);
  } else {
    document.querySelectorAll(".point--active").forEach((activePoint) => {
      activePoint.classList.remove("point--active");
    });
    document.querySelectorAll(".price--active").forEach((activePrice) => {
      activePrice.classList.remove("price--active");
    });
  }
});
