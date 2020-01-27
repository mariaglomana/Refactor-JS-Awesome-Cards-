"use strict";

const constants = require("./constants");
const previewCard = require("./previewCard");

const font1 = document.querySelector(constants.font1);
const font2 = document.querySelector(constants.font2);
const font3 = document.querySelector(constants.font3);

const previewCardName = document.querySelector(constants.previewCardName);
const previewCardJob = document.querySelector(constants.previewCardJob);

const fontConfig = constants.fontConfig;
let chosenFont;

const _setFont = font => {
  if (font) {
    chosenFont = font;
  } else {
    chosenFont = "1";
  }

  if (chosenFont === "1") {
    font1.setAttribute("checked", true);
  } else if (chosenFont === "2") {
    font2.setAttribute("checked", true);
  } else if (chosenFont === "3") {
    font3.setAttribute("checked", true);
  }
  applyGenericFont(fontConfig[Number(chosenFont) - 1]);
};

const chooseFont = event => {
  chosenFont = event.currentTarget.value;
  localStorage.setItem("font", chosenFont);
  applyGenericFont(fontConfig[Number(chosenFont) - 1]);
};

// const applyFont = () => {
//   if (font1.checked) {
//     applyGenericFont(fontConfig.font1);
//   } else if (font2.checked) {
//     applyGenericFont(fontConfig.font2);
//   } else {
//     applyGenericFont(fontConfig.font3);
//   }
// };

const applyGenericFont = selectedFont => {
  previewCard.setPreviewFont(selectedFont);
};

const _resetFont = () => {
  _setFont();
};

font1.addEventListener("click", chooseFont);
font2.addEventListener("click", chooseFont);
font3.addEventListener("click", chooseFont);

module.exports = {
  setFont: _setFont,
  resetFont: _resetFont
};
