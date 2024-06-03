// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!!


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

// let number = 2


const numtostr = () => {
let number = document.getElementById("numtostring").value
console.log(number)

let numberString = number.toString();
console.log(typeof(numberString))

document.getElementById("results").innerText=typeof(numberString)
} 

// Write a JavaScript program to convert a string to the number.

// let num = "12";

const strtonum = () => {
  let number = document.getElementById("stringtonumber").value
  console.log(number)
  
  let stringNumber = Number(number);
  console.log(typeof(stringNumber))
  
  document.getElementById("results2").innerText=typeof(stringNumber)
  } 


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
// NOTE: Exlclude this function while completing Part II. The Data Type will always return as a String. If you want a challenge, come back to this function and start in the console. Then see what you can make of it. Again, simply skip this function while completing Part II of this project.

function defineDatatype(argument) {
  console.log(typeof(argument));
  const dataType = typeof(argument);
  document.getElementById("dataTypeOutput").innerHTML = `The data type is: ${dataType}`;
}

// defineDatatype("hello")



  
// Write a JavaScript program that adds 2 numbers together.

// let nummero1 = 2
// let number2 = 2

const add = (numA, numB) => {
  const sum = numA + numB
  return sum
}

// add(4, 5)
// console.log(add(4, 5)) // this is just to show what it prints out, passing the argument and funciton to console log
// const newValue = add(nummero1, number2)
// console.log(newValue)

// Write a JavaScript program that runs only when 2 things are true.

// let num1= 20;
// let num2= 30;

if (num1 > 5 && num2 > 5) {
  console.log("yes these numbers are greater than 5");
}

// Write a JavaScript program that runs when 1 of 2 things are true.


function yesAndno(num3, num4){
  if (num3 > 5 || num4 > 5) {
    console.log("yes, one is true");
  }
  
}

// Write a JavaScript program that runs when both things are not true.  

function lierlier(numY, numZ) {
  if (numY > 10 || numZ > 10) {
    console.log("bigger than 10")
  }
  else {
    console.log ("less than 10")
  }
  
}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
