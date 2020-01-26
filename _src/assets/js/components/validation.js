"use strict";

const constants = require("./constants");

const errorMessage = document.querySelector(constants.errorMessage);
const createCardButton = document.querySelector(constants.createCardButton);

function isValidString (value) {
  return  /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(value);
}

function isEmailValid (value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

function isPhoneValid (value) {
  return /^[0-9]{9}/.test(value);
}

function isEmptyString (value) {
  return value === "";
}
function isNotEmptyString (value) {
  return !isEmptyString(value);
}

//Revisar: añadir parámetro para personalizar mensaje error
function _genericTextValidation(element) {
  if (isValidString(element.value)) {
    element.nextElementSibling.innerHTML = "";
    return true;
  } else {
    element.nextElementSibling.innerHTML = "* Revise este campo";
    return false;

  }
}

function _emailValidation(element) {
  if (isEmailValid(element.value)) {
    element.nextElementSibling.innerHTML = "";
    return true;
  } else {
    element.nextElementSibling.innerHTML = "*Introduzca un email válido";
    return false;
  }
}

function _phoneValidation(element) {
  if (isPhoneValid(element.value) || isEmptyString(element.value)) {
    element.nextElementSibling.innerHTML = "";
    return true;
  } else {
    element.nextElementSibling.innerHTML = "*El número de teléfono debe tener 9 dígitos";
    return false;
  }
}

function isFormValid(name, job, email, linkedin, github) {
  return  _genericTextValidation(name) &&
    _genericTextValidation(job) &&
    _emailValidation(email) &&
    isNotEmptyString(linkedin.value) &&
    isNotEmptyString(github.value);
}

function _checkFilledInputs(name, job, email, linkedin, github) {
  if (isFormValid(name, job, email, linkedin, github)) {
    createCardButton.disabled = false;
    errorMessage.classList.add("hidden");
  } else {
    createCardButton.disabled = true;
    errorMessage.classList.remove("hidden");
  }
}

module.exports = {
  genericTextValidation: _genericTextValidation,
  emailValidation: _emailValidation,
  phoneValidation: _phoneValidation,
  checkFilledInputs: _checkFilledInputs
};
