/**#53 07:05:20 ⭐ Digital Clock program 🕐

function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12? "PM":"AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);
 */

/**#54 07:16:07 ⭐ Stopwatch program ⏱
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
*/

/**#55 07:34:12 ES6 Modules 🚢
 * ES6 Module = An external file that contains reusable code
 *              that can be imported into other JavaScript files.
 *              Write reusable code for many different apps.
 *              Can contain variables, classes, functions ... and more
 *              Introduced as part of ECMAScript 2015 update

import {PI, getCircumference, getArea, getVolume} from "./mathUtil.js";

console.log(PI);
console.log(getCircumference(2).toFixed(2));
console.log(getArea(2).toFixed(2));
console.log(getVolume(2).toFixed(2));
*/

/**#56 07:40:17 Asynchronous code 💤
 * synchronous = Executes line by line consecutively in a sequential manner
 *               Code that waits for an operation to complete
 *
 * asynchronous = Allows multiple operations to be performed concurrently without waiting
 *                Doesn't block the execution flow and allows the program to continue
 *                (I/O operations, network requests, fetching data)
 *                Handled with: Callbacks, Promises, Async/Await
function func1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
func1(func2); 
*/

/**#57 07:45:04 Error handling ⚠
 * Error = An object that is created to represent a problem that occurs
 *         Occur often with user input or establishing a connection
 *
 * try{ } = Enclose code that might potentially cause an error
 * catch{ } = Catch and handle any thrown Errors from try { }
 * finally { } = (optional) Always executes. Used mostly for clean up
 *               ex. close files, close connections, release resources
//#1
console.log("Hello");

try {
  console.log(x);
  // NETWORK ERRORS
  // PROMISE REJECTION
  // SECURITY ERRORS
} catch (error) {
  console.error(error);
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");   
}
console.log("You have reached the end!");

//#2 
try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a Divisor: "));

    if(divisor == 0){
        throw new Error("You can't divide by zero");
    }
    if(isNaN(dividend) || isNaN){
        throw new Error("Values must be a number")
    }
    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error();
}
console.log("You have reached the end");
*/

/**#58 07:54:06 ⭐ Calculator program 🖩 */
// const display = document.getElementById("display");

// function appendToDisplay(input) {
//   display.value += input;
// }

// function clearDisplay() {
//   display.value = "";
// }

// function calculate() {
//   // Updated function name to match onclick
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }

/**#59 08:09:26 What is the DOM? 🌳
 * DOM = DOCUMENT OBJECT MODEL
 *       Object{} that represents the page you see in the web browser
 *       and provides you with an API to interact with it.
 *       Web browser constructs the DOM when it loads an HTML document,
 *       and structures all the elements in a tree-like representation.
 *       JavaScript can access the DOM to dynamically
 *       change the content, structure, and style of a web page.

console.log(document);
console.dir(document);

const username = " Bro Code";
const welcomemsg = document.getElementById("welcome-msg");

welcomemsg.textContent += username === "" ? 'Guest' : username; 
console.log(welcomemsg);
 */

/**#60 08:14:26 Element selectors 📑 
 * element selectors = Methods used to target and manipulate HTML elements
 *                     They allow you to select one or multiple HTML elements
 *                     from the DOM (Document Object Model)
 * 
 * 1. document.getElementById()            // ELEMENT OR NULL
 * 2. document.getElementsClassName()      // HTML COLLECTION
 * 3. document.getElementsByTagName()      // HTML COLLECTION
 * 4. document.querySelector()             // ELEMENT OR NULL
 * 5. document.querySelectorAll()          // NODELIST
 * 
//#1
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor =  "Orange";
myHeading.style.textAlign = "center";
console.log(myHeading);

//#2
const fruits = document.getElementsByClassName("fruits");
// fruits[1].style.backgroundColor = "Pink";
// for(let fruit of fruits){
//   fruit.style.backgroundColor = "Pink";
// }

// fruits.forEach(); //it gives error script.js:215  Uncaught TypeError: fruits.forEach is not a function

Array.from(fruits).forEach(fruit => {
  fruit.style.backgroundColor = "Pink";
})

//#3
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
console.log(h4Elements);
// h4Elements[0].style.backgroundColor = "Pink";
// h4Elements[1].style.backgroundColor = "Pink";
//or
// for(let h4Element of h4Elements){
//   h4Element.style.backgroundColor = "Pink";
// }
// for(let liElement of liElements){
//   liElement.style.backgroundColor = "lightgreen";
// }
//or
Array.from(liElements).forEach(liElement => {
  liElement.style.backgroundColor = "lightblue";
})

//#4
const element = document.querySelector(".fruits");
element.style.backgroundColor = "lavender";
console.log(element);

//#5
const fruits = document.querySelectorAll("li");
fruits[0].style.backgroundColor = "Cyan";
console.log(fruits);
fruits.forEach(food => {
  food.style.backgroundColor = "Cyan";
})
*/