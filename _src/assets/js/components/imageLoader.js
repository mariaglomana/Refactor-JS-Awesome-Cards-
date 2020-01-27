"use strict";

const constants = require("./constants");

let imageSelected;

const fr = new FileReader();
const imageForm = document.querySelector(constants.imageForm);
const fileField = document.querySelector(constants.fileField);
const defaultImage = constants.defaultImage;

function _onAddImageForm(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  imageForm.style.backgroundImage = `url(${fr.result})`;
  localStorage.setItem("image", fr.result);
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function _fakeFileClick() {
  fileField.click();
}

function _setImage(image) {
  imageSelected = image;
  if (!image) {
    imageSelected = defaultImage;
  }
  imageForm.style.backgroundImage = `url(${imageSelected})`;
}

function _getImageUrl() {
  return imageSelected;
}

const _resetImage = () => {
  imageSelected = defaultImage;
  imageForm.style.backgroundImage = `url(${defaultImage})`;
};

module.exports = {
  setImage: _setImage,
  getImageUrl: _getImageUrl,
  resetImage: _resetImage,
  onAddImageForm: _onAddImageForm,
  fakeFileClick: _fakeFileClick
};
