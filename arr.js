const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// MAP
// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names

// 1. Get an array of all Names
const getName = characters.map(charName => charName.name);
// console.log(getName);
// 2. Get an array of all heights
const getHeight = characters.map(charHeight => charHeight.height);
// console.log(getHeight);
// 3. Get an array of objects with just name and height properties

const getNameAndHeight = characters.map((person) => ({ name: person.name, height: person.height }));
// console.log(getNameAndHeight);

//4. Get an array of all first Names
const getFirstName = characters.map((charName) => charName.name.split(' ')[0]);
console.log(getFirstName);

//Reduce()
//1. Get the total mass of all characters
//2. Get the total height of all characters
//3. Get the total number of characters in all the character names
//4. Get the total number of characters by eye color (hint. a map of eye color to count)

// question - 1

// let character = ['jay', 'dev', 'muskan'];
// let number = [10, 20, 30, 40, 50];
// var result = number.reduce( function (total, num) {
//   return total + num 
// }, 0);

// console.log(result);

const getHeightofChar = characters.map(chaHeight => chaHeight.height);
let convertToString = Number(getHeightofChar);
// console.log(getHeightofChar)
// const sumOfHeight = getHeightofChar.reduce((total, sum) => {
//   return total + sum
// }, 0)
let sum = 0;
for(let i = 0; i < getHeightofChar.length; i++){
  return sum += getHeightofChar[i]
}

// console.log(sum)


const getMass = characters.reduce((total, mass) =>)