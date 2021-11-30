const englishToMorseObject = {
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
  Z: "--..",
};

const morseToEnglishObject = {
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

// const noValidEntry = (value) => {
//   if (value === "") {
//     return "Please type above the English or Morse you would like to translate";
//   }
// };

// const mixedValues = (value) => {
//   if (s
//   (value.includes(englishToMorseObject[x]) && value.includes(".")) ||
//   value.includes("-")
// ) {
//   return "invalid"
// }
// }

export const translateToMorse = (value) => {
  const arrayForConversion = value.split("").map((x) => {
    return englishToMorseObject[x];
  });

  return arrayForConversion.join("");
};

export const translateToEnglish = (value) => {
  const arrayForConversion = value.split(" ").map((x) => {
    return morseToEnglishObject[x];
  });

  return arrayForConversion.join("");
};

export const handleTranslate = (value) => {
  if (value === "") {
    return "Please type above the English or Morse you would like to translate";
  }

  if (value.includes(".") || value.includes("-")) {
    return translateToEnglish(value);
  } else {
    return translateToMorse(value);
  }

  // else if (value.includes(".") || value.includes("-") && value.includes(Object.values(morseToEnglishObject))) {
  //     return "Please type above the English or Morse you would like to translate"
  //   }
};
