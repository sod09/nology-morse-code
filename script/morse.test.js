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

it("should return invalid if the input is empty", () => {
  const output = handleTranslate("");
  expect(output).toBe(
    "Please type in the above box to translate your English or Morse."
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
