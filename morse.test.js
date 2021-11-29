/**
 * @jest-environment jsdom
 */

import { translateToEnglish } from "./script";

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

// export const translateToEnglish = (morse) => {
//   const arrayForConversion = morse.split(" ").map((x) => {
//     return englishCode[x];
//   });
//   const englishTranslation = arrayForConversion.join("");
//   return englishTranslation;
// };
