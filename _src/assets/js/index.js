"use strict";

const storage = require("./components/storage");
const constants = require("./components/constants");
const dropDownMenu = require("./components/dropDownMenu");
const palettes = require("./components/palettes");
const reset = require("./components/reset");
const form = require("./components/form");
const validation = require("./components/validation");
const fonts = require("./components/fonts");
const share = require("./components/share");
const avatar = require("./components/avatar");

window.addEventListener("load", () => {
  // Extraer información del local storage
  const localStorage = storage.getLocalStorage();

  // Inicializar los valores de dichos componentes con lo que haya en localstorage
  palettes.setPalette(localStorage.palette);
  // TODO - setear todos los valores iniciales de los compontes al igual que con la paleta
});
