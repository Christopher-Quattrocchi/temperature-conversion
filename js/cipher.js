// function ozToGram() {
//   let oz = parseInt(window.prompt("Enter # of ounces"));
//   window.alert("= " + (oz * 28.35) + " grams");
// }

// ozToGram()

function storeSentence() {
  let userSentence = prompt("Enter a phrase");
  // window.alert(userSentence);
  return userSentence;
}

function capSentence(userSentence) {
  let lastLetter = userSentence.slice(-1).toUpperCase();
  window.alert(lastLetter);
}



let sentence = storeSentence();

capSentence(sentence);