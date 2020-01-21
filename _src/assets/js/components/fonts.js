'use strict';

const constants = require('./constants');

const font1 = document.querySelector(constants.font1);
const font2 = document.querySelector(constants.font2);
const font3 = document.querySelector(constants.font3);
const previewCardName = document.querySelector(constants.previewCardName);
const previewCardJob = document.querySelector(constants.previewCardJob);
let fontChosen;

//FONTS

function _getFont() {
  if (localStorage.getItem('font')) {
    fontChosen = localStorage.getItem('font');
    if (fontChosen === '1') {
      font1.setAttribute('checked', true);
    } else if (fontChosen === '2') {
      font2.setAttribute('checked', true);
    } else if (fontChosen === '3') {
      font3.setAttribute('checked', true);
    }
    applyFont();
  }
  else {
    font1.setAttribute('checked', true);
    applyFont();
  }
};

const chooseFont = (event) => {
  fontChosen = event.currentTarget.value;
  localStorage.setItem('font', fontChosen);
  applyFont();
};

const applyFont = () => {
  if (font1.checked) {
    _applyFont1();
  } else if (font2.checked) {
    applyFont2();
  } else {
    applyFont3();
  }
};

const _applyFont1 = () => {
  previewCardName.classList.add('fontMontserratBold');
  previewCardName.classList.remove('fontCherrySwashBold', 'fontKalamBold');
  previewCardJob.classList.add('fontMontserratRegular');
  previewCardJob.classList.remove('fontCherrySwashRegular', 'fontKalamRegular');
};

const applyFont2 = () => {
  previewCardName.classList.add('fontCherrySwashBold');
  previewCardName.classList.remove('fontMontserratBold', 'fontKalamBold');
  previewCardJob.classList.add('fontCherrySwashRegular');
  previewCardJob.classList.remove('fontMontserratRegular', 'fontKalamRegular');
};

const applyFont3 = () => {
  previewCardName.classList.add('fontKalamBold');
  previewCardName.classList.remove('fontMontserratBold', 'fontCherrySwashBold');
  previewCardJob.classList.add('fontKalamRegular');
  previewCardJob.classList.remove('fontMontserratRegular', 'fontCherrySwashRegular');
};

font1.addEventListener('click', chooseFont);
font2.addEventListener('click', chooseFont);
font3.addEventListener('click', chooseFont);

module.exports = {
  getFont: _getFont,
  applyFont1: _applyFont1,
};