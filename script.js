"use strict";

// starat clock with time-up modal
// reset
// congratulations modal
// media queary

let modal = document.querySelector(".modal");
let cardContainer = document.querySelector(".card-container");
let cardsOuter = document.querySelectorAll(".card-outer");
let cards = document.querySelectorAll(".card-inner");
let backs = document.querySelectorAll(".back");
let flipped = [];
let scoreCount = 0;
let score = document.querySelector(".score");
let start = document.querySelector(".start");
let time = document.querySelector(".time");
let modal2 = document.querySelector(".modal2");
let restart = document.querySelector(".restart");
let modal3 = document.querySelector(".modal3");
let playAgain = document.querySelector(".play-again");

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

// const randomNumber = () => {
//   rNumber = Math.floor(Math.random() * 16);
//   return rNumber;
// };

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

const match = () => {
  if (
    flipped[0].getAttribute("data-key") === flipped[1].getAttribute("data-key")
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
};

const cardFlip = (e) => {
  console.dir(e.target);
  if (flipped.length < 2 && e.target.classList.contains("front")) {
    e.target.parentNode.classList.toggle("flip-card");
    flipped.push(e.target);
  }
  if (flipped.length === 2) {
    setTimeout(match, 1000);
  }
};

cardContainer.addEventListener("click", cardFlip);

let count = 5;

const clock = () => {
  let myTimer = setInterval(() => {
    time.innerText = `TIME:${count}`;
    count--;
    if (count < 0) {
      modal2.classList.toggle("hide");
      clearInterval(myTimer);
    }
  }, 1000);
};

start.addEventListener("click", clock);

modal2.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("restart")
  ) {
    modal2.classList.toggle("hide");
  }
});

// restart.addEventListener("click", clock);
