'use strict';

const btn = document.querySelector('.btn');
const container = document.querySelector('.poke-container');
const img1 = document.querySelector('.poke-image-1');
const img2 = document.querySelector('.poke-image-2');
const pokeName = document.querySelector('.name');

const strengthArr = [' and I believe in you!', ' and you can do this!', ` and I'm rooting for you!`, ' and I think you can do anything!', '. Keep pushing!', ` and I think you're awesome!`, ` and I'm your #1 fan!`];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min));
}

const showPoke = () => {
  const pokeNumber = getRandomNumber(1, 807);
  console.log(pokeNumber);
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}/`)
  .then (response => response.json())
  .then (data => {
    console.log(data);
    const strengthNumber = getRandomNumber(0, 6);
    pokeName.innerHTML = `Hello, my name is ${data.name} ${strengthArr[strengthNumber]}`;
    img1.src = data.sprites.front_default;
    img2.src = data.sprites.front_shiny;
  });
}

btn.addEventListener('click', showPoke);


// const alterEgo = () => {
  
//   const nameNumber = getRandomNumber(213, 1)
//   fetch(`https://www.anapioficeandfire.com/api/characters?page=${nameNumber}`)
//   .then(response => response.json())
//   .then(data => {
//     const number = getRandomNumber(10, 0);
//     const splitName = data[number].name.split(' ');
//     results1.innerHTML = `Your name is ${splitName[0]}, `;
//   });
//   const houseNumber = getRandomNumber(8)
//   fetch(`https://www.anapioficeandfire.com/api/houses?pagesize=50&page=${houseNumber}`)
//   .then(response => response.json())
//   .then(data => {
//     const number = getRandomNumber(50, 0);
//     const number2 = getRandomNumber(50, 0);
//     results2.innerHTML = `you belong in ${data[number].name},`
//     results3.innerHTML = `and you were born in ${data[number2].region}.`
//   })
// }

// const deadOrAlive = () => {
//   const number = getRandomNumber(100, 0);
//   if (number % 3 === 0) {
//     results1.innerHTML = `You're dead 💀`;
//     results2.innerHTML = `I'm sorry`;
//     results3.innerHTML = 'The Night is dark and full of terrors.'
//   } else {
//     alterEgo();
//   }
// }

// btn.addEventListener('click', deadOrAlive);