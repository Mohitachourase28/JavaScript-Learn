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

