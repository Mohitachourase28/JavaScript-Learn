/**#61 08:32:04 DOM navigation 🧭
 * DOM Navigation = The process of navigating through the structure
 *                  of an HTML document using JavaScript.
 * 
 *#1 .firstElementChild
 * .lastElementChild
 * .nextElementSibling
 * .previousElementSibling
 * .parentElement
 * .children

//#1 ----------- .firstElementChild----------
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "Pink";
 
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "pink";
});

//#2 ----------- .lastElementChild----------
const element = document.getElementById("dairy");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "Pink";

//#3 ----------- .nextElementSibling ----------
const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "Pink";

//#4 ----------- .previousElementSibling ----------
const element = document.getElementById("curd");
const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = "Pink";

//#5 ----------- .parentElement ----------
const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "Pink";

//#6 ----------- .children ----------
const element = document.getElementById("fruits");
const children = element.children;
Array.from(children).forEach(child =>{
    child.style.backgroundColor = "Pink";
})
*/

/**#62 08:47:31 Add & change HTML 🛠️
// ----------- EXAMPLE 3 <li> ----------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "pink";
newListItem.style.fontSize = "2rem"

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);

//if li don't have id
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

//if li don't have id
// const listItem = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem , listItem[0]);

// STEP 4 REMOVE HTML ELEMENT
// document.body.removeChild(newListItem);

//if li don't have id
document.getElementById("fruits").removeChild(newListItem);

// ----------- EXAMPLE 2 <li> ----------
// STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I Like Pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);

// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2)

//if they don't have id then
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

// STEP 4 REMOVE HTML ELEMENT
// document.body.removeChild(newH1);

//with id in html and line 93 if we try to remove it, doesn't work
//cause it's in box1
// document.getElementById("box1").append(newH1);

//instead of this - document.body.removeChild(newH1);
//we'll use this and hola it worked!! -|
// document.getElementById("box1").removeChild(newH1);
*/

/**#63 09:03:03 Mouse events 🖱 
 * eventListener = Listen for specific events to create interactive web pages
 *                 events: click, mouseover, mouseout
 *                 .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it! 🫨";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me! 😃";
});
*/

/**#64 09:13:33 Key events ⌨
 * eventListener = Listen for specific events to create interactive web pages
 *                 events: keydown, keyup
 *                 document.addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const moveAmount = 100;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{
    myBox.textContent = "🫨";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event =>{
    myBox.textContent = "😃";
    myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {

    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
      default:
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`
  } 
});
 */

/**#65 09:24:49 Hide/show HTML 🖼 
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", (event) => {
  if (myImg.style.visibility === "hidden") {
    myImg.style.visibility = "visible";
    myButton.textContent = "Hide";
  } else {
    myImg.style.visibility = "hidden";
    myButton.textContent = "Show";
  }
});
*/