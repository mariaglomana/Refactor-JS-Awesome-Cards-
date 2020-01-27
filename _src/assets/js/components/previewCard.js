"use strict";

const constants = require("./constants");

const imagePreview = document.querySelector(constants.imagePreview);
const defaultImage = constants.defaultImage;
const previewCardName = document.querySelector(constants.previewCardName);
const previewCardHead = document.querySelector(constants.previewCardHead);
const previewCardJob = document.querySelector(constants.previewCardJob);
const phoneItem = document.querySelector(constants.phoneItem);
const emailItem = document.querySelector(constants.emailItem);
const linkedinItem = document.querySelector(constants.linkedinItem);
const githubItem = document.querySelector(constants.githubItem);
const phoneIcon = document.querySelector(constants.phoneIcon);
const emailIcon = document.querySelector(constants.emailIcon);
const linkedinIcon = document.querySelector(constants.linkedinIcon);
const githubIcon = document.querySelector(constants.githubIcon);
const iconItems = document.querySelectorAll(constants.iconItems);
const iconButtons = document.querySelectorAll(constants.iconButtons);

const paletteConfig = constants.paletteConfig;
const fontConfig = constants.fontConfig;

function _setPreviewPalette(palette) {
  previewCardName.classList.remove(
    palette.oldColorName1,
    palette.oldColorName2,
    palette.oldColorName3
  );
  previewCardName.classList.add(palette.colorName);

  previewCardHead.classList.remove(
    palette.oldColorHead1,
    palette.oldColorHead2,
    palette.oldColorHead3
  );
  previewCardHead.classList.add(palette.colorHead);

  for (const iconItem of iconItems) {
    iconItem.classList.remove(
      palette.oldColorName1,
      palette.oldColorName2,
      palette.oldColorName3
    );
    iconItem.classList.add(palette.colorName);
  }
  for (const IconButton of iconButtons) {
    IconButton.style.borderColor = palette.borderColor;
  }
}

function _setPreviewFont(font) {
  previewCardName.classList.add(font.f1);
  previewCardName.classList.remove(font.f2, font.f3);
  previewCardJob.classList.add(font.f1);
  previewCardJob.classList.remove(font.f2, font.f3);
}

function _setPreviewName(name) {
  if (name) {
    previewCardName.innerHTML = name;
  } else {
    previewCardName.innerHTML = "Nombre Apellido";
  }
}

function _setPreviewJob(job) {
  if (job) {
    previewCardJob.innerHTML = job;
  } else {
    previewCardJob.innerHTML = "Front-end developer";
  }
}

function _setPreviewPhone(phone) {
  if (phone) {
    phoneIcon.href = `tel:${phone}`;
    phoneItem.classList.remove("opacity");
  } else {
    phoneItem.classList.add("opacity");
  }
}

function _setPreviewEmail(email) {
  if (email) {
    emailIcon.href = `tel:${email}`;
    emailItem.classList.remove("opacity");
  } else {
    emailItem.classList.add("opacity");
  }
}

function _setImage(image) {
  if (image) {
    imagePreview.style.backgroundImage = `url(${image})`;
  } else {
    imagePreview.style.backgroundImage = `url(${defaultImage})`;
  }
}

const _resetImage = () => {
  imagePreview.style.backgroundImage = `url(${defaultImage})`;
};

function _setPreviewLinkedin(linkedin) {
  if (linkedin) {
    linkedinIcon.href = `tel:${linkedin}`;
    linkedinItem.classList.remove("opacity");
  } else {
    linkedinItem.classList.add("opacity");
  }
}

function _setPreviewGithub(github) {
  if (github) {
    githubIcon.href = `tel:${github}`;
    githubItem.classList.remove("opacity");
  } else {
    githubItem.classList.add("opacity");
  }
}

const _setPreview = initialData => {
  let initialPalette = 0;
  if (initialData.palette) {
    initialPalette = Number(initialData.palette) - 1;
  }
  let initialFont = 0;
  if (initialData.font) {
    initialFont = Number(initialData.font) - 1;
  }
  _setPreviewPalette(paletteConfig[initialPalette]);
  _setPreviewFont(fontConfig[initialFont]);
  _setPreviewName(initialData.name);
  _setPreviewJob(initialData.job);
  _setPreviewPhone(initialData.phone);
  _setPreviewEmail(initialData.email);
  _setImage(initialData.previewImage);
  _setPreviewLinkedin(initialData.linkedin);
  _setPreviewGithub(initialData.github);
  _setImage(initialData.previewCard);
};

module.exports = {
  setImage: _setImage,
  resetImage: _resetImage,
  setPreviewPalette: _setPreviewPalette,
  setPreviewFont: _setPreviewFont,
  setPreview: _setPreview
};
