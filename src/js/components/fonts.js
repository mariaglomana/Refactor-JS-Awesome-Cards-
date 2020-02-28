import constants from "./constants";
import previewCard from "./previewCard";

const font1 = document.querySelector(constants.font1);
const font2 = document.querySelector(constants.font2);
const font3 = document.querySelector(constants.font3);

const fontConfig = constants.fontConfig;
const DEFAULT_FONT = "1";
let chosenFont;

const fontMap = {
  "1": font1,
  "2": font2,
  "3": font3
};

const setFont = font => {
  chosenFont = font ? font : DEFAULT_FONT;
  fontMap[chosenFont].setAttribute("checked", true);
  applyGenericFont(fontConfig[Number(chosenFont) - 1]);
};

const chooseFont = event => {
  chosenFont = event.currentTarget.value;
  localStorage.setItem("font", chosenFont);
  applyGenericFont(fontConfig[Number(chosenFont) - 1]);
};

const applyGenericFont = selectedFont => {
  previewCard.setPreviewFont(selectedFont);
};

const resetFont = () => {
  setFont();
};

const getChosenFont = () => {
  return chosenFont;
};

font1.addEventListener("click", chooseFont);
font2.addEventListener("click", chooseFont);
font3.addEventListener("click", chooseFont);

export default {
  setFont,
  resetFont,
  getChosenFont
};
