"use strict";

const storage = require("./components/storage");
const constants = require("./components/constants");
const toggle = require("./components/toggle");
const palettes = require("./components/palettes");
const reset = require("./components/reset");
const form = require("./components/form");
const validation = require("./components/validation");
const fonts = require("./components/fonts");
const share = require("./components/share");
const avatar = require("./components/avatar");

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
  avatar.setImage(localStorage.avatar);
});
