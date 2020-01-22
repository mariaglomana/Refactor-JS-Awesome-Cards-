"use strict";
const designContainer = document.querySelector("#designContainer"),
  fillInContainer = document.querySelector("#fillInContainer"),
  shareContainer = document.querySelector("#shareContainer"),
  arrowDesign = document.querySelector("#arrowDesign"),
  arrowFillIn = document.querySelector("#arrowFillIn"),
  arrowShare = document.querySelector("#arrowShare"),
  design = document.querySelector("#design"),
  fillIn = document.querySelector("#fillIn"),
  share = document.querySelector("#share"),
  palette1 = document.querySelector("#fieldset__design--palette-1"),
  palette2 = document.querySelector("#fieldset__design--palette-2"),
  palette3 = document.querySelector("#fieldset__design--palette-3"),
  palette4 = document.querySelector("#fieldset__design--palette-4");
let chosenPalette = "";
const font1 = document.querySelector("#fieldset__design--font-1"),
  font2 = document.querySelector("#fieldset__design--font-2"),
  font3 = document.querySelector("#fieldset__design--font-3");
let chosenFont = "";
const inputElements = document.querySelectorAll(".input"),
  userName = document.querySelector("#name"),
  userJob = document.querySelector("#job-title"),
  userEmail = document.querySelector("#email"),
  userTel = document.querySelector("#tel"),
  userLinkedin = document.querySelector("#linkedin"),
  userGithub = document.querySelector("#github"),
  createCardButton = document.querySelector("#createCardButton"),
  errorMessage = document.querySelector(".error-message"),
  twitterContainer = document.querySelector("#twitterContainer"),
  twitterBtn = document.querySelector("#twitterBtn"),
  twitterMessage = document.querySelector("#twitterMessage"),
  linkedInBtn = document.querySelector("#linkedInBtn"),
  defaultImage = "./assets/images/portrait.jpg",
  previewCardHead = document.querySelector(".preview_card-head"),
  previewCardName = document.querySelector(".preview_card-name"),
  previewCardJob = document.querySelector(".preview_card-job"),
  phoneIcon = document.querySelector("#phone-icon"),
  emailIcon = document.querySelector("#email-icon"),
  linkedinIcon = document.querySelector("#linkedin-icon"),
  githubIcon = document.querySelector("#github-icon"),
  phoneItem = document.querySelector(".item_phone"),
  emailItem = document.querySelector(".item_email"),
  linkedinItem = document.querySelector(".item_linkedin"),
  githubItem = document.querySelector(".item_github"),
  iconItems = document.querySelectorAll("#preview_card-icons"),
  iconButtons = document.querySelectorAll(".item_btn");
