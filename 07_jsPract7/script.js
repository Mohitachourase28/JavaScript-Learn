/**#38 05:07:40 What is THIS 👈
 * this = reference to the object where THIS is used
 *        (the object depends on the immediate context)
 *        person.name = this.name
 * 
 *        this keyword doesn't work with arrow function

const person1 = {
    firstName: "Mohita",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi! I am ${this.firstName}`)}, 
    eat: function(){console.log(`${this.firstName} is eating ${this.favFood}!!`)}, 
}

const person2 = {
    firstName: "Sakshi",
    favFood: "Burger",
    sayHello: function(){console.log(`Hi! I am ${this.firstName}`)}, 
    eat: function(){console.log(`${this.firstName} is eating ${this.favFood}!!`)}, 
}

// person1.sayHello();
person1.eat();
person2.eat();
*/

/**#39 05:12:07 Constructors 🛠
 * constructor = special method for defining the 
 *               properties and methods of objects


function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Ford", "Mustang", 2024, "Black");
const car2 = new Car("mercedes", "benz", 2025, "Black");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();
console.log("");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();
console.log("");
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car3.drive();
*/

/**#40 05:17:38 Classes 🏭
 * class = (ES6 feature) provides a more structured and cleaner way to 
 *         work with objects compared to traditional constructor functions 
 *         ex. static keyword, encapsulation, inheritance

//constructor
function Product(name, price){
    this.name = name;
    this.price = price;
    this.displayProduct = function(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    this.calculateTotal = function(salesTax){
        return this.price + (this.price * salesTax)
    }
}
const salesTax = 0.05;
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.59);
const product3 = new Product("Socks", 10.99);
product1.displayProduct();
const totalPrice = product1.calculateTotal(salesTax);
console.log(totalPrice);

// classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax){
    return this.price + (this.price * salesTax);
  }
}
const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.59);
const product3 = new Product("Socks", 10.99);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const totalPrice1 = product1.calculateTotal(salesTax);
const totalPrice2 = product2.calculateTotal(salesTax);
const totalPrice3 = product3.calculateTotal(salesTax);

console.log(`Price of Product1 is (with tax): $${totalPrice1}`);
console.log(`Price of Product2 is (with tax): $${totalPrice2}`);
console.log(`Price of Product3 is (with tax): $${totalPrice3}`);

const overall = totalPrice1+totalPrice2+totalPrice3;
console.log(`Total purchase: $${overall.toFixed(2)}`);
 */

/**#41 05:23:47 STATIC keyword ⚡
 * static = keyword that defines properties or methods that belong
 *          to a class itself rather than the object created
 *          from that class (class owns anything static, not the objects)

class MathUtil{
  static PI = 3.14159;

  static getDiameter(radius){
    return radius * 2;
  }

  static getCircumference(radius){
    return 2 * this.PI * radius;
  }

  static getArea(radius){
    return this.PI * radius * radius;
  }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

//
class User{
  static userCount = 0;

  constructor(username){
    this.username = username;
    User.userCount++;
  }

  static getUserCount(){
    console.log(`There are ${User.userCount} users`);
    
  }

  //Method
  sayHello(){
    console.log(`Hello, My username is ${this.username}`);
  }
}

const user1 = new User("Spongebob");
const user2 = new User("Mohita");
const user3 = new User("Khushi");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
User.getUserCount();
user1.sayHello();
user2.sayHello();
user3.sayHello();
 */

/**#42 05:31:50 Inheritance 🐇
 * inheritance = allows a new class to inherit properties and methods
 *               from an existing class (parent -> child)
 *               help with code reusability

class Animal{
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`);
  }

  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal{
  name = "Rabbit";
  run(){
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal{
  name = "Fish";

  swim(){
    console.log(`This ${this.name} is swimming`);
  }
}

class Hawk extends Animal{
  name = "Hawk";

  fly(){
    console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit);
console.log(fish);
console.log(hawk);

rabbit.run();
fish.swim();
hawk.fly(); 
*/