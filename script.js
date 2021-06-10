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
let flipped = [];
let scoreCount = 0;
let score = document.querySelector(".score");

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
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const makeBoard = (nodeList) => {
  let newArray = [];
  nodeList.forEach((card) => {
    newArray.push(card);
  });
  let shuffleArray = shuffle(newArray);
  shuffleArray.forEach((card) => {
    cardContainer.append(card);
  });
};

makeBoard(cardsOuter);

const assignImg = () => {};

const cardFlip = (e) => {
  console.dir(e.target);
  if (flipped.length < 2 && e.target.classList.contains("front")) {
    e.target.parentNode.classList.toggle("flip-card");
    flipped.push(e.target);
  }
  if (flipped.length === 2) {
    if (
      flipped[0].getAttribute("data-key") ===
      flipped[1].getAttribute("data-key")
    ) {
      scoreCount++;
      score.innerText = `SCORE: ${scoreCount}`;
      flipped = [];
    } else {
      flipped.forEach((item) => {
        item.parentNode.classList.toggle("flip-card");
      });
      flipped = [];
    }
  }
};

console.log(flipped);

cardContainer.addEventListener("click", cardFlip);

// const matching=()=>{

//     if(){}
// }
