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
const twitterContainer = document.querySelector(constants.twitterContainer);

// start page functions

arrowDesign.classList.add("rotate");
fillIn.classList.add("hidden");
share.classList.add("hidden");

function hideDesign() {
  toggleGeneric(design, arrowDesign, fillIn, share, arrowFillIn, arrowShare);
}

function toggleFillIn() {
  toggleGeneric(fillIn, arrowFillIn, design, share, arrowDesign, arrowShare);
}

function toggleShare() {
  toggleGeneric(share, arowShare, design, fillIn, arrowDesign, arrowFillIn);
}

function toggleGeneric(
  toggleEl1,
  toggleEl2,
  hiddenEl1,
  hiddenEl2,
  removeEl1,
  removeEl2
) {
  toggleEl1.classList.toggle("hidden");
  toggleEl2.classList.toggle("rotate");

  hiddenEl1.classList.add("hidden");
  hiddenEl2.classList.add("hidden");

  removeEl1.classList.remove("rotate");
  removeEl2.classList.remove("rotate");
}

designContainer.addEventListener("click", hideDesign);
shareContainer.addEventListener("click", toggleShare);
shareContainer.addEventListener("click", validation.checkFilledInputs);
fillInContainer.addEventListener("click", toggleFillIn);
twitterContainer.classList.add("hidden");
