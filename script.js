const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const navigation = document.querySelector(".navigation");
const navigationBlock = document.querySelector(".header__navigation");
const overlay = document.querySelector(".overlay");
const reviews = document.querySelectorAll(".review");
const petsArrows = document.querySelectorAll(".pets__arrow");
const pets = document.querySelectorAll(".pet");

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

petsArrows.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("arrow clicked!");
    console.log("random animal:");
    console.log(getRandomItem());
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
    }
  });
});
