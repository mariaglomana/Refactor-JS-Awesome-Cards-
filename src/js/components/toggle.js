
import constants from './constants';
import validation from './validation';

const userName = document.querySelector(constants.userName);
const userJob = document.querySelector(constants.userJob);
const userEmail = document.querySelector(constants.userEmail);
const userLinkedin = document.querySelector(constants.userLinkedin);
const userGithub = document.querySelector(constants.userGithub);

const designContainer = document.querySelector(constants.designContainer);
const fillInContainer = document.querySelector(constants.fillInContainer);
const shareContainer = document.querySelector(constants.shareContainer);
const arrowDesign = document.querySelector(constants.arrowDesign);
const arrowFillIn = document.querySelector(constants.arrowFillIn);
const arrowShare = document.querySelector(constants.arrowShare);
const design = document.querySelector(constants.design);
const fillIn = document.querySelector(constants.fillIn);
const share = document.querySelector(constants.share);

// start page functions
arrowDesign.classList.add("rotate");
fillIn.classList.add("hidden");
share.classList.add("hidden");

const toggleDesign = () => {
  toggleGeneric(design, arrowDesign, fillIn, share, arrowFillIn, arrowShare);
};

const toggleFillIn = () => {
  toggleGeneric(fillIn, arrowFillIn, design, share, arrowDesign, arrowShare);
};

const toggleShare = () => {
  toggleGeneric(share, arrowShare, design, fillIn, arrowDesign, arrowFillIn);
  validation.checkFilledInputs(userName, userJob, userEmail, userLinkedin, userGithub);
};

const toggleGeneric = (toggleEl1, toggleEl2, hiddenEl1, hiddenEl2, removeEl1, removeEl2) => {
  toggleEl1.classList.toggle("hidden");
  toggleEl2.classList.toggle("rotate");

  hiddenEl1.classList.add("hidden");
  hiddenEl2.classList.add("hidden");

  removeEl1.classList.remove("rotate");
  removeEl2.classList.remove("rotate");
};

designContainer.addEventListener("click", toggleDesign);
shareContainer.addEventListener("click", toggleShare);
fillInContainer.addEventListener("click", toggleFillIn);
