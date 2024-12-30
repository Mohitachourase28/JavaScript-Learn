/* RANDOM NUMBER GENERATOR
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);

// const myBtn = document.getElementById("myBtn");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myBtn.onclick = function(){
//     randomNum1 = Math.floor(Math.random()  * max)+ min;
//     randomNum2 = Math.floor(Math.random()  * max)+ min;
//     randomNum3 = Math.floor(Math.random()  * max)+ min;
//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// }

//## 10. If statements 
    IF STATEMENTS = If a condition is true, execute some code 
    if not, do something else

// let age = 13;
// if (age >= 18) {
//   console.log("user is adult");
// } else {
//   console.log("User is not adult");
// }

// let time = 13;
// if (time < 12) {
//     console.log("Good Morning"); 
// } else {
//     console.log("Good Afternoon");
// }

// let isStudent = false ;
// if (isStudent) {
//     console.log("Is Enrolled");
// } else {
//     console.log("Not Enrolled");
// }


// let age = 25;
// let hasLicense = false;

// if (age >= 18) {
//     console.log("Eligible for license");  

//     if (hasLicense) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }
// else{
//     console.log("Not Eligible"); 
// }

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const para = document.getElementById("myResult");

// mySubmit.onclick = function(){

//     age = myText.value;
//     age = Number(age);
//     if (age >= 100 ) {
//         para.textContent = `Too Old`;
//     } else if (age == 0) {
//         para.textContent = `you're just born`;
//     } else if (age >= 18) {
//         para.textContent = `old enough to enter this site`;
//     } else if (age < 0) {
//         para.textContent = `Age not possible`;
//     } else{
//         para.textContent = `You must be 18+!!`;
//     }
// }

//##11  CHECKED PROPERTY
    .checked = property that determines the checked state of an 
    HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmitBtn.onclick = function(){
    if (myCheckBox.checked) {
        subResult.textContent = `You are subscribed`
    } else {
        subResult.textContent = `You are NOT subscribed`
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with Master Card`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else {
        paymentResult.textContent = `You must select a Payment type`;
    }
}

// ternary Operator = a shortcut to if{} and else{} statements
                      helps to assign a variable based on a condition
                      condition ? codeIfTrue: codeIfFalse;

// let age = 21;
// let verify = age >= 18 ? "You are an adult" : "NOT adult";
// console.log(verify);

// let time = 16 /**4pm */
// let greeting = time < 12 ? "Good Morning": "Good Evening";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You are a Student" : "Not a Student";
// console.log(message);

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

//  ##13 SWITCH STATEMENTS
// SWITCH = can be an efficient replacement to many else if statements

// let day = 1;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Not a applicable day");
//     break;
// }

// let testScore = 92;
// testScore = 85;
// testScore = 69;
// let letterGrade;

// switch (true) {
//   case testScore >= 90:
//     letterGrade = "A";
//     break;
//   case testScore >= 80:
//     letterGrade = "B";
//     break;
//   case testScore >= 70:
//     letterGrade = "C";
//     break;
//   case testScore >= 60:
//     letterGrade = "D";
//     break;
//   default:
//     letterGrade = "F";
//     break;
// }
// console.log(letterGrade);

//  ###14 STRING METHOD
//  It allows you to manipulate and work with text(strings)
// let userName = "BroCode";
// console.log(userName.charAt(0));
// console.log(userName.indexOf("B"));
// console.log(userName.lastIndexOf("e"));
// console.log(userName.length);

// userName = "BroCode    ";
// console.log(userName.trim());
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.repeat(4));
// console.log(userName.startsWith("N"));
// console.log(userName.endsWith("")); /**true -"BroCode    " */
// console.log(userName.includes("  "));
// */

// let phoneNumber = "123-456-7890";
// console.log(phoneNumber.replaceAll("-", ""));
// console.log(phoneNumber.padStart(15, "0"));
// console.log(phoneNumber.padEnd(18, "0"));


