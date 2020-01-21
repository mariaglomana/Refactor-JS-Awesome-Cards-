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
let paletteChosen;

//COLORS

function _getPalette() {
  if (localStorage.getItem("palette")) {
    paletteChosen = localStorage.getItem("palette");
    if (paletteChosen === "1") {
      palette1.setAttribute("checked", true);
    } else if (paletteChosen === "2") {
      palette2.setAttribute("checked", true);
    } else if (paletteChosen === "3") {
      palette3.setAttribute("checked", true);
    } else if (paletteChosen === "4") {
      palette4.setAttribute("checked", true);
    }
    applyPalette();
  } else {
    palette1.setAttribute("checked", true);
    applyPalette();
  }
}

function choosePalette() {
  paletteChosen = event.currentTarget.value;
  localStorage.setItem("palette", paletteChosen);
  applyPalette();
}

function applyPalette() {
  if (palette1.checked) {
    _applyPalette1();
  } else if (palette2.checked) {
    applyPalette2();
  } else if (palette3.checked) {
    applyPalette3();
  } else if (palette4.checked) {
    applyPalette4();
  }
}

function _applyPalette1() {
  previewCardName.classList.add("darkGreenBlue");
  previewCardName.classList.remove("driedBlood", "slate", "jungleGreen");
  previewCardHead.classList.add("borderPalette1");
  previewCardHead.classList.remove(
    "borderPalette2",
    "borderPalette3",
    "borderPalette4"
  );
  for (const iconItem of iconItems) {
    iconItem.classList.add("darkGreenBlue");
    iconItem.classList.remove("driedBlood", "slate", "jungleGreen");
  }
  for (const IconButton of iconButtons) {
    IconButton.style.borderColor = "#a2deaf";
  }
}

function applyPalette2() {
  previewCardName.classList.add("driedBlood");
  previewCardName.classList.remove("darkGreenBlue", "slate", "jungleGreen");
  previewCardHead.classList.add("borderPalette2");
  previewCardHead.classList.remove(
    "borderPalette1",
    "borderPalette3",
    "borderPalette4"
  );
  for (const iconItem of iconItems) {
    iconItem.classList.add("driedBlood");
    iconItem.classList.remove("darkGreenBlue", "slate", "jungleGreen");
  }
  for (const IconButton of iconButtons) {
    IconButton.style.borderColor = "#e95626";
  }
}

function applyPalette3() {
  previewCardName.classList.add("slate");
  previewCardName.classList.remove(
    "driedBlood",
    "darkGreenBlue",
    "jungleGreen"
  );
  previewCardHead.classList.add("borderPalette3");
  previewCardHead.classList.remove(
    "borderPalette1",
    "borderPalette2",
    "borderPalette4"
  );
  for (const iconItem of iconItems) {
    iconItem.classList.add("slate");
    iconItem.classList.remove("driedBlood", "darkGreenBlue", "jungleGreen");
  }
  for (const IconButton of iconButtons) {
    IconButton.style.borderColor = "#a0c0cf";
  }
}

function applyPalette4() {
  previewCardName.classList.add("jungleGreen");
  previewCardName.classList.remove("darkGreenBlue", "driedBlood", "slate");
  previewCardHead.classList.add("borderPalette4");
  previewCardHead.classList.remove(
    "borderPalette1",
    "borderPalette2",
    "borderPalette3"
  );
  for (const iconItem of iconItems) {
    iconItem.classList.add("jungleGreen");
    iconItem.classList.remove("darkGreenBlue", "driedBlood", "slate");
  }
  for (const IconButton of iconButtons) {
    IconButton.style.borderColor = "#f15f06";
  }
}

palette1.addEventListener("click", choosePalette);
palette2.addEventListener("click", choosePalette);
palette3.addEventListener("click", choosePalette);
palette4.addEventListener("click", choosePalette);

module.exports = {
  getPalette: _getPalette,
  applyPalette1: _applyPalette1,
  paletteChosen: paletteChosen
};
