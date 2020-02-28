import constants from "./constants";
import previewCard from "./previewCard";

let imageSelected;

const fr = new FileReader();
const imageForm = document.querySelector(constants.imageForm);
const fileField = document.querySelector(constants.fileField);
const defaultImage = constants.defaultImage;

function onAddImageForm(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  imageForm.style.backgroundImage = `url(${fr.result})`;
  localStorage.setItem("image", fr.result);
  setImage(fr.result);
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}

function setImage(image) {
  imageSelected = image ? image : defaultImage;
  imageForm.style.backgroundImage = `url(${imageSelected})`;
  previewCard.setImage(imageSelected);
}

function getImageUrl() {
  return imageSelected;
}

const resetImage = () => {
  imageSelected = defaultImage;
  imageForm.style.backgroundImage = `url(${defaultImage})`;
};

export default {
  setImage,
  getImageUrl,
  resetImage,
  onAddImageForm,
  fakeFileClick
};
