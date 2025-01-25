# JavaScript Practice Projects

## [01_jsPract1](./01_jsPract1/)

# JavaScript Basics

This project covers the foundational concepts of JavaScript including variables, data types, arithmetic operations, and user input handling.

## Key Concepts:

- **JavaScript Template Literals**: Used for string interpolation.
- **Window Methods**:
  - `window.alert()`: Displays an alert to the user.
  - `window.prompt()`: Collects user input through a prompt dialog.
- **DOM Manipulation**:
  - `getElementById`: Accesses HTML elements by their ID.
  - `textContent`: Updates the text content of elements.
  
## Concepts Studied:

- **Variables & Data Types**: Numbers, strings, and `const` variables.
- **Arithmetic Operators**: `+`, `-`, `*`, `/`.
- **Operator Precedence**: The order in which operations are executed.
- **Type Conversion**: Converting values between different types.
  
## Math Object Methods:

- `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.trunc()`, `Math.pow()`, `Math.sqrt()`, `Math.log()`
- Trigonometric Methods: `Math.sin()`, `Math.cos()`, `Math.tan()`
- Other Methods: `Math.abs()`, `Math.sign()`


## [02_jsPract2](./02_jsPract2/script.js)

# Random Number Generator and JavaScript Basics  

This project is a collection of JavaScript concepts and examples I studied and implemented to strengthen my understanding of the language. Here's an overview of the topics covered:  

---

## Features  

### 1. **Random Number Generator**  
- Implemented a function that generates a random number using a specified `min` and `max` value.  

---

### 2. **If Statements**  
- Learned how to use `if` statements to execute code based on conditions.  
- Practiced examples of handling scenarios where:  
  - A condition is true, and specific code is executed.  
  - If not, alternate code is executed.  

---

### 3. **Checkbox `.checked` Property**  
- Studied the `.checked` property in HTML. This property determines whether a checkbox or radio button element is checked.  
- Implemented a **payment modes** example where users could select their payment method (Visa, MasterCard, or PayPal).  

---

