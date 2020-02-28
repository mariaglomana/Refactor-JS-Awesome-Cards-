import "./scss/main.scss";

import storage from "./js/components/storage";
import constants from "./js/components/constants";
import toggle from "./js/components/toggle";
import palettes from "./js/components/palettes";
import form from "./js/components/form";
import validation from "./js/components/validation";
import fonts from "./js/components/fonts";
import share from "./js/components/share";
import previewCard from "./js/components/previewCard";

const resetButton = document.querySelector(constants.resetButton);

window.addEventListener("load", () => {
  const localStorage = storage.getLocalStorage();

  palettes.setPalette(localStorage.palette);
  fonts.setFont(localStorage.font);
  form.setName(localStorage.name);
  form.setJob(localStorage.job);
  form.setPhone(localStorage.phone);
  form.setEmail(localStorage.email);
  form.setLinkedin(localStorage.linkedin);
  form.setGithub(localStorage.github);
  form.setImage(localStorage.previewCard);
  previewCard.setPreview(localStorage);
});

resetButton.addEventListener("click", () => {
  palettes.resetPalette();
  fonts.resetFont();
  form.resetFormData();
  previewCard.resetImage();
});
