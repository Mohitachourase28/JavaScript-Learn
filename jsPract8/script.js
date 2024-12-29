/**#43 05:38:53 SUPER keyword 🦸‍♂️
 * super = keyword is used in classes to call the constructor or 
 *         access the properties and methods of a parent (superclass)
 *         this = this object 
 *         super = the parent

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //method
    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("Bunny", 1 , 25);
const fish = new Fish("Dory", 2, 12);
const hawk = new Hawk("Hawk", 3 ,50);

console.log(rabbit);
console.log(fish);
console.log(hawk);
rabbit.run();
fish.swim();
hawk.fly();
*/

/**#44 05:48:14 Getters & Setters 📐
 * getter = special method that makes a property readable
 * setter = special method that makes a property writeable
 * 
 * validate and modify a value when reading/writing a property
//#1
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight; 
        } else {
            console.error("Height must be a positive number");
        }
    }

    get width() {
        return `${this._width.toFixed(1)} cm`;
    }

    get height() {
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)} cm^2`;
    }
}

const rectangle = new Rectangle(2, 5);

console.log(rectangle);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


//#2
class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("Invalid first name");
        }
    }

    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("Invalid last name");
        }
    }

    set age(newAge){
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Age must bw a non-negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstName+" "+this._lastName;
    }
}

const person = new Person("Mohita", "chourase", 20);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);
 */

/**#45 06:01:28 Destructuring 💥
 * destructuring = extract values from arrays and objects,
 *                 then assign them to variable in a convenient way
 *                 [] = to perform array destructuring
 *                 {} = to perform object destructuring  
 *                  
 *                  5 examples

// -----------EXAMPLE 1 ---------
// SNAP THE VALUE OF TWO  VARIABLES
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

// -----------EXAMPLE 2 ---------
// SNAP 2 ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors[0]);
console.log(colors[4]);

// -----------EXAMPLE 3 ---------
// ASSIGN ARRAY ELEMENTS TO VARIABLES
const colors = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// -----------EXAMPLE 4 ---------
// EXTRACT VALUES FROM OBJECTS
const person1 = {
    firstName: "Mohita",
    lastName: "Chourase",
    age: 20,
    job: "Chief",
}
const person2 = {
    firstName: "Khushi",
    lastName: "Chourase",
    age: 19,
}
const {firstName, lastName, age, job = "Unemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// -----------EXAMPLE 5 ---------
// DESTRUCTURE IN FUNCTION PARAMETERS
function displayPerson({firstName, lastName, age, job= "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`Job: ${job}`);
 
}
const person1 = {
    firstName: "Mohita",
    lastName: "Chourase",
    age: 20,
    job: "Chief",
}
const person2 = {
    firstName: "Khushi",
    lastName: "Chourase",
    age: 19,
}
displayPerson(person1);
displayPerson(person2);
*/