### 4. **Ternary Operator**  
- Explored the ternary operator, a shortcut for `if...else` statements.  
- Syntax:  
  ```javascript
  condition ? codeIfTrue : codeIfFalse;

## [03_jsPract3](./03_jsPract3)
---
## Topics Covered  

### 1. **String Slicing**  
- Studied how to create substrings using the `String.slice(start, end)` method.  
- Practiced examples to extract specific parts of a string.  

---

### 2. **Method Chaining**  
- Learned about **method chaining**—calling multiple methods in a single continuous line of code.  
- Compared using method chaining and not using it to observe differences in code readability and efficiency.  

---

### 3. **Logical Operators**  
- Explored operators used to combine or manipulate boolean values (`true` or `false`):  
  - **AND (`&&`)**: All conditions must be true.  
  - **OR (`||`)**: At least one condition must be true.  
  - **NOT (`!`)**: Negates a boolean value.  
- Practiced examples to solidify understanding.  

---

### 4. **Equality and Comparison Operators**  
- Studied the following operators with examples:  
  - `=`: Assignment operator (assigns a value to a variable).  
  - `==`: Comparison operator (checks if values are equal).  
  - `===`: Strict equality operator (checks if values and data types are equal).  
  - `!=`: Inequality operator (checks if values are not equal).  
  - `!==`: Strict inequality operator (checks if values and data types are not equal).  

---

### 5. **Loops**  
- Explored different types of loops for repeating code:  
  - **While Loop**: Repeats code as long as a condition is true.  
  - **Do-While Loop**: Executes code at least once, then repeats while the condition is true.  
  - **For Loop**: Repeats code a limited number of times.  
- Practiced with various examples to understand their behavior and use cases.  

---

### 6. **Number Guessing Game**  
- Created a fun and interactive **Number Guessing Game** that incorporates:  
  - Random number generation.  
  - Conditional statements.  
  - Loops for repeated guesses.  
  - Logical and comparison operators for game logic.  

---

## Lessons Learned  
- The significance of slicing and chaining methods to manipulate and enhance strings efficiently.  
- Logical operators and equality operators provide the backbone of decision-making in JavaScript.  
- Loops are essential for executing repetitive tasks effectively.  
- Building projects like the **Number Guessing Game** helps apply concepts in a practical and engaging way.  

---

## [04_jsPract4](./04_jsPract4/)
## Topics Covered  

### 1. **Functions**  
- Studied **functions** as reusable sections of code.  
- Key points:  
  - Functions can be declared once and used multiple times.  
  - To execute a function, you need to call it.  
- Practiced examples to understand how to:  
  - Define a function.  
  - Pass parameters and return values.  

---

### 2. **Variable Scope**  
- Explored **variable scope**, which defines where variables are recognized and accessible:  
  - **Local Scope**: Variables declared inside a function or block are only accessible within that function or block.  
  - **Global Scope**: Variables declared outside any function or block are accessible throughout the program.  
- Practiced examples to differentiate between local and global variables.  

---

### 3. **Temperature Conversion Program**  
- Created a program to convert temperatures between Celsius and Fahrenheit using functions.  
- Demonstrates practical use of functions, variable scope, and conditional logic.  

---

### 4. **Arrays**  
- Learned about **arrays**, which are structures that can hold multiple values.  
- Practiced array methods to manipulate data:  
  - **push()**: Adds an element to the end of an array.  
  - **pop()**: Removes the last element of an array.  
  - **unshift()**: Adds an element to the beginning of an array.  
  - **shift()**: Removes the first element of an array.  
- Implemented examples to understand array operations.  

---

### 5. **Spread and Rest Operators**  
- Studied the **spread operator (`...`)**:  
  - Expands an array or string into individual elements.  
  - Example:  
    ```javascript  
    const numbers = [1, 2, 3];  
    console.log(...numbers); // Output: 1 2 3  
    ```  
- Studied the **rest parameter (`...rest`)**:  
  - Bundles multiple arguments into an array.  
  - Example:  
    ```javascript  
    function sum(...rest) {  
      return rest.reduce((total, num) => total + num, 0);  
    }  
    console.log(sum(1, 2, 3)); // Output: 6  
    ```  
- Compared the use of spread and rest operators and practiced examples to understand their differences.  

---

## Lessons Learned  
- Functions and variable scope help create clean, modular, and reusable code.  
- Arrays provide a flexible way to store and manipulate multiple values.  
- Spread and rest operators enhance code readability and efficiency when working with arrays and arguments.  
- The **Temperature Conversion Program** reinforced how to apply these concepts in solving real-world problems.  

---

## [05_jsPract5](./05_jsPract5/)
## Topics Covered  

### 1. **Dice Roller Program**  
- Created a program to simulate rolling a dice using a **for loop**.  
- The program generates a random number for each roll and repeats the process for a specified number of rolls.  

---

### 2. **Random Password Generator**  
- Built a **Random Password Generator** using a **function**.  
- Features:  
  - Generates passwords with random characters from a specified set (letters, numbers, symbols).  
  - Adjustable password length for customization.  

---

### 3. **Callback Functions**  
- Studied **callbacks**, which are functions passed as arguments to other functions.  
- Used to handle asynchronous operations, such as:  
  1. **Reading a file**: Process file content after reading is complete.  
  2. **Network requests**: Perform actions after data is fetched from a server.  
  3. **Interacting with databases**: Execute further logic after retrieving or updating data.  
- Example:  
  ```javascript  
  function fetchData(callback) {  
    console.log("Fetching data...");  
    setTimeout(() => {  
      console.log("Data fetched.");  
      callback();  
    }, 2000);  
  }  
  
  function processData() {  
    console.log("Processing data...");  
  }  
  
  fetchData(processData);  
  # JavaScript Concepts: Dice Roller, Password Generator, and Callbacks  

This project showcases my journey in learning advanced JavaScript concepts by building practical programs, such as a **Dice Roller** and a **Random Password Generator**, while exploring callback functions and array methods.  

---

## Topics Covered  

### 1. **Dice Roller Program**  
- Simulated rolling a dice using a **for loop**.  
- Generates a random number for each roll and repeats the process based on user input for the number of rolls.  

