"use strict";

const _getCardFromApi = cardData => {
  return fetch(
    "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",
    {
      method: "POST",
      body: JSON.stringify(cardData),
      headers: {
        "content-type": "application/json"
      }
    }
  ).then(response => response.json());
};

module.exports = {
  getCardFromApi: _getCardFromApi
};
