'use strict';

const btn = document.querySelector('.btn');
const img1 = document.querySelector('.poke-image-1');
const img2 = document.querySelector('.poke-image-2');
const pokeName = document.querySelector('.name');
const logo = document.querySelector('.header-image');

const strengthArr = [' and I believe in you!', ' and you can do this!', ` and I'm rooting for you!`, ' and I think you can do anything!', '. Keep pushing!', ` and I think you're awesome!`, ` and I'm your #1 fan!`];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min));
}

const showPoke = () => {
  const pokeNumber = getRandomNumber(1, 807);
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}/`)
  .then (response => response.json())
  .then (data => {
    const strengthNumber = getRandomNumber(0, 6);
    pokeName.innerHTML = `Hello, my name is ${data.name} ${strengthArr[strengthNumber]}`;
    img1.src = data.sprites.front_default;
    img2.src = data.sprites.front_shiny;
  });
}

const refresh = () => {
  pokeName.innerHTML = '';
  img1.src = '';
  img2.src = '';
}

btn.addEventListener('click', showPoke);
logo.addEventListener('click', refresh);