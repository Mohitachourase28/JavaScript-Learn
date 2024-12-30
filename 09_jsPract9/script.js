/**#46 06:10:08 Nested objects 📫
 * nested objects = Objects inside of other Objects.
 *                  Allows you to represent more complex data structures
 *                  Child Object is enclosed by a Parent Object
 * 
 *                  Person{Address{}, ContactInfo{}}
 *                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
//#1
//object
const person = {
    fullName: "Mohita Chourase",
    age: 30,
    isStudent:true,
    hobbies: ["Dancing", "Painting","Cooking"],
    address:{
        street: "124 Conch St.",
        city: "Caliwork",
        country: "Int. Water"
    }
}
console.log(person.fullName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.isStudent);
console.log(person.address.city);

for( const property in person.address){
    console.log(person.address[property]);
} 

//#2
class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Mohita Chourase", 19, "124 Conch St.","Caliwork", "Int. Water");
console.log(person1);
const person2 = new Person("Khushi Chourase", 20, "128 Conch St.","Caliland", "Int. Water");
console.log(person2);
*/

/**#47 06:19:21 Arrays of objects 🍎 

const fruits = [{name: "apple", color:"red", calories:95},
                {name: "orange", color:"orange", calories:45},
                {name: "banana", color:"yellow", calories:105},
                {name: "coconut", color:"white", calories:159},
                {name: "pineapple", color:"yellow", calories:37}];

// console.log(fruits);
// fruits.push({name: "Kiwi", color:"green", calories: 120});
// console.log(fruits);

// --------forEach()--------
fruits.forEach(fruit => console.log(fruit));

// ----------map()-----------
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// ---------filter()---------
const yellowFruits = fruits.filter(fruit => fruit.color ==="yellow");
console.log(yellowFruits);

const lowCalorie = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalorie);

const highCalorie = fruits.filter(fruit => fruit.calories > 100);
console.log(highCalorie);

// ---------reduce()---------
const maxCalFruit = fruits.reduce((max, fruit)=>fruit.calories > max.calories ? fruit : max);
console.log(maxCalFruit);

const minCalFruit = fruits.reduce((min, fruit)=>fruit.calories < min.calories ? fruit : min);
console.log(minCalFruit);
*/

/**#48 06:29:21 Sorting 🗃
 * sort() = method used to sort elements of an array in place.
 *          Sorts elements as string in lexicographic order, not alphabetical
 *          lexicographic = (alphabet + numbers + symbol) as strings
//#1
let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
fruits.sort();
console.log(fruits);
//#2
let numbers = [1, 10, 3, 4, 5, 8, 9, 3, 9];
numbers.sort((a, b) => a - b);
console.log(numbers);

const people = [{name:"Mohita", age:19, gpa:4.0},
                {name:"Khushi", age:22, gpa:4.0},
                {name:"Sakshi", age:21, gpa:3.6}, 
                {name:"Sayna", age:20, gpa:3.4}];
// people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
 */

/**#49 06:36:03 Shuffle an array 🔀 
// Fisher-Yates algorithm
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10,'K', 'Q', 'J'];
shuffle(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
       const random =  Math.floor(Math.random() * (i+1));

       [array[i], array[random]]= [array[random], array[i]];
    }
}
console.log(cards);
*/

/**#50 06:40:08 Dates 📅
 * Dates objects = Objects that contain values that represent dates and times 
 *                 These date objects can be changed and formatted

// Dates(year, month, day, hour, minute, second, ms)
// const date = new Date(2024, 0, 1, 2, 3, 4, 5);
// const date = new Date("2024-01-02");
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const fullDate = day + month + year;
console.log(date);
console.log(year);
console.log(fullDate);
 */

/**#51 06:48:09 Closures 🔒
 * closure = A function defined inside of another function,
 *           the inner function has access to the variables 
 *           and scope of the outer function.
 *           Allows for private variable and static maintenance
 *           Used frequently in JS frameworks: React, Vue, Angular
//#1
function outer(){

    let message = "Hello";

    function inner(){
        console.log(message); 
    }
    inner();
}
outer(); 
//#2
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount(){
    return count;
  }
  
  return {increment, getCount};
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(`The current count is: ${counter.getCount()}`);
//#3
function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }
  return { increaseScore, decreaseScore, getScore };
}
const game = createGame();
game.increaseScore(111);
game.decreaseScore(56);
console.log(`The final score: ${game.getScore()}pts`);
*/

/**#52 06:59:07 setTimeout() ⏰
 * setTimeout() = function in JavaScript that allows you to schedule 
 *                the execution of a function after an amount of time (millisecond)
 *                Times are approximate (varies based on the workload of the JavaScript runtime env.)
 *                
 *                setTimeout(callback, delay)
function sayHello(){
    window.alert("Hello");
}
const timeoutId =  setTimeout(()=>window.alert("Hello"), 3000);
clearTimeout(timeoutId);

//#2
let timeoutId;
function startTimer(){
    timeoutId = setTimeout(() => {
        window.alert("Hello");
    }, 3000);
    console.log("Started");
    
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
    
}
*/