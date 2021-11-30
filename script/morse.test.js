// import { translateToEnglish } from "./script";

// // positive tests

// it("should return a translation from .- to A", () => {
//   const output = translateToEnglish(" .-");
//   expect(output).toBe("A");
// });

// it("should return a translation from -... to B", () => {
//   const output = translateToEnglish(" -...");
//   expect(output).toBe("B");
// });

// it("should return a translation from .- -...  to AB", () => {
//   const output = translateToEnglish(" .- -...");
//   expect(output).toBe("AB");
// });

// // negative tests
// it("should return invalid if the input is A", () => {
//   const output = translateToEnglish("A");
//   expect(output).toBe("invalid");
// });

// it("should return invalid if the input is empty", () => {
//   const output = translateToEnglish("");
//   expect(output).toBe("invalid");
// });

// it("should return invalid if the input is mixed morse and letters", () => {
//   const output = translateToEnglish("A", ".-");
//   expect(output).toBe("invalid");
// });

// export const translateToEnglish = (morse) => {
//   const arrayForConversion = morse.split(" ").map((x) => {
//     return englishCode[x];
//   });
//   const englishTranslation = arrayForConversion.join("");
//   return englishTranslation;
// };

// const isValid = (morse) => {
//   if (morse === "") {
//     return false;
//   }

//   if (morse.includes(".") === false && morse.includes("-") === false) {
//     return false;
//   }

//   if (morse.includes(".") || morse.includes("-")) {
//     return true;
//   }

//   if (
//     (morse.includes(englishCode[x]) && morse.includes(".")) ||
//     morse.includes("-")
//   ) {
//     return false;
//   }
// };

// export const translateToEnglish = (morse) => {
//   // target the value in the HTML and convert to uppercase to match object keys
//   // morse = document.querySelector(".input__value").value;
//   // create an array to itterate through, first convert to an array, second map through for the values
//   if (!isValid(morse)) {
//     return "invalid";
//   }

//   const arrayForConversion = morse.split(" ").map((x) => {
//     return englishCode[x];
//   });

//   // return the array as a string
//   const englishTranslation = arrayForConversion.join("");

//   return englishTranslation;
//   // display translation in the HTML
//   // outputValue.innerHTML = englishTranslation;
// };

import {
  translateToMorse,
  translateToEnglish,
  handleTranslate,
} from "./script.js";

it("should return a translation from A to .-", () => {
  const output = translateToMorse("A");
  expect(output).toBe(".-");
});

it("should return invalid if the input is mixed morse and letters", () => {
  const output = translateToMorse("A", ".-");
  expect(output).toBe("invalid");
});

it("should return a translation from .- to A", () => {
  const output = translateToEnglish(" .-");
  expect(output).toBe("A");
});

it("should return a translation from -... to B", () => {
  const output = translateToEnglish(" -...");
  expect(output).toBe("B");
});

it("should return a translation from .- -...  to AB", () => {
  const output = translateToEnglish(" .- -...");
  expect(output).toBe("AB");
});

it("should return invalid if the input is mixed morse and letters", () => {
  const output = translateToEnglish("A", ".-");
  expect(output).toBe("invalid");
});

// import { mixedValues } from "./function.js"

// it("should return invalid if the input is mixed morse and letters", () => {
//   const output = mixedValues("A", ".-");
//   expect(output).toBe("invalid");
// });

it("should return invalid if the input is empty", () => {
  const output = handleTranslate("");
  expect(output).toBe(
    "Please type above the English or Morse you would like to translate"
  );
});

it("should return a translation from .- -...  to AB", () => {
  const output = handleTranslate(" .- -...");
  expect(output).toBe("AB");
});

it("should return a translation from A to .-", () => {
  const output = handleTranslate("A");
  expect(output).toBe(".-");
});
