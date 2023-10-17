// // F = (C x 9/5) + 32

// // function cToF() {
// //   let celsius = parseInt(window.prompt("Enter a temp in celsius"));
// //   let fahrenheit = "=" + ((celsius * 1.8) + 32) + "degrees in Fahrenheit";
// //   window.alert(fahrenheit);
// // }

// function takeUserInput() {
//   let celsius = parseInt(window.prompt("Enter a temp in celsius"));
//   // let fahrenheit = parseInt(window.prompt("Enter a temp in fahrenheit"));
//   // return celsius;
//   // return fahrenheit;
// }

// function convertTemp(celsius, fahrenheit) {
//   let convertedFahrenheit = "=" + ((celsius * 1.8) + 32) + "degrees in Fahrenheit";
//   let convertedCelsius = "=" + ((fahrenheit * (5/9)) - 32) + "degrees in Celsius";
//   window.alert(celsius);
//   window.alert(fahrenheit);

// }

// takeUserInput();
// convertTemp();

function cToF() {
  let celsius = parseInt(window.prompt("Enter a temp in celsius"));
  let fahrenheit = parseInt(window.prompt("Enter a temp in fahrenheit"));
  window.alert("=" + ((celsius * 1.8) + 32) + "degrees in Fahrenheit")
  window.alert("=" + ((fahrenheit * (5/9)) - 32) + "degrees in Celsius")
  
}

cToF ()


//   cToF add(){
//     let conCelsius = "=" + ((fahrenheit * (5/9)) - 32) + "degrees in Celsius";
//   let conFahrenheit = "=" + ((celsius * 1.8) + 32) + "degrees in Fahrenheit";
//   window.alert(fahrenheit);
//   window.alert(celsius);
// }



// const number1 = parseInt(prompt("Enter a number in Farenheit:"));
// window.alert(" = " + (number1 - 32)*(5/9));



// cToF()



// function getFirstNumber() {
//   return parseInt(document.getElementById('number1').value);
// }

// function add() {
//   const additionResult = getFirstNumber() + getSecondNumber();
//   updateAnswer(additionResult);
// }

// function updateAnswer(answer) {
//   document.getElementById("answer").innerHTML = answer;
// }
