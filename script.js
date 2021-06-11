"use strict";

let modal = document.querySelector(".modal");
let cardContainer = document.querySelector(".card-container");
let cardsOuter = document.querySelectorAll(".card-outer");
let cards = document.querySelectorAll(".card-inner");
let backs = document.querySelectorAll(".back");
let matchedCards = [];
let scoreCount = 0;
let score = document.querySelector(".score");
let start = document.querySelector(".start");
let time = document.querySelector(".time");
let modal2 = document.querySelector(".modal2");
let restart = document.querySelector(".restart");
let modal3 = document.querySelector(".modal3");
let playAgain = document.querySelector(".play-again");
let resetB = document.querySelector(".reset");
let flippedCards = [];
let myTimer;

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
    matchedCards[0].getAttribute("data-key") ===
    matchedCards[1].getAttribute("data-key")
  ) {
    scoreCount++;
    score.innerText = `SCORE: ${scoreCount}`;
    matchedCards.forEach((card) => {
      flippedCards.push(card);
      card.parentNode.classList.add("hide");
    });
    console.log(flippedCards);

    matchedCards = [];
  } else {
    matchedCards.forEach((item) => {
      item.parentNode.classList.toggle("flip-card");
    });
    matchedCards = [];
  }
};

const cardFlip = (e) => {
  console.dir(e.target);
  if (matchedCards.length < 2 && e.target.classList.contains("front")) {
    e.target.parentNode.classList.toggle("flip-card");
    matchedCards.push(e.target);
    if (matchedCards.length === 2) {
      setTimeout(match, 1000);
    }
  }
};

cardContainer.addEventListener("click", cardFlip);

const clock = () => {
  let count = 60;
  myTimer = setInterval(() => {
    time.innerText = `TIME:${count}`;
    count--;
    if (scoreCount === 8) {
      modal3.classList.toggle("hide");
      clearInterval(myTimer);
      scoreCount = 0;
      score.innerText = `SCORE: ${scoreCount}`;
    }
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

const reset = () => {
  makeBoard(cardsOuter);
  cards.forEach((card) => {
    if (card.classList.contains("flip-card")) {
      card.classList.remove("flip-card");
      card.classList.remove("hide");
    }
  });
  clearInterval(myTimer);
  modal.classList.toggle("hide");
};

resetB.addEventListener("click", reset);

modal2.addEventListener("click", reset);

modal3.addEventListener("click", () => {
  reset();
  modal3.classList.toggle("hide");
});
