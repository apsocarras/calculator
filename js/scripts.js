// function saySomething(whatToSay) {
//   window.alert(whatToSay);
// }

// business logic
function add(number1, number2) {
  return number1 + number2;
}
 
// subtraction
function subtraction ( number1, number2) {
  return number1 - number2;
}
// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const addDisplay = ("This is the addition result: " + add(number1, number2) + ". " + `\n`); 
const subDisplay = ("This is the subtraction result: " + subtraction(number1, number2) + ". " + `\n`);
window.alert(addDisplay + subDisplay);



// const additionResult = add(10, 5);
// window.alert(additionResult); //implicitly converts to string

// saySomething("hi");
// const result = add(3,5);
// const outputText = "The sum is " + result + "."; 
// saySomething(outputText);    

// saySomething("The sum is " + add(3,5) + ".");