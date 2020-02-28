import constants from './constants';

const imagePreview = document.querySelector(constants.imagePreview);
const DEFAULT_IMAGE = constants.defaultImage;
const previewCardName = document.querySelector(constants.previewCardName);
const previewCardHead = document.querySelector(constants.previewCardHead);
const previewCardJob = document.querySelector(constants.previewCardJob);
const phoneItem = document.querySelector(constants.phoneItem);
const emailItem = document.querySelector(constants.emailItem);
const linkedinItem = document.querySelector(constants.linkedinItem);
const githubItem = document.querySelector(constants.githubItem);
const phoneIcon = document.querySelector(constants.phoneIcon);
const emailIcon = document.querySelector(constants.emailIcon);
const linkedinIcon = document.querySelector(constants.linkedinIcon);
const githubIcon = document.querySelector(constants.githubIcon);
const iconItems = document.querySelectorAll(constants.iconItems);
const iconButtons = document.querySelectorAll(constants.iconButtons);

const paletteConfig = constants.paletteConfig;
const fontConfig = constants.fontConfig;
const DEFAULT_NAME = "Nombre Apellido";
const DEFAULT_JOB = "Front-end developer";

const removePaletteFromElement = (element, palette) => {
  element.classList.remove(
    palette.oldColorName1,
    palette.oldColorName2,
    palette.oldColorName3
  );
};

function setPreviewPalette(palette) {
  removePaletteFromElement(previewCardName, palette);

  previewCardName.classList.add(palette.colorName);

  previewCardHead.classList.remove(
    palette.oldColorHead1,
    palette.oldColorHead2,
    palette.oldColorHead3
  );
  previewCardHead.classList.add(palette.colorHead);

  for (const iconItem of iconItems) {
    removePaletteFromElement(iconItem, palette);
    iconItem.classList.add(palette.colorName);
  }
  for (const iconButton of iconButtons) {
    iconButton.style.borderColor = palette.borderColor;
  }
}

function setPreviewFont(font) {
  previewCardName.classList.add(font.f1);
  previewCardName.classList.remove(font.f2, font.f3);
  previewCardJob.classList.add(font.f1);
  previewCardJob.classList.remove(font.f2, font.f3);
}

function setPreviewName(name) {
  previewCardName.innerHTML = name ? name : DEFAULT_NAME;
}

function setPreviewJob(job) {
  previewCardJob.innerHTML = job ? job : DEFAULT_JOB;
}

function setPreviewPhone(phone) {
  if (phone) {
    phoneIcon.href = `tel:${phone}`;
    phoneItem.classList.remove("opacity");
  } else {
    phoneItem.classList.add("opacity");
  }
}

function setPreviewEmail(email) {
  if (email) {
    emailIcon.href = `tel:${email}`;
    emailItem.classList.remove("opacity");
  } else {
    emailItem.classList.add("opacity");
  }
}

function setImage(image) {
  const imagetToShow = image ? image : DEFAULT_IMAGE;
  imagePreview.style.backgroundImage = `url(${imagetToShow})`
}

const resetImage = () => {
  imagePreview.style.backgroundImage = `url(${DEFAULT_IMAGE})`;
};

function setPreviewLinkedin(linkedin) {
  if (linkedin) {
    linkedinIcon.href = `tel:${linkedin}`;
    linkedinItem.classList.remove("opacity");
  } else {
    linkedinItem.classList.add("opacity");
  }
}

function setPreviewGithub(github) {
  if (github) {
    githubIcon.href = `tel:${github}`;
    githubItem.classList.remove("opacity");
  } else {
    githubItem.classList.add("opacity");
  }
}

const setPreview = initialData => {
  const initialPalette = initialData.palette ? Number(initialData.palette) - 1 : 0;
  const initialFont = initialData.font ? Number(initialData.font) - 1 : 0;

  setPreviewPalette(paletteConfig[initialPalette]);
  setPreviewFont(fontConfig[initialFont]);
  setPreviewName(initialData.name);
  setPreviewJob(initialData.job);
  setPreviewPhone(initialData.phone);
  setPreviewEmail(initialData.email);
  setImage(initialData.previewImage);
  setPreviewLinkedin(initialData.linkedin);
  setPreviewGithub(initialData.github);
  setImage(initialData.previewCard);
};

export default {
  setImage,
  resetImage,
  setPreviewPalette,
  setPreviewFont,
  setPreview
};
