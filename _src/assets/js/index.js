"use strict";

const storage = require("./components/storage");
const constants = require("./components/constants");
const toggle = require("./components/toggle");
const palettes = require("./components/palettes");
const form = require("./components/form");
const validation = require("./components/validation");
const fonts = require("./components/fonts");
const share = require("./components/share");
const previewCard = require("./components/previewCard");
const resetButton = document.querySelector(constants.resetButton);

window.addEventListener("load", () => {
  const localStorage = storage.getLocalStorage();

  palettes.setPalette(localStorage.palette);
  fonts.setFont(localStorage.font);
  form.setName(localStorage.name);
  form.setJob(localStorage.job);
  form.setPhone(localStorage.phone);
  form.setEmail(localStorage.email);
  form.setLinkedin(localStorage.linkedin);
  form.setGithub(localStorage.github);
  form.setImage(localStorage.previewCard);
  previewCard.setPreview(localStorage);
});

resetButton.addEventListener("click", () => {
  palettes.resetPalette();
  fonts.resetFont();
  form.resetFormData();
  previewCard.resetImage();
});
