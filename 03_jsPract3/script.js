/** 
// ##15 String slicing
// It Is creating a substring from a portion of another string
// String.slice(start, end)

// const fullName = "Mohita Chourase";

// let firstName = fullName.slice(0, 6);
// let lastName = fullName.slice(7);
// console.log(firstName);
// console.log(lastName);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1)
// console.log(firstChar);
// console.log(lastChar);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);
// console.log(lastName);

//* 
// const email = "mohitaaaa28@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@"));
// console.log(username);
// console.log(extension);


//16. #Method Chaining = Calling one method after another
//                       in one continuous line of code 
// let username = window.prompt("Enter your username");

// ------- NO METHOD CHAINING ---------

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// // console.log(username);

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;
// console.log(username);


// ------- METHOD CHAINING ---------

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);
   

//17. #Logical Operator = used to combine or manipulate boolean values
//                        (true or false)
//
//                        AND = &&
//                        OR = ||
//                        NOT = !

// const temp = 38;

// if (temp > 0 && temp <= 30) {
//     console.log("The weather is GOOD");
// }
// else{
//     console.log("The weather is BAD");
// }

// if (temp <= 0 || temp > 30) {
//   console.log("The weather is BAD");
// } else {
//   console.log("The weather is GOOD");
// }

// const isSunny = false;

// if (!isSunny) {
//   console.log("It is CLOUDY");
// } else {
//   console.log("It is SUNNY");
// }


// 18. ## Strict equality
//  =   - assignment operator
//  ==  - comparison operator (compare if values are equal)
//  === - strict equality operator (compare if values & datatype are equal)
//  !=  - inequality operator 
//  !== - strict inequality operator 

// const PI = 3.14;

// if (PI=="3.14") {
//     console.log("This is PI");
// } else {
//     console.log("This is NOT PI");
// }
/**This is PI */

// if (PI==="3.14") {
//     console.log("This is PI");
// } else {
//     console.log("This is NOT PI");
// }
/**This is NOT PI */

// if (PI != "3.14") {
//     console.log("This is NOT PI");
// } else {
//     console.log("This is PI");
// }
/**This is PI */

// if (PI !== "3.14") {
//     console.log("This is NOT PI");
// } else {
//     console.log("This is PI");
// }
/**This is NOT PI */

/**19. ## While loops */
// while loop = repeat some code WHILE some condition is true

// let username = "";

// if (username === "") {
//     console.log(`You didn't enter your name`);
// } else {
//     console.log(`Hello ${username}`);
// }

// while (username === "" || username === null) {
//     username = window.prompt(`Enter Your Name`);
// }
// console.log(`Hello ${username}`);

// do {
//   username = window.prompt(`Enter Your Name`);
// } while (username === "" || username === null);
// console.log(`Hello ${username}`);

// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);

//   if (username === "myUsername" && password === "myPassword") {
//     loggedIn= true;
//     console.log("You've successfully logged In");
//   } else {
//     console.log("Invalid credentials! Please try again");
//   }
// }

// loggedIn = true;
// do {
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);

//   if (username === "myUsername" && password === "myPassword") {
//     loggedIn= true;
//     console.log("You've successfully logged In");
//   } else {
//     console.log("Invalid credentials! Please try again");
//   }
// }while (!loggedIn)

/**20. ## For loops */
// for loop = repeat some code a LIMITED amount of times

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

/**ODD NUMBERS */
// for (let i = 1; i <= 10; i+=2) {
//     console.log(i);
// }

/**EVEN NUMBERS */
// for (let i = 2; i <= 10; i+=2) {
//     console.log(i);
// }

// for (let i = 10; i > 0 ; i--) {
//     console.log(i);
// }
// console.log("HAPPY NEW YEAR!");

// for (let i = 1; i <= 20; i++) {
//   if (i == 13) {
//     // continue;
//     break;
//   } else {
//     console.log(i);
//   }
// }


//21. ## NUMBER GUESSING GAME
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum-minNum + 1)) + minNum

// let attempts = 0;
// let guess;
// let running = true;

// while (running){

//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//     guess = Number(guess);

//     if (isNaN(guess)) {
//         window.alert("Please enter a valid number");
//     } 
//     else if(guess < minNum || guess > maxNum) {
//         window.alert("Please enter a valid number");
//     }
//     else{
//         attempts++;
//         if (guess < answer) {
//             window.alert("Too Low!! TRY AGAIN!");
//         } 
//         else if(guess > answer) {
//             window.alert("Too HIGH!! TRY AGAIN!");
//         }
//         else{
//             window.alert(`CORRECT!! The answer was ${answer}. It took you ${attempts} attempts. `);
//                 running = false;
//         }
//     }
// }

/**CORRECT!! The answer was 71. It took you 11 attempts.  */