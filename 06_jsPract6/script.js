/**#33 04:33:08 filter() 🚰 
 * .filter() = creates a new array by filtering
 *             out elements

let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);
console.log(evenNums);

let oddNums = numbers.filter(isOdd);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}

//
const ages = [16, 17, 18, 18, 19, 20, 45];
const minor = ages.filter(isMinor);
const adult = ages.filter(isAdult);

console.log(minor);
console.log(adult);


function isAdult(element){
    return element >= 18;
}

function isMinor(element){
    return element < 18;
}

//
const words = ["account", "achieve", "basketball", "gifted", "success",
    "style", "study", "pose"
];
const shortWords = words.filter(getShortWords);
console.log(shortWords);

const longWords = words.filter(getLongWords);
console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length >= 6;
}
*/

/**#34 04:39:37 reduce() ♻
 * .reduce() = reduce the elements of an array 
 *             to a single value

const prices = [5, 30, 10, 25, 67];

const total = prices.reduce(sum);
console.log(`Your total is: $${total.toFixed(2)}`);

//accumulator - previous, element - next
function sum(accumulator, element){
    return accumulator + element;
} 

//
const grades = [75, 86, 97, 76, 45, 50];

const maximum = grades.reduce(getMax);
console.log(maximum);

//accumulator - previous, element - next
function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
const minimum = grades.reduce(getMin);
console.log(minimum);

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}
*/

/**#35 04:45:07 Function expressions 🐣
 * function declaration = define a reusable block of code
 *                        that performs a specific task
 * 
 * function expression = a way to define functions as 
 *                       values or variables
 * 
 * 1. Callbacks in asynchronous operations
 * 2. Higher-Order Functions
 * 3. Closures
 * 4. Event Listeners 
 

// const hello = function(){
//     console.log("Hello");   
// }
// hello();

// function hello(){
//     console.log("Hello!");
// }

// setTimeout(function(){
//     console.log("Hello!");
// }, 3000);

//
const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
})
console.log(squares);

const cube = numbers.map(function(element){
    return Math.pow(element, 3);
})
console.log(cube);

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(evenNums);

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});
console.log(oddNums);

const total = numbers.reduce(function(accumulator, element){
    return accumulator+element;
});
console.log(total);
*/

/**#36 04:52:39 Arrow functions 🎯
 * arrow functions = a concise way to write function expressions 
 *                   good for simple functions that you use only once
 *                   (parameters) => some code 

//#1
// function hello(){
//     console.log("Hello");
// }

//#2
// const hello = function(){
//     console.log("Hello");
// }

//#3
// const hello = (name) => console.log(`Your name is ${name}`);
// hello("Mohita Chourase");

// setTimeout(function(){
//     console.log("Hello");
// }, 3000);

// setTimeout(() =>  console.log("Hello"), 3000);

//
const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const totals = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(totals);
 */

/**#37 05:00:40 JavaScript Objects🧍
 * Object = A collection of related properties and/or methods
 *          Can represent real world objects (people, products, places)
 *          object = {key:value,
 *                    function()}

const person1 = {
    firstName: "Mohita",
    lastName: "Chourase",
    age: 20,
    isEmployed: false,
    sayHello: function(){console.log("Hi! I'm Mohita!!")},
    sayBye: function(){console.log("Goodbye!")},
    eat: function(){console.log("I am eating a Pizza")}
};

const person2 = {
    firstName: "Sakshi",
    lastName: "Mansingh",
    age: 21,
    isEmployed: false,
    sayHello: () => console.log("Hi! I'm Sakshi!!"),
    sayBye: function(){console.log("Byee....")},
    eat: () => console.log("I am eating a Burger"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.sayBye();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.sayBye();
person2.eat();
*/



