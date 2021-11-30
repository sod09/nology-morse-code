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
    return "Please type in the above box to translate your English or Morse.";
  }
  if (value.includes(".") || value.includes("-")) {
    return translateToEnglish(value);
  } else {
    return translateToMorse(value);
  }
};

// export const isValid = (value) => {
//   // 1. If it's "" - it's invalid
//   if (value == "") return false;
//   // 1. If it's letter - it's valid
//   const isEnglish = !value.includes(".") && !value.includes("-");
//   // 2. If it's . or - - it's valid
//   const isMorse = value.includes(".") && value.includes("-");
//   // 4. If it's mixed - it's invalid
//   if (isEnglish && isMorse) {
//     return false;
//   } else if (isEnglish || isMorse) {
//     return true;
//   } else {
//     return false;
//   }
// };