---

### 2. **Random Password Generator**  
- Developed a **Random Password Generator** with a customizable **function**.  
- Features:  
  - Generates passwords using random characters from a specified set (letters, numbers, symbols).  
  - Adjustable password length for personalized security needs.  

---

### 3. **Callback Functions**  
- Learned about **callbacks**, which are functions passed as arguments to other functions for handling asynchronous operations.  
- Key use cases explored:  
  1. **Reading a file**: Processing file content after reading is complete.  
  2. **Network requests**: Executing actions after receiving server data.  
  3. **Database interactions**: Applying logic post-retrieval or update of data.  

#### Example:  
```javascript  
function fetchData(callback) {  
  console.log("Fetching data...");  
  setTimeout(() => {  
    console.log("Data fetched.");  
    callback();  
  }, 2000);  
}  
  
function processData() {  
  console.log("Processing data...");  
}  
  
fetchData(processData);  
```  

---

### 4. **Array Methods**  

#### **`forEach()` Method**  
- Learned how to iterate over array elements using the `forEach()` method.  
- **Syntax**:  
  ```javascript  
  array.forEach(callback);  
  ```  
- Parameters provided by the `forEach()` callback:  
  - `element`: The current array element.  
  - `index`: The index of the current element.  
  - `array`: The entire array being traversed.  

#### Example:  
```javascript  
const numbers = [1, 2, 3, 4];  
numbers.forEach((num, index) => {  
  console.log(`Element: ${num}, Index: ${index}`);  
});  
```  

---

#### **`.map()` Method**  
- Studied the `map()` method, which:  
  - Accepts a callback function.  
  - Applies the callback to each element of an array.  
  - Returns a new array with transformed elements.  

#### Example:  
```javascript  
const numbers = [1, 2, 3, 4];  
const squared = numbers.map((num) => num * num);  
console.log(squared); // Output: [1, 4, 9, 16]  
```  

---

## Lessons Learned  
- Loops and functions like `forEach()` and `map()` simplify working with arrays.  
- Callback functions provide a way to handle asynchronous behavior in JavaScript.  
- Building programs like the Dice Roller and Random Password Generator helps solidify foundational concepts and practice real-world applications.

---

## [06_jsPract6](./06_jsPract6/)
# JavaScript Advanced Concepts: Filter, Reduce, Function Expressions, and More

This project highlights my learning journey through advanced JavaScript concepts, such as array methods (`filter` and `reduce`), function expressions, callbacks, higher-order functions, closures, event listeners, arrow functions, and objects. Each topic includes examples to demonstrate their practical usage.

---

## Topics Covered

### 1. **`.filter()` Method**
- Creates a new array by filtering out elements based on a condition provided in a callback function.

#### Example:
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords); // Output: ["banana", "cherry"]
```

---

### 2. **`.reduce()` Method**
- Reduces the elements of an array into a single value by applying a callback function iteratively.

#### Example:
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); // Output: 24
```

---

### 3. **Function Expressions**

#### Function Declaration
- Defines a reusable block of code that performs a specific task.

#### Example:
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
```

#### Function Expression
- A way to define functions as values or variables.

#### Example:
```javascript
const greet = function(name) {
  return `Hi, ${name}!`;
};
console.log(greet("Bob")); // Output: Hi, Bob!
```

---

### 4. **Other Key Concepts**

#### **Callbacks in Asynchronous Operations**
- Functions passed as arguments to handle operations that take time to complete.

#### Example:
```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched.");
    callback();
  }, 2000);
}
function processData() {
  console.log("Processing data...");
}
fetchData(processData);
```

#### **Higher-Order Functions**
- Functions that accept other functions as arguments or return them as results.

#### Example:
```javascript
function higherOrder(func) {
  func();
}
higherOrder(() => console.log("Hello from a higher-order function!"));
```

#### **Closures**
- Functions that "close over" their lexical environment, retaining access to variables defined outside their scope.

#### Example:
```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}
const closure = outerFunction("outside");
closure("inside"); // Output: Outer: outside, Inner: inside
```

#### **Event Listeners**
- Functions that respond to user interactions or events.

#### Example:
```javascript
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

