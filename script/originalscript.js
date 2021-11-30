// const morseCode = {
//   A: ".-",
//   B: "-...",
//   C: "-.-.",
//   D: "-..",
//   E: ".",
//   F: "..-.",
//   G: "--.",
//   H: "....",
//   I: "..",
//   J: ".---",
//   K: "-.-",
//   L: ".-..",
//   M: "--",
//   N: "-.",
//   O: "---",
//   P: ".--.",
//   Q: "--.-",
//   R: ".-.",
//   S: "...",
//   T: "-",
//   U: "..-",
//   W: ".--",
//   X: "-..-",
//   Y: "-.--",
//   Z: "--..",
// };

const englishCode = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  "... . .": "5",
  "-... .": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};

// // UI VARIABLES
const translateButton = document.querySelector(".translate__button");
const outputValue = document.querySelector(".output__value");

const translateToMorse = () => {
  // target the value in the HTML and convert to uppercase to match object keys
  let inputValue = document.querySelector(".input__value").value.toUpperCase();
  // create an array to iterate through, first convert to an array, second map through for the values
  const arrayForConversion = inputValue.split("").map((x) => {
    return morseCode[x];
  });
  // return the array as a string
  const morseTranslation = arrayForConversion.join("");
  // display translation in the HTML
  outputValue.innerHTML = morseTranslation;
};

const translateToEnglish = () => {
  // target the value in the HTML and convert to uppercase to match object keys
  let inputValue = document.querySelector(".input__value").value;
  // create an array to itterate through, first convert to an array, second map through for the values
  const arrayForConversion = inputValue.split(" ").map((x) => {
    return englishCode[x];
  });
  // return the array as a string
  const englishTranslation = arrayForConversion.join("");
  // display translation in the HTML
  outputValue.innerHTML = englishTranslation;
};

// function to check which function to run on click - checks whether its a string to run the translateToMorse to dot and dash to translateToEnglish

const checkTypeOfValue = () => {
  let inputValue = document.querySelector(".input__value").value;
  if (typeof inputValue === "string") {
    translateToMorse();
  }
  if (inputValue.includes(".") || inputValue.includes("-")) {
    translateToEnglish();
  }
  return checkTypeOfValue;
};

let inputValue = document.querySelector(".input__value");

const mirrorValue = () => {
  let inputValue = document.querySelector(".input__value").value;
  outputValue.innerHTML = inputValue;
  checkTypeOfValue();
  return mirrorValue;
};

inputValue.addEventListener("keyup", mirrorValue);
