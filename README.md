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