---

### 5. **Arrow Functions**
- A concise way to write function expressions. Ideal for simple functions used once.

#### Syntax:
```javascript
(parameters) => some code
```

#### Example:
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Charlie")); // Output: Hello, Charlie!
```

---

### 6. **Objects**
- A collection of related properties and/or methods. Can represent real-world entities like people, products, or places.

#### Example:
```javascript
const person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
};
person.greet(); // Output: Hi, I'm Alice and I'm 30 years old.

const product = {
  name: "Laptop",
  price: 1000,
  details() {
    console.log(`${this.name} costs $${this.price}.`);
  }
};
product.details(); // Output: Laptop costs $1000.
```

---

## Lessons Learned
- Array methods like `filter` and `reduce` are powerful tools for processing and transforming data.
- Function declarations and expressions allow for modular, reusable code.
- Concepts like callbacks, higher-order functions, and closures are foundational for handling asynchronous behavior and creating flexible code.
- Arrow functions provide a succinct syntax, especially for one-liners.
- Objects help organize data and behavior in a structured way.
---

## [07_jsPract7](./07_jsPract7/)
# Topics Studied: JavaScript Concepts with Examples

## `this` Keyword
- The `this` keyword in JavaScript is a reference to the object where it is used. The value of `this` depends on the immediate context.

### Example:
```javascript
const person = {
  name: 'Alice',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: Hello, my name is Alice
```

- Note: The `this` keyword does **not** work with arrow functions because arrow functions do not have their own `this`. Instead, they inherit `this` from their surrounding lexical scope.

### Example with Arrow Function:
```javascript
const person = {
  name: 'Bob',
  greet: () => {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: Hello, my name is undefined
```

## Constructor
- A constructor is a special method used to define properties and methods of objects in a class.

### Example:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person('Charlie', 25);
person1.greet(); // Output: Hi, I'm Charlie and I'm 25 years old.
```

## Class
- Classes, introduced in ES6, provide a structured and cleaner way to create objects compared to traditional constructor functions.
- Classes support encapsulation, inheritance, and the `static` keyword.

### Example:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const animal = new Animal('Dog');
animal.speak(); // Output: Dog makes a noise.
```

### Static Keyword
- The `static` keyword defines properties or methods that belong to the class itself rather than the objects created from the class.

### Example:
```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // Output: 5
```

## Inheritance
- Inheritance allows a new class to inherit properties and methods from an existing class. This promotes code reusability.

### Example:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy');
dog.speak(); // Output: Buddy barks.
```
---

## [08_jsPract8](./08_jsPract8/script.js)
# Topics Studied: Advanced JavaScript Concepts with Examples

## `super` Keyword
- The `super` keyword is used in classes to:
  1. Call the constructor of the parent class.
  2. Access the properties and methods of a parent (superclass).

### Example:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    super.speak(); // Call the parent class method
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak();
// Output:
// Buddy makes a noise.
// Buddy barks.
```

## `this` vs `super`
- `this`: Refers to the current object instance.
- `super`: Refers to the parent class or its methods and constructor.

### Example:
```javascript
class Parent {
  constructor() {
    this.parentProperty = 'Parent Property';
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.childProperty = 'Child Property';
    console.log(this.parentProperty); // Access parent property using `this`
  }
}

const child = new Child();
// Output: Parent Property
```

## Getters and Setters
- Getters: Special methods to make a property **readable**.
- Setters: Special methods to make a property **writeable**.
  - Useful for validating or modifying values during read/write operations.

### Example:
```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length > 0) {
      this._name = value;
    } else {
      console.log('Name cannot be empty.');
    }
  }
}

