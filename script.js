"use strict";

// shuffle cards
// flip cards
// match cards
// update score
// timer when start is clicked
// losing modal
// restart
// congratulations modal

let modal = document.querySelector(".modal");
let cardsOuter = document.querySelectorAll(".card-outer");
let cards = document.querySelectorAll(".card-inner");
let images = [];

let rNumber = 0;

const toggleModal = () => {
  modal.classList.toggle("hide");
};

modal.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("start")
  ) {
    modal.classList.toggle("hide");
  }
});

const randomNumber = () => {
  rNumber = Math.floor(Math.random() * 16);
  return rNumber;
};

const shuffle = () => {
  let counter = 0;
  let usedNumbers = [];
  while (counter < 9);
  let divA = randomNumber();
  let divB = randomNumber();
  image = images[randomNumber()];
  cardsOuter[divA].setAttribute("src", image);
  cardsOuter[divB].setAttribute("src", image);
};
