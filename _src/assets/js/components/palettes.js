"use strict";

const constants = require("./constants");
const previewCard = require("./previewCard");

const palette1 = document.querySelector(constants.palette1);
const palette2 = document.querySelector(constants.palette2);
const palette3 = document.querySelector(constants.palette3);
const palette4 = document.querySelector(constants.palette4);

const paletteConfig = constants.paletteConfig;
let chosenPalette;

function _setPalette(palette) {
  if (palette) {
    chosenPalette = palette;
  } else {
    chosenPalette = "1";
  }

  if (chosenPalette === "1") {
    palette1.setAttribute("checked", true);
  } else if (chosenPalette === "2") {
    palette2.setAttribute("checked", true);
  } else if (chosenPalette === "3") {
    palette3.setAttribute("checked", true);
  } else if (chosenPalette === "4") {
    palette4.setAttribute("checked", true);
  }
  applyGenericPalette(paletteConfig[Number(chosenPalette) - 1]);
}

function choosePalette(event) {
  chosenPalette = event.currentTarget.value;
  localStorage.setItem("palette", chosenPalette);
  applyGenericPalette(paletteConfig[Number(chosenPalette) - 1]);
}

function applyGenericPalette(selectedPalette) {
  previewCard.setPreviewPalette(selectedPalette);
}

function _resetPalette() {
  _setPalette();
}

palette1.addEventListener("click", choosePalette);
palette2.addEventListener("click", choosePalette);
palette3.addEventListener("click", choosePalette);
palette4.addEventListener("click", choosePalette);

module.exports = {
  setPalette: _setPalette,
  resetPalette: _resetPalette
};
