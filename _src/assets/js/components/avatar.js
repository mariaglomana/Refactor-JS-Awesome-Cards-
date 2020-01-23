"use strict";

const constants = require("./constants");

const fr = new FileReader();
const uploadBtn = document.querySelector(constants.uploadBtn);
const fileField = document.querySelector(constants.fileField);
const profileImage = document.querySelector(constants.profileImage);
const profilePreview = document.querySelector(constants.profilePreview);
const defaultImage = constants.defaultImage;

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  localStorage.setItem("image", fr.result);
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}

function _setImage(image) {
  if (image) {
    profileImage.style.backgroundImage = `url(${image})`;
    profilePreview.style.backgroundImage = `url(${image})`;
  } else {
    profileImage.style.backgroundImage = `url(${defaultImage})`;
    profilePreview.style.backgroundImage = `url(${defaultImage})`;
  }
}

function _getImageUrl() {
  let photoSend;
  if (!fr.result && !localStorage.getItem("image")) {
    photoSend = defaultImage;
  } else if (!fr.result && localStorage.getItem("image")) {
    photoSend = localStorage.getItem("image");
  } else {
    photoSend = fr.result;
    localStorage.setItem("image", photoSend);
  }
  return photoSend;
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener("click", fakeFileClick);
fileField.addEventListener("change", getImage);

module.exports = {
  setImage: _setImage,
  getImageUrl: _getImageUrl
};
