"use strict";
//const declaration
const selectElement = document.querySelector(".js-selected");
const btn = document.querySelector(".js-play");
const result = document.querySelector(".js-result");
const saldo = document.querySelector(".js-saldo");
const cantidad = document.querySelector(".js-cantidad");
const textMoney = document.querySelector(".js-money");
const reinit = document.querySelector(".js-reload");

let salValue = 50;

textMoney.innerHTML = salValue;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function game(selectValue, randomNumber) {
  //agregamos el min y el max al input que recoge la apuesta

  let valueInput = valorMaximoInput();


  if (valueInput > salValue) {
    result.innerHTML = "No puedes apostar mas de lo que tienes";
    reinit.classList.remove("hidden");
    btn.classList.add("hidden");
  } else {
    if (selectValue === randomNumber) {
      result.innerHTML = "Has ganado el doble de lo apostado";
      salValue += valueInput * 2;
      if (salValue >= 200) {
        result.innerHTML = "No puedes seguir jugando ya has ganado lo máximo";
        salValue = 200;
        reinit.classList.remove("hidden");
        btn.classList.add("hidden");
      }
    } else {
      result.innerHTML = "Has perdido lo apostado";
      salValue = salValue - valueInput;
    }

    if (salValue === 0) {
      result.innerHTML = "No tienes saldo para continuar";
      reinit.classList.remove("hidden");
      btn.classList.add("hidden");
    }
    textMoney.innerHTML = salValue;
  }

  function valorMaximoInput() {
    cantidad.setAttribute("min", 0);
    cantidad.setAttribute("max", salValue);
    let valueInput = parseInt(cantidad.value);
    return valueInput;
  }
}

function handleClick(event) {
  event.preventDefault();
  const selectValue = parseInt(selectElement.value);
  const randomNumber = getRandomNumber(6);
  game(selectValue, randomNumber);
}

// Creamos una función que define el valor máximo y mínimo del input de la apuesta

function handleClickReinit() {
  cantidad.value = "";
  salValue = 50;
  reinit.classList.add("hidden");
  btn.classList.remove("hidden");
}

btn.addEventListener("click", handleClick);
reinit.addEventListener("click", handleClickReinit);
