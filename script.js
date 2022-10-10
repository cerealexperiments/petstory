const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const navigation = document.querySelector(".navigation");
const navigationBlock = document.querySelector(".header__navigation");
const overlay = document.querySelector(".overlay");
const reviews = document.querySelectorAll(".review");
const petsArrows = document.querySelectorAll(".pets__arrow");
const pets = document.querySelectorAll(".pet");
const testimonialsInput = document.querySelector(".input-range");
const testimonialsReviews = document.querySelector(".testimonials__reviews");

const animals = [
  {
    name: "giant pandas",
    location: "Native to Southwest China",
    imageUrl: "img/pets/pandas.jpg",
  },
  {
    name: "eagles",
    location: "Native to South America",
    imageUrl: "img/pets/eagles.jpg",
  },
  {
    name: "gorillas",
    location: "Native to Congo",
    imageUrl: "img/pets/gorillas.jpg",
  },
  {
    name: "gorillas (second)",
    location: "Native to Congo",
    imageUrl: "img/pets/gorillas2.jpg",
  },
  {
    name: "two-toed sloth",
    location: "Mesoamerica, South America",
    imageUrl: "img/pets/sloth.jpg",
  },
  {
    name: "cheetahs",
    location: "Native to Africa",
    imageUrl: "img/pets/cheetahs.jpg",
  },
  {
    name: "penguins",
    location: "Native to Antactica",
    imageUrl: "img/pets/penguins.jpg",
  },
  {
    name: "alligators",
    location: "Native to Southeastern U. S.",
    imageUrl: "img/pets/alligators.jpg",
  },
];

function getRandomItem() {
  return animals[Math.floor(Math.random() * animals.length)];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("active");
  header.classList.toggle("header__active");
  navigation.classList.toggle("active");
  navigationBlock.classList.toggle("active");
  e.stopPropagation();
});

header.addEventListener("click", () => {
  console.log("header clicked");
  header.classList.remove("header__active");
  navigation.classList.remove("active");
  navigationBlock.classList.remove("active");
});

document.querySelectorAll(".header-link").forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    header.classList.remove("header__active");
    navigation.classList.remove("active");
    navigationBlock.classList.remove("active");
  });
});

document.querySelectorAll(".review").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("popup");
    overlay.classList.add("active");
    overlay.addEventListener("click", () => {
      item.classList.remove("popup");
      overlay.classList.remove("active");
    });
  });
});

for (let arrowIndex = 0; arrowIndex < petsArrows.length; arrowIndex++) {
  petsArrows[arrowIndex].addEventListener("click", () => {
    setTimeout(() => {
      shuffle(animals);
      console.log(animals);
      const newPets = [...animals];
      for (let i = 0; i < pets.length; i++) {
        petImage = pets[i].querySelector(".pet__image");
        petName = pets[i].querySelector(".pet__name");
        petLocation = pets[i].querySelector(".pet__location");
        petImage.src = newPets[i].imageUrl;
        petName.innerHTML = newPets[i].name;
        petLocation.innerHTML = newPets[i].location;
        if (arrowIndex == 0) {
          pets[i].classList.add("scrollLeft");
          setTimeout(() => pets[i].classList.remove("scrollLeft"), 500);
        } else {
          pets[i].classList.add("scrollRight");
          setTimeout(() => pets[i].classList.remove("scrollRight"), 500);
        }
      }
    });
  });
}

testimonialsInput.addEventListener("input", () => {
  let inputValue = testimonialsInput.value;
  testimonialsReviews.classList.add("scroll-2");
  setTimeout(() => testimonialsReviews.classList.remove("scroll-2"), 500);
  console.log(`value: ${inputValue}`);
  if (inputValue == 1) {
    document.querySelector(".review-1").classList.add("removeReview");
    document.querySelector(".review-2").classList.remove("removeReview");
  } else if (inputValue == 0) {
    document.querySelector(".review-1").classList.remove("removeReview");
  } else if (inputValue == 2) {
    document.querySelector(".review-2").classList.add("removeReview");
    document.querySelector(".review-3").classList.remove("removeReview");
  } else if (inputValue == 3) {
    document.querySelector(".review-3").classList.add("removeReview");
    document.querySelector(".review-4").classList.remove("removeReview");
  } else if (inputValue == 4) {
    document.querySelector(".review-4").classList.add("removeReview");
    document.querySelector(".review-5").classList.remove("removeReview");
  } else if (inputValue == 5) {
    document.querySelector(".review-5").classList.add("removeReview");
    document.querySelector(".review-6").classList.remove("removeReview");
  } else if (inputValue == 6) {
    document.querySelector(".review-6").classList.add("removeReview");
    document.querySelector(".review-7").classList.remove("removeReview");
  } else if (inputValue == 7) {
    document.querySelector(".review-7").classList.add("removeReview");
    document.querySelector(".review-8").classList.remove("removeReview");
  }
});

//better solution
/* let prevValue = testimonialsInput.value - 1;
let inputValue = testimonialsInput.value;
console.log(`current value: ${inputValue}`);
console.log(`previous value: ${prevValue}`);
let firstItem = document.querySelector(`.review-${inputValue}`);
let prevItem = document.querySelector(`.review-${prevValue}`);
firstItem.classList.add("removeReview"); */
