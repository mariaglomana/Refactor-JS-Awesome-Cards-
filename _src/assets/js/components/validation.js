// 'use strict';

// const constants = require('./constants');
// const palettes = require('./palettes');
// const fonts = require('./fonts');
// const avatar = require('./avatar');

// const userName = document.querySelector(constants.userName);
// const userJob = document.querySelector(constants.userJob);
// const userEmail = document.querySelector(constants.userEmail);
// const userTel = document.querySelector(constants.userTel);
// const userLinkedin = document.querySelector(constants.userLinkedin);
// const userGithub = document.querySelector(constants.userGithub);
// const previewCardName = document.querySelector(constants.previewCardName);
// const previewCardJob = document.querySelector(constants.previewCardJob);
// const phoneIcon = document.querySelector(constants.phoneIcon);
// const emailIcon = document.querySelector(constants.emailIcon);
// const linkedinIcon = document.querySelector(constants.linkedinIcon);
// const githubIcon = document.querySelector(constants.githubIcon);
// const phoneItem = document.querySelector(constants.phoneItem);
// const emailItem = document.querySelector(constants.emailItem);
// const linkedinItem = document.querySelector(constants.linkedinItem);
// const githubItem = document.querySelector(constants.githubItem);

// //INPUTS
// function addName() {
//   if (userName.value !== '') {
//     nameValidation();
//     if (nameValidation() === true) {
//       previewCardName.innerHTML = userName.value;
//       localStorage.setItem('name', userName.value);
//     }
//   } else {
//     previewCardName.innerHTML = "Nombre Apellido";
//     localStorage.removeItem('name');
//   }
// }

// function addJob() {
//   if (userJob.value !== '') {
//     jobValidation();
//     if (jobValidation() === true) {
//       previewCardJob.innerHTML = userJob.value;
//       localStorage.setItem('job', userJob.value);
//     }
//   } else {
//     previewCardJob.innerHTML = "Front-end developer";
//     localStorage.removeItem('job');
//   }
// }

// function addPhone() {
//   if (userTel.value !== '') {
//     phoneValidation();
//     if (phoneValidation() === true) {
//       phoneIcon.href = `tel:${userTel.value}`;
//       phoneItem.classList.remove('opacity');
//       localStorage.setItem('phone', userTel.value);
//     } else {
//       userTel.nextElementSibling.innerHTML = '*El número de teléfono debe tener 9 dígitos';
//     }
//   } else {
//     phoneItem.classList.add('opacity');
//     localStorage.removeItem('phone');
//   }
// }

// function addEmail() {
//   if (userEmail.value !== '') {
//     emailValidation();
//     if (emailValidation() === true) {
//       emailIcon.href = `mailto: ${userEmail.value}`;
//       emailItem.classList.remove('opacity');
//       localStorage.setItem('email', userEmail.value);
//     } else {
//       userEmail.nextElementSibling.innerHTML = '*Introduzca un email válido';
//     }
//   } else {
//     emailItem.classList.add('opacity');
//     localStorage.removeItem('email');
//   }
// }

// function addLinkedin() {
//   if (userLinkedin.value !== '') {
//     linkedinIcon.href = `https://www.linkedin.com/in/${userLinkedin.value}`;
//     linkedinItem.classList.remove('opacity');
//     localStorage.setItem('linkedin', userLinkedin.value);
//   } else {
//     linkedinItem.classList.add('opacity');
//     localStorage.removeItem('linkedin');
//   }
// }

// function addGithub() {
//   if (userGithub.value !== '') {
//     githubIcon.href = `http://github.com/${userGithub.value}`;
//     githubItem.classList.remove('opacity');
//     localStorage.setItem('github', userGithub.value);
//   } else {
//     githubItem.classList.add('opacity');
//     localStorage.removeItem('github');
//   }
// }

// userName.addEventListener('keyup', addName);
// userJob.addEventListener('keyup', addJob);
// userTel.addEventListener('keyup', addPhone);
// userEmail.addEventListener('keyup', addEmail);
// userLinkedin.addEventListener('keyup', addLinkedin);
// userGithub.addEventListener('keyup', addGithub);

// //FORM VALIDATION

// function _nameValidation() {
//   if (!(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(userName.value))) {
//     userName.nextElementSibling.innerHTML = '*Introduzca un nombre válido';
//     return false;
//   } else {
//     userName.nextElementSibling.innerHTML = '';
//     return true;
//   }
// };

// function _jobValidation() {
//   if (!(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(userJob.value))) {
//     userJob.nextElementSibling.innerHTML = '*Introduzca un puesto válido';
//     return false;
//   } else {
//     userJob.nextElementSibling.innerHTML = '';
//     return true;
//   }
// };

// function _emailValidation() {
//   if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.value))) {
//     userEmail.nextElementSibling.innerHTML = '*Introduzca un email válido';
//     return false;
//   } else {
//     userEmail.nextElementSibling.innerHTML = '';
//     return true;
//   }
// };

// function _phoneValidation() {
//   if (!(/^[0-9]{9}/.test(userTel.value))) {
//     userTel.nextElementSibling.innerHTML = '*El número de teléfono debe tener 9 dígitos';
//     return false
//   } else {
//     userTel.nextElementSibling.innerHTML = '';
//     return true;
//   }
// }

// function getPersData() {
//   palettes.getPalette();
//   fonts.getFont();
//   getName();
//   getJob();
//   avatar.getProfileImage();
//   getPhone();
//   getEmail();
//   getLinkedin();
//   getGithub();
// }

// function getName() {
//   if (localStorage.getItem('name')) {
//     userName.value = localStorage.getItem('name');
//     previewCardName.innerHTML = localStorage.getItem('name');
//   }
//   else {
//     userName.value = '';
//   }
// }

// function getJob() {
//   if (localStorage.getItem('job')) {
//     userJob.value = localStorage.getItem('job');
//     previewCardJob.innerHTML = localStorage.getItem('job');
//   }
//   else {
//     userJob.value = '';
//   }
// }

// function getPhone() {
//   if (localStorage.getItem('phone')) {
//     userTel.value = localStorage.getItem('phone');
//     phoneIcon.href = `tel:${userTel.value}`;
//     phoneItem.classList.remove('opacity');
//   }
//   else {
//     userTel.value = '';
//   }
// }

// function getEmail() {
//   if (localStorage.getItem('email')) {
//     userEmail.value = localStorage.getItem('email');
//     emailIcon.href = `tel:${userEmail.value}`;
//     emailItem.classList.remove('opacity');
//   }
//   else {
//     userEmail.value = '';
//   }
// }

// function getLinkedin() {
//   if (localStorage.getItem('linkedin')) {
//     userLinkedin.value = localStorage.getItem('linkedin');
//     linkedinIcon.href = `tel:${userLinkedin.value}`;
//     linkedinItem.classList.remove('opacity');
//   }
//   else {
//     userLinkedin.value = '';
//   }
// }

// function getGithub() {
//   if (localStorage.getItem('github')) {
//     userGithub.value = localStorage.getItem('github');
//     githubIcon.href = `tel:${userGithub.value}`;
//     githubItem.classList.remove('opacity');
//   }
//   else {
//     userGithub.value = '';
//   }
// }

// window.addEventListener('load', getPersData);

// module.exports = {
//   nameValidation: _nameValidation,
//   jobValidation: _jobValidation,
//   emailValidation: _emailValidation,
//   // phoneValidation: _phoneValidation,

// };
