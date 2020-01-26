"use strict";

const constants = require("./constants");
const palettes = require("./palettes");
const fonts = require("./fonts");

const palette1 = document.querySelector(constants.palette1);
const font1 = document.querySelector(constants.font1);
const userName = document.querySelector(constants.userName);
const userJob = document.querySelector(constants.userJob);
const previewCardName = document.querySelector(constants.previewCardName);
const previewCardJob = document.querySelector(constants.previewCardJob);
const profileImage = document.querySelector(constants.profileImage);
const profilePreview = document.querySelector(constants.profilePreview);
const phoneIcon = document.querySelector(constants.phoneIcon);
const userPhone = document.querySelector(constants.userPhone);
const phoneItem = document.querySelector(constants.phoneItem);
const emailIcon = document.querySelector(constants.emailIcon);
const userEmail = document.querySelector(constants.userEmail);
const emailItem = document.querySelector(constants.emailItem);
const linkedinIcon = document.querySelector(constants.linkedinIcon);
const userLinkedin = document.querySelector(constants.userLinkedin);
const linkedinItem = document.querySelector(constants.linkedinItem);
const githubIcon = document.querySelector(constants.githubIcon);
const userGithub = document.querySelector(constants.userGithub);
const githubItem = document.querySelector(constants.githubItem);
const defaultImage = constants.defaultImage;
const reseterButton = document.querySelector(constants.reseterButton);

const resetLocalStorage = () => {
  localStorage.clear("palette");
  localStorage.clear("font");
  localStorage.clear("name");
  localStorage.clear("job");
  localStorage.clear("image");
  localStorage.clear("phone");
  localStorage.clear("email");
  localStorage.clear("linkedin");
  localStorage.clear("github");
};

const resetColorPalette = () => {
  palettes.setPalette();
  palette1.checked = true;
};
const resetFont = () => {
  fonts.applyFont1();
  font1.checked = true;
};

const resetName = () => {
  previewCardName.innerHTML = "Nombre Apellido";
  userName.value = "";
};

const resetJob = () => {
  previewCardJob.innerHTML = "Front-end developer";
  userJob.value = "";
};

const resetImage = () => {
  profileImage.style.backgroundImage = `url(${defaultImage})`;
  profilePreview.style.backgroundImage = `url(${defaultImage})`;
};

const resetPhone = () => {
  phoneIcon.href = "";
  userPhone.value = "";
  phoneItem.classList.add("opacity");
};

const resetEmail = () => {
  emailIcon.href = "";
  userEmail.value = "";
  emailItem.classList.add("opacity");
};

const resetLinkedin = () => {
  linkedinIcon.href = "";
  userLinkedin.value = "";
  linkedinItem.classList.add("opacity");
};

const resetGithub = () => {
  githubIcon.href = "";
  userGithub.value = "";
  githubItem.classList.add("opacity");
};

const resetCardData = () => {
  resetLocalStorage();
  resetColorPalette();
  resetFont();
  resetName();
  resetJob();
  resetImage();
  resetPhone();
  resetEmail();
  resetLinkedin();
  resetGithub();
};

reseterButton.addEventListener("click", resetCardData);