function hideDesign() {
  design.classList.toggle("hidden"),
    fillIn.classList.add("hidden"),
    share.classList.add("hidden"),
    arrowDesign.classList.toggle("rotate"),
    arrowFillIn.classList.remove("rotate"),
    arrowShare.classList.remove("rotate");
}
function toggleFillIn() {
  fillIn.classList.toggle("hidden"),
    design.classList.add("hidden"),
    share.classList.add("hidden"),
    arrowDesign.classList.remove("rotate"),
    arrowFillIn.classList.toggle("rotate"),
    arrowShare.classList.remove("rotate");
}
function toggleShare() {
  share.classList.toggle("hidden"),
    design.classList.add("hidden"),
    fillIn.classList.add("hidden"),
    arrowShare.classList.toggle("rotate"),
    arrowDesign.classList.remove("rotate"),
    arrowFillIn.classList.remove("rotate");
}
function getPalette() {
  localStorage.getItem("palette")
    ? ("1" === (chosenPalette = localStorage.getItem("palette"))
        ? palette1.setAttribute("checked", !0)
        : "2" === chosenPalette
        ? palette2.setAttribute("checked", !0)
        : "3" === chosenPalette
        ? palette3.setAttribute("checked", !0)
        : "4" === chosenPalette && palette4.setAttribute("checked", !0),
      applyPalette())
    : (palette1.setAttribute("checked", !0), applyPalette());
}
function choosePalette() {
  (chosenPalette = event.currentTarget.value),
    localStorage.setItem("palette", chosenPalette),
    applyPalette();
}
function applyPalette() {
  palette1.checked
    ? applyPalette1()
    : palette2.checked
    ? applyPalette2()
    : palette3.checked
    ? applyPalette3()
    : palette4.checked && applyPalette4();
}
function applyPalette1() {
  previewCardName.classList.add("darkGreenBlue"),
    previewCardName.classList.remove("driedBlood", "slate", "jungleGreen"),
    previewCardHead.classList.add("borderPalette1"),
    previewCardHead.classList.remove(
      "borderPalette2",
      "borderPalette3",
      "borderPalette4"
    );
  for (const e of iconItems)
    e.classList.add("darkGreenBlue"),
      e.classList.remove("driedBlood", "slate", "jungleGreen");
  for (const e of iconButtons) e.style.borderColor = "#a2deaf";
}
function applyPalette2() {
  previewCardName.classList.add("driedBlood"),
    previewCardName.classList.remove("darkGreenBlue", "slate", "jungleGreen"),
    previewCardHead.classList.add("borderPalette2"),
    previewCardHead.classList.remove(
      "borderPalette1",
      "borderPalette3",
      "borderPalette4"
    );
  for (const e of iconItems)
    e.classList.add("driedBlood"),
      e.classList.remove("darkGreenBlue", "slate", "jungleGreen");
  for (const e of iconButtons) e.style.borderColor = "#e95626";
}
function applyPalette3() {
  previewCardName.classList.add("slate"),
    previewCardName.classList.remove(
      "driedBlood",
      "darkGreenBlue",
      "jungleGreen"
    ),
    previewCardHead.classList.add("borderPalette3"),
    previewCardHead.classList.remove(
      "borderPalette1",
      "borderPalette2",
      "borderPalette4"
    );
  for (const e of iconItems)
    e.classList.add("slate"),
      e.classList.remove("driedBlood", "darkGreenBlue", "jungleGreen");
  for (const e of iconButtons) e.style.borderColor = "#a0c0cf";
}
function applyPalette4() {
  previewCardName.classList.add("jungleGreen"),
    previewCardName.classList.remove("darkGreenBlue", "driedBlood", "slate"),
    previewCardHead.classList.add("borderPalette4"),
    previewCardHead.classList.remove(
      "borderPalette1",
      "borderPalette2",
      "borderPalette3"
    );
  for (const e of iconItems)
    e.classList.add("jungleGreen"),
      e.classList.remove("darkGreenBlue", "driedBlood", "slate");
  for (const e of iconButtons) e.style.borderColor = "#f15f06";
}
function getFont() {
  localStorage.getItem("font")
    ? ("1" === (chosenFont = localStorage.getItem("font"))
        ? font1.setAttribute("checked", !0)
        : "2" === chosenFont
        ? font2.setAttribute("checked", !0)
        : "3" === chosenFont && font3.setAttribute("checked", !0),
      applyFont())
    : (font1.setAttribute("checked", !0), applyFont());
}
arrowDesign.classList.add("rotate"),
  fillIn.classList.add("hidden"),
  share.classList.add("hidden"),
  designContainer.addEventListener("click", hideDesign),
  fillInContainer.addEventListener("click", toggleFillIn),
  shareContainer.addEventListener("click", toggleShare),
  shareContainer.addEventListener("click", checkFilledInputs),
  twitterContainer.classList.add("hidden"),
  palette1.addEventListener("click", choosePalette),
  palette2.addEventListener("click", choosePalette),
  palette3.addEventListener("click", choosePalette),
  palette4.addEventListener("click", choosePalette);
