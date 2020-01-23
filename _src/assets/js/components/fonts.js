"use strict";

const constants = require("./constants");

const font1 = document.querySelector(constants.font1);
const font2 = document.querySelector(constants.font2);
const font3 = document.querySelector(constants.font3);
const previewCardName = document.querySelector(constants.previewCardName);
const previewCardJob = document.querySelector(constants.previewCardJob);
let chosenFont;

const fontConfig = {
  font1: {
    f1: "fontMontserratBold",
    f2: "fontCherrySwashBold",
    f3: "fontKalamBold"
  },
  font2: {
    f1: "fontCherrySwashBold",
    f2: "fontMontserratBold",
    f3: "fontKalamBold"
  },
  font3: {
    f1: "fontKalamBold",
    f2: "fontCherrySwashBold",
    f3: "fontMontserratBold"
  }
};

//FONTS

const _setFont = font => {
  if (!font) {
    chosenFont = "1";
  } else {
    chosenFont = font;
  }

  if (chosenFont === "1") {
    font1.setAttribute("checked", true);
  } else if (chosenFont === "2") {
    font2.setAttribute("checked", true);
  } else if (chosenFont === "3") {
    font3.setAttribute("checked", true);
  }
  applyFont();
};

const chooseFont = event => {
  chosenFont = event.currentTarget.value;
  localStorage.setItem("font", chosenFont);
  applyFont();
};

const applyFont = () => {
  if (font1.checked) {
    applyGenericFont(fontConfig.font1);
  } else if (font2.checked) {
    applyGenericFont(fontConfig.font2);
  } else {
    applyGenericFont(fontConfig.font3);
  }
};

const applyGenericFont = fontConfig => {
  previewCardName.classList.add(fontConfig.f1);
  previewCardName.classList.remove(fontConfig.f2);
  previewCardName.classList.remove(fontConfig.f3);
  previewCardJob.classList.add(fontConfig.f1);
  previewCardJob.classList.remove(fontConfig.f2);
  previewCardJob.classList.remove(fontConfig.f3);
};

function _getChosenFont() {
  return chosenFont;
}

font1.addEventListener("click", chooseFont);
font2.addEventListener("click", chooseFont);
font3.addEventListener("click", chooseFont);

module.exports = {
  setFont: _setFont,
  getChosenFont: _getChosenFont
};
