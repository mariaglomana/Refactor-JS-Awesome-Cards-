"use strict";

const constants = require("./constants");

const palette1 = document.querySelector(constants.palette1);
const palette2 = document.querySelector(constants.palette2);
const palette3 = document.querySelector(constants.palette3);
const palette4 = document.querySelector(constants.palette4);
const previewCardName = document.querySelector(constants.previewCardName);
const previewCardHead = document.querySelector(constants.previewCardHead);
const iconItems = document.querySelectorAll(constants.iconItems);
const iconButtons = document.querySelectorAll(constants.iconButtons);
let chosenPalette;

const paletteConfig = {
  palette1: {
    colorName: "darkGreenBlue",
    colorHead: "borderPalette1",
    borderColor: "#a2deaf",
    oldColorName1: "slate",
    oldColorName2: "jungleGreen",
    oldColorName3: "driedBlood",
    oldColorHead1: "borderPalette3",
    oldColorHead2: "borderPalette4",
    oldColorHead3: "borderPalette2"
  },
  palette2: {
    colorName: "driedBlood",
    colorHead: "borderPalette2",
    borderColor: "#e95626",
    oldColorName1: "slate",
    oldColorName2: "jungleGreen",
    oldColorName3: "darkGreenBlue",
    oldColorHead1: "borderPalette3",
    oldColorHead2: "borderPalette4",
    oldColorHead3: "borderPalette1"
  },
  palette3: {
    colorName: "slate",
    colorHead: "borderPalette3",
    borderColor: "#a0c0cf",
    oldColorName1: "driedBlood",
    oldColorName2: "jungleGreen",
    oldColorName3: "darkGreenBlue",
    oldColorHead1: "borderPalette2",
    oldColorHead2: "borderPalette4",
    oldColorHead3: "borderPalette1"
  },
  palette4: {
    colorName: "jungleGreen",
    colorHead: "borderPalette4",
    borderColor: "#f15f06",
    oldColorName1: "driedBlood",
    oldColorName2: "slate",
    oldColorName3: "darkGreenBlue",
    oldColorHead1: "borderPalette2",
    oldColorHead2: "borderPalette3",
    oldColorHead3: "borderPalette1"
  }
};

//COLORS

function _setPalette(palette) {
  if (!palette) {
    chosenPalette = "1";
  } else {
    chosenPalette = palette;
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
  applyPalette();
}

function choosePalette() {
  chosenPalette = event.currentTarget.value;
  localStorage.setItem("palette", chosenPalette);
  applyPalette();
}

function applyPalette() {
  if (palette1.checked) {
    applyGenericPalette(paletteConfig.palette1);
  } else if (palette2.checked) {
    applyGenericPalette(paletteConfig.palette2);
  } else if (palette3.checked) {
    applyGenericPalette(paletteConfig.palette3);
  } else if (palette4.checked) {
    applyGenericPalette(paletteConfig.palette4);
  }
}

function applyGenericPalette(paletteConfig) {
  previewCardName.classList.remove(
    paletteConfig.oldColorName1,
    paletteConfig.oldColorName2,
    paletteConfig.oldColorName3
  );
  previewCardName.classList.add(paletteConfig.colorName);

  previewCardHead.classList.remove(
    paletteConfig.oldColorHead1,
    paletteConfig.oldColorHead2,
    paletteConfig.oldColorHead3
  );
  previewCardHead.classList.add(paletteConfig.colorHead);

  for (const iconItem of iconItems) {
    iconItem.classList.remove(
      paletteConfig.oldColorName1,
      paletteConfig.oldColorName2,
      paletteConfig.oldColorName3
    );
    iconItem.classList.add(paletteConfig.colorName);
  }
  for (const IconButton of iconButtons) {
    IconButton.style.borderColor = paletteConfig.borderColor;
  }
}

function _getChosenPalette() {
  return chosenPalette;
}

palette1.addEventListener("click", choosePalette);
palette2.addEventListener("click", choosePalette);
palette3.addEventListener("click", choosePalette);
palette4.addEventListener("click", choosePalette);

module.exports = {
  getChosenPalette: _getChosenPalette,
  setPalette: _setPalette
};
