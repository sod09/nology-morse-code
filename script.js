const morseCode = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--.."
}

const translateButton = document.querySelector(".translate__button"); 
const outputValue = document.querySelector(".output__value")


const translateMorse = () => {
  // target the value in the HTML and convert to uppercase to match object keys
  let inputValue = document.querySelector(".input__value").value.toUpperCase();
  // create an array to itterate through, first convert to an array, second map through for the values 
 const arrayForConversion = inputValue.split("").map(x => {
    return morseCode[x]
 })
  // return the array as a string 
  const translation = arrayForConversion.join("");
  // display translation in the HTML 
  outputValue.innerHTML = translation;

}

translateButton.addEventListener("click", translateMorse)
