'use strict';

const fetch = require('../services/fetch');


// start page functions

arrowDesign.classList.add('rotate');
fillIn.classList.add('hidden');
share.classList.add('hidden');

function hideDesign() {
  design.classList.toggle('hidden');
  fillIn.classList.add('hidden');
  share.classList.add('hidden');
  arrowDesign.classList.toggle('rotate');
  arrowFillIn.classList.remove('rotate');
  arrowShare.classList.remove('rotate');

}
designContainer.addEventListener('click', hideDesign);

function toggleFillIn() {
  fillIn.classList.toggle('hidden');
  design.classList.add('hidden');
  share.classList.add('hidden');
  arrowDesign.classList.remove('rotate');
  arrowFillIn.classList.toggle('rotate');
  arrowShare.classList.remove('rotate');

}
fillInContainer.addEventListener('click', toggleFillIn);

function toggleShare() {
  share.classList.toggle('hidden');
  design.classList.add('hidden');
  fillIn.classList.add('hidden');
  arrowShare.classList.toggle('rotate');
  arrowDesign.classList.remove('rotate');
  arrowFillIn.classList.remove('rotate');
}
shareContainer.addEventListener('click', toggleShare);
shareContainer.addEventListener('click', fetch.checkFilledInputs)
twitterContainer.classList.add('hidden');
