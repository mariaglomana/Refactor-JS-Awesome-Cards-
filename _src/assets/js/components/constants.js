"use strict";

const _paletteConfig = [
  {
    colorName: "darkGreenBlue",
    colorHead: "borderPalette1",
    borderColor: "#a2deaf",
    oldColorName1: "slate",
    oldColorName2: "jungleGreen",
    oldColorName3: "driedBlood",
    oldColorHead1: "borderPalette3",
    oldColorHead2: "borderPalette4",
    oldColorHead3: "borderPalette2"
  },
  {
    colorName: "driedBlood",
    colorHead: "borderPalette2",
    borderColor: "#e95626",
    oldColorName1: "slate",
    oldColorName2: "jungleGreen",
    oldColorName3: "darkGreenBlue",
    oldColorHead1: "borderPalette3",
    oldColorHead2: "borderPalette4",
    oldColorHead3: "borderPalette1"
  },
  {
    colorName: "slate",
    colorHead: "borderPalette3",
    borderColor: "#a0c0cf",
    oldColorName1: "driedBlood",
    oldColorName2: "jungleGreen",
    oldColorName3: "darkGreenBlue",
    oldColorHead1: "borderPalette2",
    oldColorHead2: "borderPalette4",
    oldColorHead3: "borderPalette1"
  },
  {
    colorName: "jungleGreen",
    colorHead: "borderPalette4",
    borderColor: "#f15f06",
    oldColorName1: "driedBlood",
    oldColorName2: "slate",
    oldColorName3: "darkGreenBlue",
    oldColorHead1: "borderPalette2",
    oldColorHead2: "borderPalette3",
    oldColorHead3: "borderPalette1"
  }
];

const _fontConfig = [
  {
    f1: "fontMontserratBold",
    f2: "fontCherrySwashBold",
    f3: "fontKalamBold"
  },
  {
    f1: "fontCherrySwashBold",
    f2: "fontMontserratBold",
    f3: "fontKalamBold"
  },
  {
    f1: "fontKalamBold",
    f2: "fontCherrySwashBold",
    f3: "fontMontserratBold"
  }
];

module.exports = {
  designContainer: "#designContainer",
  fillInContainer: "#fillInContainer",
  shareContainer: "#shareContainer",
  arrowDesign: "#arrowDesign",
  arrowFillIn: "#arrowFillIn",
  arrowShare: "#arrowShare",
  design: "#design",
  fillIn: "#fillIn",
  share: "#share",
  palette1: "#fieldset__design--palette-1",
  palette2: "#fieldset__design--palette-2",
  palette3: "#fieldset__design--palette-3",
  palette4: "#fieldset__design--palette-4",
  font1: "#fieldset__design--font-1",
  font2: "#fieldset__design--font-2",
  font3: "#fieldset__design--font-3",
  userName: "#name",
  userJob: "#job-title",
  userEmail: "#email",
  userPhone: "#tel",
  userLinkedin: "#linkedin",
  userGithub: "#github",
  createCardButton: "#createCardButton",
  errorMessage: ".error-message",
  twitterContainer: "#twitterContainer",
  twitterBtn: "#twitterBtn",
  twitterMessage: "#twitterMessage",
  linkedInBtn: "#linkedInBtn",
  previewCard: ".preview_card",
  previewCardHead: ".preview_card-head",
  previewCardName: ".preview_card-name",
  previewCardJob: ".preview_card-job",
  phoneIcon: "#phone-icon",
  emailIcon: "#email-icon",
  linkedinIcon: "#linkedin-icon",
  githubIcon: "#github-icon",
  phoneItem: ".item_phone",
  emailItem: ".item_email",
  linkedinItem: ".item_linkedin",
  githubItem: ".item_github",
  iconItems: "#preview_card-icons",
  iconButtons: ".item_btn",
  imagePreview: ".js__profile-image",
  imageForm: ".js__profile-preview",
  uploadBtn: ".js__profile-trigger",
  fileField: ".js__profile-upload-btn",
  defaultImage: "./assets/images/portrait.jpg",
  resetButton: "#resetButton",
  paletteConfig: _paletteConfig,
  fontConfig: _fontConfig
};