const person = new Person('Alice');
console.log(person.name); // Output: Alice
person.name = 'Bob';
console.log(person.name); // Output: Bob
person.name = ''; // Output: Name cannot be empty.
```

## Destructuring
- Destructuring allows you to extract values from arrays or objects and assign them to variables in a convenient way.

### Array Destructuring:
- Use `[]` for array destructuring.

### Example 1: Swap the Values of Two Variables
```javascript
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b); // Output: 10 5
```

### Example 2: Swap Two Elements in an Array
```javascript
const arr = [1, 2, 3];
[arr[0], arr[2]] = [arr[2], arr[0]];
console.log(arr); // Output: [3, 2, 1]
```

### Example 3: Assign Array Elements to Variables
```javascript
const numbers = [10, 20, 30];
const [x, y, z] = numbers;
console.log(x, y, z); // Output: 10 20 30
```

### Object Destructuring:
- Use `{}` for object destructuring.

### Example 4: Extract Values from Objects
```javascript
const user = { name: 'Alice', age: 25 };
const { name, age } = user;
console.log(name, age); // Output: Alice 25
```

### Example 5: Destructure in Function Parameters
```javascript
const printDetails = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};

const person = { name: 'Bob', age: 30 };
printDetails(person); // Output: Name: Bob, Age: 30
```
---

## [09_jsPract9](./09_jsPract9/script.js)
# Topics Studied: JavaScript Concepts with Examples

## Nested Objects
- Objects can contain other objects as properties.
- Useful for representing more complex data structures.

### Example 1: Person Object with Address and ContactInfo
```javascript
const person = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Springfield",
    zip: "12345"
  },
  contactInfo: {
    phone: "123-456-7890",
    email: "alice@example.com"
  }
};

console.log(person.address.city); // Output: Springfield
console.log(person.contactInfo.phone); // Output: 123-456-7890
```

### Example 2: Shopping Cart with Nested Products
```javascript
const shoppingCart = {
  items: [
    { name: "Keyboard", price: 30 },
    { name: "Mouse", price: 20 },
    { name: "Monitor", price: 150 }
  ]
};

console.log(shoppingCart.items[1].name); // Output: Mouse
```

## Arrays of Objects and Methods
- Methods like `forEach()`, `map()`, `filter()`, `reduce()`, and `sort()` are used to manipulate arrays of objects.

### Example 1: Using `forEach()`
```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

users.forEach(user => console.log(user.name));
// Output:
// Alice
// Bob
```

### Example 2: Using `map()`
```javascript
const names = users.map(user => user.name);
console.log(names); // Output: ["Alice", "Bob"]
```

### Example 3: Using `filter()`
```javascript
const adults = users.filter(user => user.age >= 30);
console.log(adults); // Output: [{ name: "Bob", age: 30 }]
```

### Example 4: Using `reduce()`
```javascript
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge); // Output: 55
```

### Example 5: Using `sort()`
```javascript
const sortedUsers = users.sort((a, b) => a.age - b.age);
console.log(sortedUsers);
// Output: [ { name: "Alice", age: 25 }, { name: "Bob", age: 30 } ]
```

## Shuffle an Array - Fisher-Yates Algorithm
```javascript
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const arr = [1, 2, 3, 4, 5];
console.log(shuffleArray(arr));
```

## Date Objects
- Used to handle dates and times.

### Example:
```javascript
const now = new Date();
console.log(now.toDateString()); // Output: Current date in readable format

const customDate = new Date("2025-01-01");
console.log(customDate.toISOString()); // Output: 2025-01-01T00:00:00.000Z
```

## Closure
- A function defined inside another function.
- The inner function can access variables in the outer function.

### Example:
```javascript
function outerFunction() {
  let count = 0;

  return function innerFunction() {
    count++;
    console.log(count);
  };
}

const counter = outerFunction();
counter(); // Output: 1
counter(); // Output: 2
```

## `setTimeout()`
- Schedules a function to execute after a delay (in milliseconds).

### Example:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("End");
// Output:
// Start
// End
// Executed after 2 seconds
```
---

## [10_jsPract10/script.js](./10_jsPract10/script.js)

# Topics Studied: JavaScript Concepts with Examples

## Digital Clock Program
- A program that displays the current time and updates every second.

### Example:
```javascript
function displayTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  console.log(`${hours}:${minutes}:${seconds}`);
}
setInterval(displayTime, 1000);
```

## Stopwatch Program
- A simple stopwatch program to track elapsed time.

