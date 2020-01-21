"use strict";

const constants = require("./constants");
const validation = require("./validation");

const designContainer = document.querySelector(constants.designContainer);
const fillInContainer = document.querySelector(constants.fillInContainer);
const shareContainer = document.querySelector(constants.shareContainer);
const arrowDesign = document.querySelector(constants.arrowDesign);
const arrowFillIn = document.querySelector(constants.arrowFillIn);
const arrowShare = document.querySelector(constants.arrowShare);
const design = document.querySelector(constants.design);
const fillIn = document.querySelector(constants.fillIn);
const share = document.querySelector(constants.share);
const defaultImage = constants.defaultImage;
const twitterContainer = document.querySelector(constants.twitterContainer);

// start page functions

arrowDesign.classList.add("rotate");
fillIn.classList.add("hidden");
share.classList.add("hidden");

function hideDesign() {
  design.classList.toggle("hidden");
  fillIn.classList.add("hidden");
  share.classList.add("hidden");
  arrowDesign.classList.toggle("rotate");
  arrowFillIn.classList.remove("rotate");
  arrowShare.classList.remove("rotate");
}
designContainer.addEventListener("click", hideDesign);

function toggleFillIn() {
  fillIn.classList.toggle("hidden");
  design.classList.add("hidden");
  share.classList.add("hidden");
  arrowDesign.classList.remove("rotate");
  arrowFillIn.classList.toggle("rotate");
  arrowShare.classList.remove("rotate");
}
fillInContainer.addEventListener("click", toggleFillIn);

function toggleShare() {
  share.classList.toggle("hidden");
  design.classList.add("hidden");
  fillIn.classList.add("hidden");
  arrowShare.classList.toggle("rotate");
  arrowDesign.classList.remove("rotate");
  arrowFillIn.classList.remove("rotate");
}
shareContainer.addEventListener("click", toggleShare);
shareContainer.addEventListener("click", validation.checkFilledInputs);
twitterContainer.classList.add("hidden");
