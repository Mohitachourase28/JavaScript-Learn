/**#66 09:30:00 NodeLists 📃
 * NodeList = Static collection of HTML elements by (id, class, element)
 *            Can be created by using querySelectorAll()
 *            Similar to an array, but no (map, filter, reduce)
 *            NodeList won't update to automatically reflect changes
 * 
let buttons = document.querySelectorAll(".myButtons");
console.log(buttons);// NodeList(4) 

// ADD HTML/CSS PROPERTIES
// buttons.forEach(button =>{
//     button.style.backgroundColor = "green";
//     button.textContent += "❤️";
// })

// CLICK event listener
// buttons.forEach(button => {
//     button.addEventListener("click", event =>{
//         event.target.style.backgroundColor = "tomato"
//     })
// })

// MOUSEOVER + MOUSEOUT event listener
// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 45%)";
//     })
// });
// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     })
// });

// ADD AN ELEMENT 
const newButton = document.createElement("button"); // STEP 1
newButton.textContent = "Button 5"; // STEP 2
newButton.classList = "myButtons"; // it adds the properties of CSS

// STEP 3 APPEND ELEMENT TO DOM
document.body.appendChild(newButton);

// to add the the button in buttons dom
buttons = document.querySelectorAll(".myButtons");
console.log(buttons); //NodeList(5) 

// REMOVE AN ELEMENT 
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
});
 */

/**#67 09:43:21 classList 🧾 
 * classList = Element property in JavaScript used to interact
 *             with an element's list of classes (CSS classes)
 *             Allows you to make reusable classes for many elements
 *             across your webpage.
 * 
 *  add()
 *  remove()
 *  toggle(Remove if present, Add if not)
 *  replace(oldClass, newClass)
 *  contains()

const myH1 =document.getElementById("myH1");
const myButton = document.getElementById("myButton");
// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", event =>{
//     event.target.classList.add("hover");
// })
// myButton.addEventListener("mouseout", event =>{
//     event.target.classList.remove("hover");
// })

// myButton.addEventListener("mouseover", event =>{
//     event.target.classList.toggle("hover");
// })
// myButton.addEventListener("mouseout", event =>{
//     event.target.classList.toggle("hover");
// })

// replace(oldClass, newClass)
myH1.classList.add("enabled")
myButton.classList.add("enabled");
myButton.addEventListener("click", event =>{
    //contains()
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "😒";
    } else {
        event.target.classList.replace("enabled","disabled");
    }
})

myH1.addEventListener("click", event =>{
    //contains()
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "😒";
    } else {
        event.target.classList.replace("enabled","disabled");
    }
})

//#2
const buttons = document.querySelectorAll(".myButtons");
console.log(buttons);
buttons.forEach(button =>{
    button.classList.add("enabled")
})
buttons.forEach(button =>{
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover")
    });
});
buttons.forEach(button =>{
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover")
    });
});
buttons.forEach(button =>{
    button.addEventListener("click", event => {

        if (event.target.classList.contains("disabled")) {
            event.target.textContent += "🥱"; 
        } else {
            event.target.classList.replace("enabled","disabled");
        }
    });
});
*/

/**#68 09:59:20 ⭐ Rock Paper Scissors 👊 
const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  // console.log(computerChoice);
  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissor" ? "YOU WIN!" : "YOU LOSE";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE";
        break;
      case "scissor":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = `RESULT: ${result}`;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = playerScore;
      break;
  }
}
*/

/**#69 10:18:14 ⭐ Image Slider 🖼️ */
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000)
    } 
    console.log(intervalId);
}

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0; 
    } 
    else if (index < 0) {
        slideIndex = slides.length - 1;
    } {
        
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide")
}

function prevSlide(){
    clearInterval(intervalId)
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