### Example:
```javascript
let startTime, intervalId;

function startStopwatch() {
  startTime = Date.now();
  intervalId = setInterval(() => {
    const elapsed = Date.now() - startTime;
    console.log(`Elapsed Time: ${(elapsed / 1000).toFixed(2)} seconds`);
  }, 1000);
}

function stopStopwatch() {
  clearInterval(intervalId);
  console.log("Stopwatch stopped.");
}

startStopwatch(); // Call to start the stopwatch
// Call stopStopwatch() to stop it.
```

## ES6 Modules
- Introduced in ECMAScript 2015.
- Used for writing reusable code.

### Example:
**math.js:**
```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

**main.js:**
```javascript
import { add, subtract } from './math.js';

console.log(add(5, 3));      // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

## Synchronous and Asynchronous Code
### Synchronous:
- Executes line by line in sequence.

### Example:
```javascript
console.log("Start");
console.log("End");
// Output:
// Start
// End
```

### Asynchronous:
- Allows multiple operations to occur concurrently.

### Example:
```javascript
console.log("Start");
setTimeout(() => {
  console.log("Async operation completed");
}, 2000);
console.log("End");
// Output:
// Start
// End
// Async operation completed
```

## Error Handling
- Handle runtime errors using `try`, `catch`, and `finally`.

### Example:
```javascript
try {
  console.log(x); // x is not defined
} catch (error) {
  console.error("Error caught:", error.message);
} finally {
  console.log("This always executes");
}
```

## Calculator Program
- Perform basic arithmetic operations.

### Example:
```javascript
function calculator(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(5, 3, '+')); // Output: 8
console.log(calculator(5, 3, '*')); // Output: 15
```

## DOM (Document Object Model)
- Represents the web page as an object tree.
- JavaScript interacts with the DOM to dynamically change content, structure, and style.

### Example:
```html
<div id="content">Hello, World!</div>
<script>
  const content = document.getElementById("content");
  content.textContent = "Hello, DOM!";
</script>
```

## Element Selectors
- Methods to select HTML elements from the DOM.

### Examples:
1. `document.getElementById()`
   ```javascript
   const element = document.getElementById("header");
   console.log(element);
   ```

2. `document.getElementsByClassName()`
   ```javascript
   const elements = document.getElementsByClassName("item");
   console.log(elements[0]);
   ```

3. `document.getElementsByTagName()`
   ```javascript
   const elements = document.getElementsByTagName("p");
   console.log(elements);
   ```

4. `document.querySelector()`
   ```javascript
   const element = document.querySelector(".main .item");
   console.log(element);
   ```

5. `document.querySelectorAll()`
   ```javascript
   const elements = document.querySelectorAll(".item");
   elements.forEach(el => console.log(el));
---

## [11_jsPract11](./11_jsPract11/script.js)
# DOM Navigation and Events

This document covers the topics I studied, including examples, on navigating the DOM, manipulating HTML elements, and handling events in JavaScript.

---

## 1. **DOM Navigation**
The process of navigating through the structure of an HTML document using JavaScript.

### Methods for Navigation:
- `.firstElementChild` - Selects the first child element.
- `.lastElementChild` - Selects the last child element.
- `.nextElementSibling` - Selects the next sibling element.
- `.previousElementSibling` - Selects the previous sibling element.
- `.parentElement` - Selects the parent element.
- `.children` - Selects all child elements.

### Example:
```javascript
const fruitsList = document.getElementById("fruits");
console.log(fruitsList.firstElementChild.textContent); // Logs the first child's text content
console.log(fruitsList.lastElementChild.textContent);  // Logs the last child's text content
```

---

## 2. **Adding & Changing HTML**

### Steps to Add an Element:
1. **Create the Element**:
   ```javascript
   const newListItem = document.createElement("li");
   ```
2. **Add Attributes/Properties**:
   ```javascript
   newListItem.textContent = "Coconut";
   ```
3. **Append Element to DOM**:
   ```javascript
   document.getElementById("fruits").append(newListItem);
   ```
4. **Remove HTML Element**:
   ```javascript
   document.getElementById("fruits").removeChild(newListItem);
   ```

---

## 3. **Mouse Events 🖱**

Event listeners are used to make web pages interactive by responding to mouse actions like clicks, hovering, etc.

### Common Events:
- `click`
- `mouseover`
- `mouseout`

### Example:
```javascript
const button = document.querySelector("button");
button.addEventListener("click", () => {
    alert("Button clicked!");
});
```

---

## 4. **Key Events ⌨**

Key events allow capturing user input through the keyboard.

### Common Events:
- `keydown` - Fires when a key is pressed.
- `keyup` - Fires when a key is released.

### Example:
```javascript
document.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});
```

---

## 5. **Hide/Show HTML**

JavaScript can dynamically hide or show elements on the page.

### Example:
```javascript
const element = document.getElementById("content");
const toggleButton = document.getElementById("toggle");