const chooseFont = e => {
    (chosenFont = e.currentTarget.value),
      localStorage.setItem("font", chosenFont),
      applyFont();
  },
  applyFont = () => {
    font1.checked ? applyFont1() : font2.checked ? applyFont2() : applyFont3();
  },
  applyFont1 = () => {
    previewCardName.classList.add("fontMontserratBold"),
      previewCardName.classList.remove("fontCherrySwashBold", "fontKalamBold"),
      previewCardJob.classList.add("fontMontserratRegular"),
      previewCardJob.classList.remove(
        "fontCherrySwashRegular",
        "fontKalamRegular"
      );
  },
  applyFont2 = () => {
    previewCardName.classList.add("fontCherrySwashBold"),
      previewCardName.classList.remove("fontMontserratBold", "fontKalamBold"),
      previewCardJob.classList.add("fontCherrySwashRegular"),
      previewCardJob.classList.remove(
        "fontMontserratRegular",
        "fontKalamRegular"
      );
  },
  applyFont3 = () => {
    previewCardName.classList.add("fontKalamBold"),
      previewCardName.classList.remove(
        "fontMontserratBold",
        "fontCherrySwashBold"
      ),
      previewCardJob.classList.add("fontKalamRegular"),
      previewCardJob.classList.remove(
        "fontMontserratRegular",
        "fontCherrySwashRegular"
      );
  };
function addName() {
  "" !== userName.value
    ? (nameValidation(),
      !0 === nameValidation() &&
        ((previewCardName.innerHTML = userName.value),
        localStorage.setItem("name", userName.value)))
    : ((previewCardName.innerHTML = "Nombre Apellido"),
      localStorage.removeItem("name"));
}
function addJob() {
  "" !== userJob.value
    ? (jobValidation(),
      !0 === jobValidation() &&
        ((previewCardJob.innerHTML = userJob.value),
        localStorage.setItem("job", userJob.value)))
    : ((previewCardJob.innerHTML = "Front-end developer"),
      localStorage.removeItem("job"));
}
function addPhone() {
  "" !== userTel.value
    ? (phoneValidation(),
      !0 === phoneValidation()
        ? ((phoneIcon.href = `tel:${userTel.value}`),
          phoneItem.classList.remove("opacity"),
          localStorage.setItem("phone", userTel.value))
        : (userTel.nextElementSibling.innerHTML =
            "*El número de teléfono debe tener 9 dígitos"))
    : (phoneItem.classList.add("opacity"), localStorage.removeItem("phone"));
}
function addEmail() {
  "" !== userEmail.value
    ? (emailValidation(),
      !0 === emailValidation()
        ? ((emailIcon.href = `mailto: ${userEmail.value}`),
          emailItem.classList.remove("opacity"),
          localStorage.setItem("email", userEmail.value))
        : (userEmail.nextElementSibling.innerHTML =
            "*Introduzca un email válido"))
    : (emailItem.classList.add("opacity"), localStorage.removeItem("email"));
}
function addLinkedin() {
  "" !== userLinkedin.value
    ? ((linkedinIcon.href = `https://www.linkedin.com/in/${userLinkedin.value}`),
      linkedinItem.classList.remove("opacity"),
      localStorage.setItem("linkedin", userLinkedin.value))
    : (linkedinItem.classList.add("opacity"),
      localStorage.removeItem("linkedin"));
}
function addGithub() {
  "" !== userGithub.value
    ? ((githubIcon.href = `http://github.com/${userGithub.value}`),
      githubItem.classList.remove("opacity"),
      localStorage.setItem("github", userGithub.value))
    : (githubItem.classList.add("opacity"), localStorage.removeItem("github"));
}
function nameValidation() {
  return /^[\w'\-,.][^0-9_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(
    userName.value
  )
    ? ((userName.nextElementSibling.innerHTML = ""), !0)
    : ((userName.nextElementSibling.innerHTML = "*Introduzca un nombre válido"),
      !1);
}
function jobValidation() {
  return /^[\w'\-,.][^0-9_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(
    userJob.value
  )
    ? ((userJob.nextElementSibling.innerHTML = ""), !0)
    : ((userJob.nextElementSibling.innerHTML = "*Introduzca un puesto válido"),
      !1);
}
function emailValidation() {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.value)
    ? ((userEmail.nextElementSibling.innerHTML = ""), !0)
    : ((userEmail.nextElementSibling.innerHTML = "*Introduzca un email válido"),
      !1);
}
function phoneValidation() {
  return /^[0-9]{9}/.test(userTel.value)
    ? ((userTel.nextElementSibling.innerHTML = ""), !0)
    : ((userTel.nextElementSibling.innerHTML =
        "*El número de teléfono debe tener 9 dígitos"),
      !1);
}
function getPersData() {
  getPalette(),
    getFont(),
    setName(),
    setJob(),
    getProfileImage(),
    setPhone(),
    setEmail(),
    setLinkedin(),
    setGithub();
}
function setName() {
  localStorage.getItem("name")
    ? ((userName.value = localStorage.getItem("name")),
      (previewCardName.innerHTML = localStorage.getItem("name")))
    : (userName.value = "");
}
function setJob() {
  localStorage.getItem("job")
    ? ((userJob.value = localStorage.getItem("job")),
      (previewCardJob.innerHTML = localStorage.getItem("job")))
    : (userJob.value = "");
}
function getProfileImage() {
  localStorage.getItem("image")
    ? ((profileImage.style.backgroundImage = `url(${localStorage.getItem(
        "image"
      )})`),
      (profilePreview.style.backgroundImage = `url(${localStorage.getItem(
        "image"
      )})`))
    : ((profileImage.style.backgroundImage = `url(${defaultImage})`),
      (profilePreview.style.backgroundImage = `url(${defaultImage})`));
}
function setPhone() {
  localStorage.getItem("phone")
    ? ((userTel.value = localStorage.getItem("phone")),
      (phoneIcon.href = `tel:${userTel.value}`),
      phoneItem.classList.remove("opacity"))
    : (userTel.value = "");
}
function setEmail() {
  localStorage.getItem("email")
    ? ((userEmail.value = localStorage.getItem("email")),
      (emailIcon.href = `tel:${userEmail.value}`),
      emailItem.classList.remove("opacity"))
    : (userEmail.value = "");
}
function setLinkedin() {
  localStorage.getItem("linkedin")
    ? ((userLinkedin.value = localStorage.getItem("linkedin")),
      (linkedinIcon.href = `tel:${userLinkedin.value}`),
      linkedinItem.classList.remove("opacity"))
    : (userLinkedin.value = "");
}
function setGithub() {
  localStorage.getItem("github")
    ? ((userGithub.value = localStorage.getItem("github")),
      (githubIcon.href = `tel:${userGithub.value}`),
      githubItem.classList.remove("opacity"))
    : (userGithub.value = "");
}
font1.addEventListener("click", chooseFont),
  font2.addEventListener("click", chooseFont),
  font3.addEventListener("click", chooseFont),
  userName.addEventListener("keyup", addName),
  userJob.addEventListener("keyup", addJob),
  userTel.addEventListener("keyup", addPhone),
  userEmail.addEventListener("keyup", addEmail),
  userLinkedin.addEventListener("keyup", addLinkedin),
  userGithub.addEventListener("keyup", addGithub),
  window.addEventListener("load", getPersData);
