import constants from "./constants";
import previewCard from "./previewCard";
import storage from "./storage";

const palette1 = document.querySelector(constants.palette1);
const palette2 = document.querySelector(constants.palette2);
const palette3 = document.querySelector(constants.palette3);
const palette4 = document.querySelector(constants.palette4);

const paletteConfig = constants.paletteConfig;
const DEFAULT_PALETTE = "1";
let chosenPalette;

const paletteMap = {
  "1": palette1,
  "2": palette2,
  "3": palette3,
  "4": palette4
};

function setPalette(palette) {
  chosenPalette = palette ? palette : DEFAULT_PALETTE;
  paletteMap[chosenPalette].setAttribute("checked", true);
  applyGenericPalette(paletteConfig[Number(chosenPalette) - 1]);
}

function choosePalette(event) {
  chosenPalette = event.currentTarget.value;
  storage.save("palette", chosenPalette);
  applyGenericPalette(paletteConfig[Number(chosenPalette) - 1]);
}

function applyGenericPalette(selectedPalette) {
  previewCard.setPreviewPalette(selectedPalette);
}

function resetPalette() {
  setPalette();
}

const getChosenPalette = () => {
  return chosenPalette;
};

palette1.addEventListener("click", choosePalette);
palette2.addEventListener("click", choosePalette);
palette3.addEventListener("click", choosePalette);
palette4.addEventListener("click", choosePalette);

export default {
  setPalette,
  resetPalette,
  getChosenPalette
};
