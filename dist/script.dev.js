"use strict";

var morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--.."
};
var englishCode = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '... . .': '5',
  '-... .': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9'
};
var translateButton = document.querySelector(".translate__button");
var outputValue = document.querySelector(".output__value");

var translateToMorse = function translateToMorse() {
  // target the value in the HTML and convert to uppercase to match object keys
  var inputValue = document.querySelector(".input__value").value.toUpperCase(); // create an array to itterate through, first convert to an array, second map through for the values 

  var arrayForConversion = inputValue.split("").map(function (x) {
    return morseCode[x];
  }); // return the array as a string 

  var morseTranslation = arrayForConversion.join(""); // display translation in the HTML 

  outputValue.innerHTML = morseTranslation;
  console.log("morse check");
};

var translateToEnglish = function translateToEnglish() {
  // target the value in the HTML and convert to uppercase to match object keys
  var inputValue = document.querySelector(".input__value").value; // create an array to itterate through, first convert to an array, second map through for the values 

  var arrayForConversion = inputValue.split(" ").map(function (x) {
    console.log(englishCode[x]);
    return englishCode[x];
  }); // return the array as a string 

  var englishTranslation = arrayForConversion.join(""); // display translation in the HTML 

  outputValue.innerHTML = englishTranslation;
  console.log("english check");
}; // a function to check which function to run on click - checks whether its a string to run the translateToMorse to dot and dash to translateToEnglish 


var checkTypeOfValue = function checkTypeOfValue() {
  var inputValue = document.querySelector(".input__value").value;

  if (typeof inputValue === "string") {
    translateToMorse();
  }

  if (inputValue.includes("." || "-")) {
    translateToEnglish();
  }

  return checkTypeOfValue;
};

translateButton.addEventListener("click", checkTypeOfValue);