// function saySomething(whatToSay) {
//   window.alert(whatToSay);
// }

// business logic
function add(number1, number2) {
  return number1 + number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
window.alert(add(number1, number2));



// const additionResult = add(10, 5);
// window.alert(additionResult); //implicitly converts to string

// saySomething("hi");
// const result = add(3,5);
// const outputText = "The sum is " + result + "."; 
// saySomething(outputText);    

// saySomething("The sum is " + add(3,5) + ".");