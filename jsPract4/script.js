/**22. ##FUNCTIONS
 *  A Section of reusable code,
 *  Declare code once, use it whenever you want.
 *  Call the Function to execute that code.
 

// function happyBirthday(username, age){
//     console.log("Happy Birthday to you!!");
//     console.log("Happy Birthday to you!!");
//     console.log(`Happy birthday dear ${username}`);
//     console.log("Happy Birthday to you!!");
//     console.log(`You are ${age} years old`);   
// }

// happyBirthday("Mohita", 20);

/** 
// function add(x, y) {
//     return x + y;
// }
// console.log(add(4,9));

/** 
// function subtract(x, y){
//     return x - y;
// }
// console.log(subtract(10,5));

/** 
// function multiply(x,y){
//     return x * y;
// }
// console.log(multiply(2,3));

/** 
// function divide(x,y){
//     return x/y;
// }
// console.log(divide(10,2));

// function evenOrOdd(num) {
    // if (num % 2 === 0 ) {
    //     console.log("Its even");
    // } else {
    //     console.log("Its Odd");
    // }
    // return num;

//     return num % 2 === 0 ? "Its even " : "Its odd";
// }
// let number = window.prompt("Enter the number");
// console.log(evenOrOdd(number));

// function isValidEmail(email){
    /**includes - keyword to check 
    // if (email.includes("@")) {
    //     return true;
    // } else {
    //     return false;
    // }

//     return email.includes("@") ? true : false;
// }

// console.log(isValidEmail("Bro@fake.com"));


/**#23 03:01:44 Variable scope 🏠 
// variable scope = where a variable is recognized
//                  and accessible (local vs global)

// let x = 3;

// function function1(){
//     // let x = 1;
//     console.log(x);
// }

// function function2(){
//     // var x = 2;
//     console.log(x);
// }
// function1();
// function2();

/**#24 03:07:10 ⭐ Temperature conversion program 🌡️ 
// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;

// function convert() {
//     if(toFahrenheit.checked){
//         temp = Number(textBox.value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp.toFixed(1) + "°F";
//     }
//     else if (toCelsius.checked) {
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5/9);
//         result.textContent = temp.toFixed(1) + "°C";
//     }
//     else {
//         result.textContent = "Select a unit";
//     }
// }
*/

/**#25 03:23:28 Arrays 🗃 */
/* array = a variable like structure that can hold 
           more than 1 value
*/

// let fruits = ["apple", "orange", "avocado", "mango"];

// fruits.push("Coconut");
// fruits.pop();
// fruits.unshift("Grapes");
// fruits.shift();

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// let numOfFruits = fruits.length;
// console.log(numOfFruits);

// let index = fruits.indexOf("apple");
// console.log(index);

// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     console.log(element);
// }

// fruits.sort().reverse();

// for (const fruit of fruits) {
//     console.log(fruit);
// }

/**#26 03:31:33 Spread operator 📖
 * spread operator = ... allows and iterable such as an
 *                   array or string to be expanded
 *                   into seperate elements
 *                   (unpacks the elements)
 
// let number = [1,2,3,4,5];
// console.log(number);

// let maximum = Math.max(...number);
// console.log(maximum);

// let minimum = Math.min(...number);
// console.log(minimum);

// let username = "MohitaQueen";
// let letters = [...username].join("-");
// console.log(letters);

// let fruits = ["apple", "orange", "avocado", "mango"];
// let vegetables = ["carrots", "potato", "onion"]
// let foods = [...fruits, ...vegetables, "eggs", "milk"]
// console.log(foods);
*/

/** #27 03:36:27 Rest parameters 🗄
 * rest parameters = (...rest) allows a function work with a variable 
 *                   number of arguments by bundling them into an array
 * 
 *                   spread = expands an array into seperate elements
 *                   rest = bundles seperate elements into an array
 * 
// const food1 = "Pizza";
// const food2 = "Pasta";
// const food3 = "Sushi";
// const food4 = "Hotdog";
// const food5 = "Burger";

// function openFridge(...foods){
//     console.log(foods);
// }
// openFridge(food1, food2, food3, food4, food5);

// function getFood(...foods){
//     return foods;
// }
// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);


// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }
// const total = sum(1, 3, 6);
// console.log(`You total is $${total}`);

// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }
// const avg = getAverage(2,4,5,6);
// console.log(`Your Average is ${avg}`);


// function combineStrings(...strings) {
//     return strings.join(" ")
// }
// const fullName = combineStrings("Miss", "Stassie", "Stinson", "I");
// console.log(fullName);
*/
