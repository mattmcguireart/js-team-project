"use strict";

// flip cards
// match cards
// update score
// timer when start is clicked
// losing modal
// restart
// congratulations modal

let modal = document.querySelector(".modal");
let cardContainer = document.querySelector(".card-container");
let cardsOuter = document.querySelectorAll(".card-outer");
let cards = document.querySelectorAll(".card-inner");
let backs = document.querySelectorAll(".back");

let images = [
  "6088f9a30da8f40018033e29.jpg",
  "cant.jpeg",
  "cat.jpg",
  "keanu.jpg",
  "leo.jpg",
  "mj.jpg",
  "pika.jpg",
  "yellow.png",
  "6088f9a30da8f40018033e29.jpg",
  "cant.jpeg",
  "cat.jpg",
  "keanu.jpg",
  "leo.jpg",
  "mj.jpg",
  "pika.jpg",
  "yellow.png",
];

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

const shuffle = (array) => {
  let oldElement;
  for (let i = array.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * 16);
    oldElement = array[i];
    array[i] = array[rand];
    array[rand] = oldElement;
  }
  for (let i = 0; i < backs.length; i++) {
    backs[i].setAttribute("src", images[i]);
  }
};

shuffle(images);

const assignImg = () => {};

const cardFlip = (e) => {
  console.log(e.target.parentNode);
  e.target.parentNode.classList.toggle("flip-card");
};

cardContainer.addEventListener("click", cardFlip);
