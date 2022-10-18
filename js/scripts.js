// function saySomething(whatToSay) {
//   window.alert(whatToSay);
// }

// business logic
function add(number1, number2) {
  return number1 + number2;
}
 
// subtraction
function subtraction(number1, number2) {
  return number1 - number2;
}

//multiplication
function multiplication(mult1, mult2) {
  return mult1 * mult2;
}

// division
function division(divisor1, divisor2){
  return divisor1/divisor2;
}

// // user interface logic 

function handleCalculation(event){
  event.preventDefault();

  const number1 = parseInt(document.querySelector("input#inputNumberOne").value);
  const number2 = parseInt(document.querySelector("input#inputNumberTwo").value);

  const operator = document.querySelector("input[name='operator']:checked").value;
  console.log("Number 1: " + number1);
  console.log("Number 2: " + number2);
  console.log("Operator:", operator);

  
}

window.addEventListener("load", function(){
  const form = document.getElementById("calculator");
  form.addEventListener("submit", handleCalculation);
});

// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));

const addDisplay = ("This is the addition result: " + number1 + " + " + number2 + " = " + add(number1, number2) + ". " + `\n`); 
const subDisplay = ("This is the subtraction result: " + number1 + " - " + number2 + " = " + subtraction(number1, number2) + ". " + `\n`);
const multDisplay = ("This is the multiplication result: " + number1 + " * " + number2 + " = " + multiplication(number1, number2) + ". " + `\n`);
const divDisplay = ("This is the division result: " + number1 + " / " + number2 + " = " + division(number1, number2) + ". " + `\n`);


// window.alert(addDisplay + subDisplay + multDisplay + divDisplay);



// const additionResult = add(10, 5);
// window.alert(additionResult); //implicitly converts to string

// saySomething("hi");
// const result = add(3,5);
// const outputText = "The sum is " + result + "."; 
// saySomething(outputText);    

// saySomething("The sum is " + add(3,5) + ".");