toggleButton.addEventListener("click", () => {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
});
```
---


## [12_jsPract12](./12_jsPract12/script.js)
# Learning Notes

## Topics Covered

### NodeList
- A **NodeList** is a static collection of HTML elements retrieved by methods such as `querySelectorAll()`.
- It is similar to an array but does not support array methods like `map()`, `filter()`, and `reduce()`.
- **Static Nature**: The NodeList does not update automatically to reflect changes in the DOM.

#### Example:
```javascript
const buttons = document.querySelectorAll('.btn');
console.log(buttons); // Static collection of elements with class 'btn'
```

---

### Adding HTML/CSS Properties
You can dynamically update the styles and properties of HTML elements using JavaScript.

#### Example:
```javascript
const heading = document.querySelector('h1');
heading.style.color = 'blue';
heading.style.fontSize = '2rem';
```

---

### Event Listeners
#### CLICK Event Listener
- Responds to user click actions on elements.

#### Example:
```javascript
const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    console.log('Button clicked!');
});
```

#### MOUSEOVER and MOUSEOUT Event Listeners
- Triggered when the mouse enters (`mouseover`) or leaves (`mouseout`) an element.

#### Example:
```javascript
const image = document.querySelector('.image');
image.addEventListener('mouseover', () => {
    image.style.opacity = '0.5';
});
image.addEventListener('mouseout', () => {
    image.style.opacity = '1';
});
```

---

### Adding and Appending Elements to the DOM
#### ADD an Element
- Create a new element and add content to it.

#### Example:
```javascript
const newButton = document.createElement('button');
newButton.textContent = 'Click Me';
```

#### APPEND Element to the DOM
- Add the newly created element to the document.

#### Example:
```javascript
const buttonsDiv = document.getElementById('buttons');
buttonsDiv.append(newButton);
```

---

### Removing an Element
- Remove a specific element from the DOM.

#### Example:
```javascript
buttonsDiv.removeChild(newButton); // Removes the button
```

---

### classList
- The `classList` property allows manipulation of an element's CSS classes.

#### Methods:
- **add()**: Add a new class.
- **remove()**: Remove an existing class.
- **toggle()**: Add/remove a class based on its presence.
- **replace()**: Replace an old class with a new one.
- **contains()**: Check if an element has a specific class.

#### Example:
```javascript
const box = document.querySelector('.box');
box.classList.add('highlight');
box.classList.toggle('hidden');
if (box.classList.contains('highlight')) {
    console.log('Box is highlighted!');
}
```

---

### Rock Paper Scissors Game
A simple interactive game created using JavaScript.

#### Example Code:
```javascript
const choices = ['rock', 'paper', 'scissors'];
const userChoice = 'rock';
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

if (userChoice === computerChoice) {
    console.log('It’s a tie!');
} else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
) {
    console.log('You win!');
} else {
    console.log('You lose!');
}
```

---

### Image Slider
A program that allows users to navigate through images using buttons.

#### Example Code:
```javascript
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let currentIndex = 0;

const imgElement = document.querySelector('.slider img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentIndex];
});
```

---

## Summary
- **NodeList**: Static collection for HTML elements.
- **Event Listeners**: Adding interactivity to web pages.
- **classList**: Efficiently manage CSS classes.
- **Rock Paper Scissors**: Fun game implementation.
- **Image Slider**: Navigable image carousel.

