import constants from './constants';
import form from './form';
import api from '../services/api';

const createCardButton = document.querySelector(constants.createCardButton);
const twitterContainer = document.querySelector(constants.twitterContainer);
const twitterBtn = document.querySelector(constants.twitterBtn);
const twitterMessage = document.querySelector(constants.twitterMessage);
const linkedInBtn = document.querySelector(constants.linkedInBtn);

const twitterText = encodeURIComponent(
  "He creado esta tarjeta con Awesome Profile Cards. ¡Échale un vistazo!"
);
const twitterHashtag = encodeURIComponent(
  "adalab,adalaber,frontEnd,awesomeCards"
);

function sendForm(event) {
  event.preventDefault();
  const cardData = form.getFormData();
  api
    .getCardFromApi(cardData)
    .then(data => renderUrlCard(data))
    .catch(function(error) {
      console.log(error);
    });
}

function renderUrlCard(data) {
  updateCardBtnStyle(data);
  renderTwitterBtn(data);
  renderLinkedinBtn(data);
}

function updateCardBtnStyle(data) {
  if (data.success) {
    createCardButton.setAttribute("disabled", true);
  }
}

function renderTwitterBtn(data) {
  const twitterURL = document.createElement("span");
  twitterURL.style.textAlign = "center";
  if (data.success) {
    const url = data.cardURL;
    twitterURL.innerHTML = `<a class="twitter-url" href=${url} style="color:#e17334" target="_blank">${url}</a>`;
    twitterMessage.insertAdjacentElement("afterend", twitterURL);
    twitterContainer.classList.remove("hidden");
    twitterBtn.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${url}&hashtags=${twitterHashtag}`;
  } else {
    twitterURL.innerHTML = "ERROR" + data.error;
  }
}

function renderLinkedinBtn(data) {
  if (data.success) {
    linkedInBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${data.cardURL}`;
  } else {
    linkedInBtn.href = "";
  }
}

createCardButton.addEventListener("click", sendForm);
