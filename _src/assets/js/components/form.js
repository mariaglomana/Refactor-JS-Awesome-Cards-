"use strict";

const constants = require("./constants");
const palettes = require("./palettes");
const fonts = require("./fonts");
const avatar = require("./avatar");
const validation = require("./validation");

const userName = document.querySelector(constants.userName);
const userJob = document.querySelector(constants.userJob);
const userEmail = document.querySelector(constants.userEmail);
const userPhone = document.querySelector(constants.userPhone);
const userLinkedin = document.querySelector(constants.userLinkedin);
const userGithub = document.querySelector(constants.userGithub);

const previewCardName = document.querySelector(constants.previewCardName);
const previewCardJob = document.querySelector(constants.previewCardJob);
const phoneIcon = document.querySelector(constants.phoneIcon);
const emailIcon = document.querySelector(constants.emailIcon);
const linkedinIcon = document.querySelector(constants.linkedinIcon);
const githubIcon = document.querySelector(constants.githubIcon);
const phoneItem = document.querySelector(constants.phoneItem);
const emailItem = document.querySelector(constants.emailItem);
const linkedinItem = document.querySelector(constants.linkedinItem);
const githubItem = document.querySelector(constants.githubItem);



//INPUTS
function addName() {
  if (userName.value !== "") {
    const valName = validation.genericTextValidation(userName);
    if (valName) {
      previewCardName.innerHTML = userName.value;
      localStorage.setItem("name", userName.value);
    }
  } else {
    previewCardName.innerHTML = "Nombre Apellido";
    localStorage.removeItem("name");
  }
}

function addJob() {
  if (userJob.value !== "") {
    previewCardJob.innerHTML = userJob.value;
    const valJob = validation.genericTextValidation(userJob);
    // validation.jobValidation();
    if (valJob) {
      localStorage.setItem("job", userJob.value);
    }
  } else {
    previewCardJob.innerHTML = "Front-end developer";
    localStorage.removeItem("job");
  }
}

function addPhone() {
  const validPhone = validation.phoneValidation(userPhone);
  if (validPhone) {
    localStorage.setItem("phone", userPhone.value);
  }

  if (userPhone.value !== "") {
    phoneIcon.href = `tel:${userPhone.value}`;
    phoneItem.classList.remove("opacity");
    
  } else {
    phoneItem.classList.add("opacity");
    localStorage.removeItem("phone");
  }
}

function addEmail() {
  if (userEmail.value !== "") {
    emailIcon.href = `mailto: ${userEmail.value}`;
    emailItem.classList.remove("opacity");
    const validEmail = validation.emailValidation(userEmail);
    if (validEmail) {
      localStorage.setItem("email", userEmail.value);
    }
  } else {
    emailItem.classList.add("opacity");
    localStorage.removeItem("email");
  }
}

function addLinkedin() {
  if (userLinkedin.value !== "") {
    linkedinIcon.href = `https://www.linkedin.com/in/${userLinkedin.value}`;
    linkedinItem.classList.remove("opacity");
    localStorage.setItem("linkedin", userLinkedin.value);
  } else {
    linkedinItem.classList.add("opacity");
    localStorage.removeItem("linkedin");
  }
}

function addGithub() {
  if (userGithub.value !== "") {
    githubIcon.href = `http://github.com/${userGithub.value}`;
    githubItem.classList.remove("opacity");
    localStorage.setItem("github", userGithub.value);
  } else {
    githubItem.classList.add("opacity");
    localStorage.removeItem("github");
  }
}

userName.addEventListener("keyup", addName);
userJob.addEventListener("keyup", addJob);
userPhone.addEventListener("keyup", addPhone);
userEmail.addEventListener("keyup", addEmail);
userLinkedin.addEventListener("keyup", addLinkedin);
userGithub.addEventListener("keyup", addGithub);

function _setName(name) {
  if (!name) {
    userName.value = "";
  } else {
    userName.value = name;
    previewCardName.innerHTML = name;
  }
}

function _setJob(job) {
  if (!job) {
    userJob.value = "";
  } else {
    userJob.value = job;
    previewCardJob.innerHTML = job;
  }
}

function _setPhone(phone) {
  if (!phone) {
    userPhone.value = "";
  } else {
    userPhone.value = phone;
    phoneIcon.href = `tel:${userPhone.value}`;
    phoneItem.classList.remove("opacity");
  }
}

function _setEmail(email) {
  if (!email) {
    userEmail.value = "";
  } else {
    userEmail.value = email;
    emailIcon.href = `tel:${userEmail.value}`;
    emailItem.classList.remove("opacity");
  }
}

function _setLinkedin(linkedin) {
  if (!linkedin) {
    userLinkedin.value = "";
  } else {
    userLinkedin.value = linkedin;
    linkedinIcon.href = `tel:${userLinkedin.value}`;
    linkedinItem.classList.remove("opacity");
  }
}

function _setGithub(github) {
  if (!github) {
    userGithub.value = "";
  } else {
    userGithub.value = github;
    githubIcon.href = `tel:${userGithub.value}`;
    githubItem.classList.remove("opacity");
  }
}

function _getName() {
  return userName.value;
}

function _getJob() {
  return userJob.value;
}

function _getPhone() {
  return userPhone.value;
}

function _getEmail() {
  return userEmail.value;
}

function _getLinkedin() {
  return userLinkedin.value;
}

function _getGithub() {
  return userGithub.value;
}

function _getFormData() {
  return {
    palette: palettes.getChosenPalette(),
    font: fonts.getChosenFont(),
    name: _getName(),
    job: _getJob(),
    phone: _getPhone(),
    email: _getEmail(),
    linkedin: _getLinkedin(),
    github: _getGithub(),
    photo: avatar.getImageUrl()
  };
}

module.exports = {
  getFormData: _getFormData,
  setName: _setName,
  setJob: _setJob,
  setPhone: _setPhone,
  setEmail: _setEmail,
  setLinkedin: _setLinkedin,
  setGithub: _setGithub
};
