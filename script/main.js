import { handleTranslate } from "./script.js";

const printTranslation = (translatedWord) => {
  const translateResult = document.querySelector(".output__value");
  translateResult.innerHTML = translatedWord;
};

document.querySelector(".input__value").addEventListener("keyup", () => {
  const value = document.querySelector(".input__value").value.toUpperCase();

  const translateMorse = handleTranslate(value);

  printTranslation(translateMorse);
});
