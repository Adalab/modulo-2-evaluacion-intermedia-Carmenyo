"use strict";
//const declaration
const selectedValue = document.querySelector(".js-select");
const BetValue = document.querySelector ("js-number")
const submitBtn = document.querySelector (".js-submit");
const indicationText = document.querySelector(".js-indication");
const playerValue = document.querySelector(".js-player");

const randomNumber = getRandomNumber(6);

console.log('El número aleatorio es:', randomNumber);


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  let randomNumber = getRandomNumber(6);


function playGame() {

    if (randomNumber === selectedValue ) { indicationText.innerHTML = "Has ganado el doble de lo apostado";
    } else {
    indicationText.innerHTML = "Has perdido lo apostado";
    }
