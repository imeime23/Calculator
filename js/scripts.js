//business logic//
function add(number1, number2) {
  return number1 + number2;
}  

//user interface logic//
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

//window.alert(add(number1, number2));//
const additionResult = add(number1, number2);
window.alert(additionResult);








//function saySomething(whatToSay) {//
  //window.alert(whatToSay);//
//}//

//function add(number1, number2) {//
  //return number1 + number2;//
//}//


//const result = add(3, 5);//
//const outputText = "The sum is " + result + ".";//
//saySomething(outputText);//

//saySomething("hi");//
//saySomething("The sum is " + add(3,5) + ".");//