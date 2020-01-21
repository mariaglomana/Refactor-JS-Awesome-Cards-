"use strict";

const constants = require("./constants");

const userName = document.querySelector(constants.userName);
const userJob = document.querySelector(constants.userJob);
const userEmail = document.querySelector(constants.userEmail);
const userTel = document.querySelector(constants.userTel);
const userLinkedin = document.querySelector(constants.userLinkedin);
const userGithub = document.querySelector(constants.userGithub);
const errorMessage = document.querySelector(constants.errorMessage);
const createCardButton = document.querySelector(constants.createCardButton);

function _nameValidation() {
  if (
    !/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(
      userName.value
    )
  ) {
    userName.nextElementSibling.innerHTML = "*Introduzca un nombre válido";
    return false;
  } else {
    userName.nextElementSibling.innerHTML = "";
    return true;
  }
}

function _jobValidation() {
  if (
    !/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(userJob.value)
  ) {
    userJob.nextElementSibling.innerHTML = "*Introduzca un puesto válido";
    return false;
  } else {
    userJob.nextElementSibling.innerHTML = "";
    return true;
  }
}

function _emailValidation() {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.value)) {
    userEmail.nextElementSibling.innerHTML = "*Introduzca un email válido";
    return false;
  } else {
    userEmail.nextElementSibling.innerHTML = "";
    return true;
  }
}

function _phoneValidation() {
  if (!/^[0-9]{9}/.test(userTel.value)) {
    userTel.nextElementSibling.innerHTML =
      "*El número de teléfono debe tener 9 dígitos";
    return false;
  } else {
    userTel.nextElementSibling.innerHTML = "";
    return true;
  }
}

function _checkFilledInputs() {
  if (
    _nameValidation() === false ||
    _jobValidation() === false ||
    _emailValidation() === false ||
    userLinkedin.value === "" ||
    userGithub.value === ""
  ) {
    createCardButton.disabled = true;
    errorMessage.classList.remove("hidden");
  } else {
    createCardButton.disabled = false;
    errorMessage.classList.add("hidden");
  }
}

module.exports = {
  nameValidation: _nameValidation,
  jobValidation: _jobValidation,
  emailValidation: _emailValidation,
  phoneValidation: _phoneValidation,
  checkFilledInputs: _checkFilledInputs
};
