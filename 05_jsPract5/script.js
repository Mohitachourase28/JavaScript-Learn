/**#28 03:44:32 ⭐ Dice Roller program 🎲

function rollDice() {
  const numDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < numDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    // console.log(`Path: dice_image/${value}.png`);
    images.push(`<img src="dice_image/${value}.png" alt="Dice ${value}" />`);
  }
  diceResult.textContent = `Dice: ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
}
 */

/**#29 03:58:44 ⭐ Random password generator 🔑 
function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";
  // console.log(allowedChars);

  if (length <= 0) {
    return `(password length must be at least 1)`
  } 
  if(allowedChars.length === 0) {
    return `(At least 1 set of character needs to be selected)`
  }
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password: ${password}`);
*/

/**#30 04:10:49 Callbacks 🤙
 * callback = a function that is passed as an argument
 *            to another function.
 *
 *            used to handle asynchronous operations:
 *            1.  Reading a file
 *            2.  Network requests
 *            3.  Interacting with databases
 *
 *            "Hey, when you're done, call this next."
 
hello(goodbye);
function hello(callback) {
    console.log("Hello!");
    callback();
}

hello(wait);
function wait(){
  console.log("Have patience bitch!!");
}

hello(leave);
function leave(){
  console.log("Get Out!!!");
}

// goodbye();
function goodbye() {
  console.log("Good bye");
}

sum(displayConsole, 3,4);
function sum(callback, x, y){
  let result = x + y;
  callback(result);
}

function displayConsole(result){
  console.log(result);
}
sum(displayPage, 1,4);
function displayPage(result){
  document.getElementById("myH1").textContent = result;
}
*/

/** #31 04:18:05 forEach() ➿
 * forEach() = method used to iterate over the elements
 *             of an array apply a specified function (callback)
 *             to each element
 *        
 *             array.forEach(callback)
 *             element, index, array are provided


let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(double);
//
// numbers.forEach(triple);
// numbers.forEach(square);
numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
  array[index] = element * 2;
}
function triple(element, index, array){
  array[index] = element * 3;
}

function square(element, index, array){
  array[index] = element ** 2;
}

function cube(element, index, array){
  array[index] = Math.pow(element, 3);
}
function display(element){
  console.log(element);
}

//
let fruits = ["apple", "orange", "mango", "Kiwi"];

// let fruits = ["APPLE", "ORANGE", "MANGO", "KIWI"];

// fruits.forEach(upperCase);
fruits.forEach(lowerCase);
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
  array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
/**element.slice()- Aapple, Oorange, Mmango, Kkiwi
 * element.slice(1)- Apple, Orange, Mango, Kiwi
*/
/*
function display(element){
  console.log(element);
}
*/

/**#32 04:26:07 map() 🗺 
 * .map() = accepts a callback and applies that function
 *          to each element of an array, then return a new array

const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
console.log(squares);

const cubes = numbers.map(cube);
console.log(cubes);

function square(element){
  return Math.pow(element, 2);
}

function cube(element){
  return Math.pow(element, 3);
}

//
const students = ["Mohita", "Khushi", "Sakshi"];
const uppercaseChars = students.map(upperCase);
console.log(uppercaseChars);

const lowercaseChars = students.map(lowerCase);
console.log(lowercaseChars);

function upperCase(element) {
  return element.toUpperCase();
}
function lowerCase(element) {
  return element.toLowerCase();
}

//
const dates = ["2024-1-10", "2025-1-28", "2025-12-1", "2025-1-8"];
const newDates = dates.map(formatDates);
console.log(newDates);

function formatDates(element){
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
*/

