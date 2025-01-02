/**#70 10:34:03 Callback Hell? 🔥
 * Callback Hell = Situation in JavaScript where callbacks
 *                 are nested within other callbacks to the 
 *                 degree where the code is difficult to read.
 *                 Old pattern to handle asynchronous functions.
 *                 Use Promises + async/await to avoid Callback Hell

function task1(callback){

    setTimeout(()=>{
           console.log("Task 1 complete");   
           callback();
    }, 2000);
}

function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 complete"); 
        callback();  
 }, 2000);}

function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 complete");
        callback();   
 }, 3000);}
function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 complete");   
        callback();
 }, 1500);}
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All task complete");
            });
        })
    })
});
 */

/**#71 10:39:50 Promises 🤞
 * Promise = An Object that manages asynchronous operations.
 *           Wrap a Promise Object around {asynchronous}
 *           "I promise to return a value"
 *           PENDING -> RESOLVED or REJECTED
 *           new Promise((resolve, reject) => {asynchronous code})
 * 
 *  DO THESE CHORES IN ORDER
 * 
 *  1. WALK THE DOG
 *  2. CLEAN THE KITCHEN
 *  3. TAKE OUT THE TRASH
 
//#1 Callback hell
function walkDog(callback){

    setTimeout(() => {
        console.log("You WALK THE DOG! 🐕");
        callback();
    }, 1500)
}
function cleanKitchen(callback){

    setTimeout(() => {
        console.log("You CLEAN THE KITCHEN! ");
        callback();
    }, 2500)
}
function takeOutTrash(callback){

    setTimeout(() => {
        console.log("You TAKE OUT THE TRASH! 🧺");
        callback();
    }, 500)
};
walkDog(()=>{
    cleanKitchen(()=>{
        takeOutTrash(()=>{
            console.log("Chores completed!!");
        })
    })
})

//#2 Promises
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true; 
      //if this will be false other promises won't get a chance to execute

      if (dogWalked) {
        resolve("You WALK THE DOG! 🐕");
      } else {
        reject("you didn't walked the dog");
      }
    }, 1500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;

      if (kitchenCleaned) {
        resolve("You CLEAN THE KITCHEN! ");
      } else {
        reject("you didn't Clean the kitchen!!");
      }
    }, 2500);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;
      if (trashTakenOut) {
        resolve("You TAKE OUT THE TRASH!🧺 ");
      } else {
        reject("you didn't taken out trash");
      }
    }, 1500);
  });
}
// method chaining
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("Chores completed!!");
  })
  .catch(error => console.error(error));
*/

/**#72 10:52:24 Async/Await ⏳
 * Async/Await = Async = makes a function return a promise
 *               Await = makes an async function wait for a promise
 *       
 *               Allows you write asynchronous code in a synchronous manner
 *               Async doesn't have resolve or reject parameters
 *               Everything after Await is placed in an event queue

async function doChores() {
    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
    const takenTrashResult = await takeOutTrash();
    console.log(takenTrashResult);
    console.log("Chores completed!!");
    }
    catch(error){
        console.error(error);  
    }
}
doChores();
 */

/**#73 10:57:00 JSON files 📄
 *  JSON = (JavaScript Object Notation) data-interchange format
 *         Used for exchanging data between a server and a web application
 *         JSON files {key:value} or [value1, value2, value3]
 *                                   [{}, {}, {}]
 * 
 *         JSON.stringify() = converts a JS object to a JSON string.
 *         JSON.parse() = converts a JSON string to a JS object

//#1
//these are objects
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 19,
    "isStudent": true,
    "hobbies": ["JellyFishing", "karate", "Cooking"] 
}
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isStudent": true
},
{ 
    "name": "Patrick",
    "age": 34, 
    "isStudent": false
}, 
{ 
    "name": "Squidward",
    "age": 19,
    "isStudent": true
},
{
    "name": "Sandy",
    "age": 19,
    "isStudent": true
}]
//these are strings
const jsonString = JSON.stringify(names);
console.log(jsonString);

const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);

const jsonPeople = JSON.stringify(people);
console.log(jsonPeople);

//#2 
//these are strings
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 19, "isStudent": true, "hobbies": ["JellyFishing", "karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 30, "isStudent": true},
                    {"name": "Patrick", "age": 34, "isStudent": false}, 
                    {"name": "Squidward","age": 19, "isStudent": true},
                    {"name": "Sandy","age": 19, "isStudent": true}]`;
//these are objects
const parseData = JSON.parse(jsonNames);
console.log(parseData);
const parseData = JSON.parse(jsonPerson);
console.log(parseData);
const parseData = JSON.parse(jsonPeople);
console.log(parseData);
 */

/** 
fetch("people.json")
      .then(response => response.json())
      .then(value => value.forEach(value => console.log(value)))
      .catch(error => console.error(error));
*/     