const fr = new FileReader(),
  uploadBtn = document.querySelector(".js__profile-trigger"),
  fileField = document.querySelector(".js__profile-upload-btn"),
  profileImage = document.querySelector(".js__profile-image"),
  profilePreview = document.querySelector(".js__profile-preview");
function getImage(e) {
  var t = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage), fr.readAsDataURL(t);
}
function writeImage() {
  (profileImage.style.backgroundImage = `url(${fr.result})`),
    (profilePreview.style.backgroundImage = `url(${fr.result})`),
    localStorage.setItem("image", fr.result);
}
function fakeFileClick() {
  fileField.click();
}
uploadBtn.addEventListener("click", fakeFileClick),
  fileField.addEventListener("change", getImage);
const reseterButton = document.querySelector("#buttonReset"),
  resetLocalStorage = () => {
    localStorage.clear("palette"),
      localStorage.clear("font"),
      localStorage.clear("name"),
      localStorage.clear("job"),
      localStorage.clear("image"),
      localStorage.clear("phone"),
      localStorage.clear("email"),
      localStorage.clear("linkedin"),
      localStorage.clear("github");
  },
  resetColorPalette = () => {
    applyPalette1(), (palette1.checked = !0);
  },
  resetFont = () => {
    applyFont1(), (font1.checked = !0);
  },
  resetName = () => {
    (previewCardName.innerHTML = "Nombre Apellido"), (userName.value = "");
  },
  resetJob = () => {
    (previewCardJob.innerHTML = "Front-end developer"), (userJob.value = "");
  },
  resetImage = () => {
    (profileImage.style.backgroundImage = `url(${defaultImage})`),
      (profilePreview.style.backgroundImage = `url(${defaultImage})`);
  },
  resetPhone = () => {
    (phoneIcon.href = ""),
      (userTel.value = ""),
      phoneItem.classList.add("opacity");
  },
  resetEmail = () => {
    (emailIcon.href = ""),
      (userEmail.value = ""),
      emailItem.classList.add("opacity");
  },
  resetLinkedin = () => {
    (linkedinIcon.href = ""),
      (userLinkedin.value = ""),
      linkedinItem.classList.add("opacity");
  },
  resetGithub = () => {
    (githubIcon.href = ""),
      (userGithub.value = ""),
      githubItem.classList.add("opacity");
  },
  resetCardData = () => {
    localStorage.clear("palette"),
      localStorage.clear("font"),
      localStorage.clear("name"),
      localStorage.clear("job"),
      localStorage.clear("image"),
      localStorage.clear("phone"),
      localStorage.clear("email"),
      localStorage.clear("linkedin"),
      localStorage.clear("github"),
      applyPalette1(),
      (palette1.checked = !0),
      applyFont1(),
      (font1.checked = !0),
      (previewCardName.innerHTML = "Nombre Apellido"),
      (userName.value = ""),
      (previewCardJob.innerHTML = "Front-end developer"),
      (userJob.value = ""),
      (profileImage.style.backgroundImage = `url(${defaultImage})`),
      (profilePreview.style.backgroundImage = `url(${defaultImage})`),
      (phoneIcon.href = ""),
      (userTel.value = ""),
      phoneItem.classList.add("opacity"),
      (emailIcon.href = ""),
      (userEmail.value = ""),
      emailItem.classList.add("opacity"),
      (linkedinIcon.href = ""),
      (userLinkedin.value = ""),
      linkedinItem.classList.add("opacity"),
      (githubIcon.href = ""),
      (userGithub.value = ""),
      githubItem.classList.add("opacity");
  };
