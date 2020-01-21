"use strict";

const constants = require("./constants");
const avatar = require("./avatar");
const palettes = require("./palettes");
const fonts = require("./fonts");

// const api = require("../services/api");
const userName = document.querySelector(constants.userName);
const userJob = document.querySelector(constants.userJob);
const userEmail = document.querySelector(constants.userEmail);
const userTel = document.querySelector(constants.userTel);
const userLinkedin = document.querySelector(constants.userLinkedin);
const userGithub = document.querySelector(constants.userGithub);

const createCardButton = document.querySelector(constants.createCardButton);
const twitterContainer = document.querySelector(constants.twitterContainer);
const twitterBtn = document.querySelector(constants.twitterBtn);
const twitterMessage = document.querySelector(constants.twitterMessage);
const linkedInBtn = document.querySelector(constants.linkedInBtn);
const paletteChosen = palettes.paletteChosen;
const fontChosen = fonts.fontChosen;

let photoSend = "";

function sendForm(event) {
  event.preventDefault();

  if (!avatar.fr.result && !localStorage.getItem("image")) {
    photoSend = defaultImage;
  } else if (!avatar.fr.result && localStorage.getItem("image")) {
    photoSend = localStorage.getItem("image");
  } else {
    photoSend = avatar.fr.result;
    localStorage.setItem("image", photoSend);
  }
  //creo json
  const cardData = {
    palette: paletteChosen,
    font: fontChosen,
    name: userName.value,
    job: userJob.value,
    phone: userTel.value,
    email: userEmail.value,
    linkedin: userLinkedin.value,
    github: userGithub.value,
    photo: photoSend
  };
  //petición
  getCardFromApi();
}
const getCardFromApi = cardData => {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(cardData),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => showURL(data))
    .catch(function(error) {
      console.log(error);
    });
};

function showURL(data) {
  const twitterURL = document.createElement("span");
  twitterURL.style.textAlign = "center";
  if (data.success) {
    twitterURL.innerHTML = `<a class="twitter-url" href=${data.cardURL} style="color:#e17334" target="_blank">${data.cardURL}</a>`;
    twitterMessage.insertAdjacentElement("afterend", twitterURL);
    twitterContainer.classList.remove("hidden");
    createCardButton.setAttribute("disabled", true);
    shareTwitter(data.cardURL);
  } else {
    twitterURL.innerHTML = "ERROR" + data.error;
  }
}
function shareTwitter(url) {
  const twitterText = encodeURIComponent(
    "He creado esta tarjeta con Awesome Profile Cards. ¡Échale un vistazo!"
  );
  const twitterHashtag = encodeURIComponent(
    "adalab,adalaber,frontEnd,awesomeCards"
  );
  twitterBtn.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${url}&hashtags=${twitterHashtag}`;
  linkedInBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
}

createCardButton.addEventListener("click", sendForm);

module.exports = {};