reseterButton.addEventListener("click", resetCardData);
let photoSend = "";
function checkFilledInputs() {
  !1 === nameValidation() ||
  !1 === jobValidation() ||
  !1 === emailValidation() ||
  "" === userLinkedin.value ||
  "" === userGithub.value
    ? ((createCardButton.disabled = !0),
      errorMessage.classList.remove("hidden"))
    : ((createCardButton.disabled = !1), errorMessage.classList.add("hidden"));
}
function sendForm(e) {
  e.preventDefault(),
    fr.result || localStorage.getItem("image")
      ? !fr.result && localStorage.getItem("image")
        ? (photoSend = localStorage.getItem("image"))
        : ((photoSend = fr.result), localStorage.setItem("image", photoSend))
      : (photoSend = defaultImage);
  const t = {
    palette: chosenPalette,
    font: chosenFont,
    name: userName.value,
    job: userJob.value,
    phone: userTel.value,
    email: userEmail.value,
    linkedin: userLinkedin.value,
    github: userGithub.value,
    photo: photoSend
  };
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(t),
    headers: { "content-type": "application/json" }
  })
    .then(e => e.json())
    .then(e => showURL(e))
    .catch(function(e) {
      console.log(e);
    });
}
function showURL(e) {
  const t = document.createElement("span");
  (t.style.textAlign = "center"),
    e.success
      ? ((t.innerHTML = `<a class="twitter-url" href=${e.cardURL} style="color:#e17334" target="_blank">${e.cardURL}</a>`),
        twitterMessage.insertAdjacentElement("afterend", t),
        twitterContainer.classList.remove("hidden"),
        createCardButton.setAttribute("disabled", !0),
        shareTwitter(e.cardURL))
      : (t.innerHTML = "ERROR" + e.error);
}
function shareTwitter(e) {
  const t = encodeURIComponent(
      "He creado esta tarjeta con Awesome Profile Cards. ¡Échale un vistazo!"
    ),
    a = encodeURIComponent("adalab,adalaber,frontEnd,awesomeCards");
  (twitterBtn.href = `https://twitter.com/intent/tweet?text=${t}&url=${e}&hashtags=${a}`),
    (linkedInBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${e}`);
}
createCardButton.addEventListener("click", sendForm);
