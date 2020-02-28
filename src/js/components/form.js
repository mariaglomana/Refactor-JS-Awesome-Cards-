import constants from "./constants";
import palettes from "./palettes";
import fonts from "./fonts";
import validation from "./validation";
import imageLoader from "./imageLoader";
import storage from "./storage";

const userName = document.querySelector(constants.userName);
const userJob = document.querySelector(constants.userJob);
const userEmail = document.querySelector(constants.userEmail);
const userPhone = document.querySelector(constants.userPhone);
const userLinkedin = document.querySelector(constants.userLinkedin);
const userGithub = document.querySelector(constants.userGithub);
const uploadBtn = document.querySelector(constants.uploadBtn);
const fileField = document.querySelector(constants.fileField);

const previewCardName = document.querySelector(constants.previewCardName);
const previewCardJob = document.querySelector(constants.previewCardJob);
const phoneIcon = document.querySelector(constants.phoneIcon);
const emailIcon = document.querySelector(constants.emailIcon);
const linkedinIcon = document.querySelector(constants.linkedinIcon);
const githubIcon = document.querySelector(constants.githubIcon);
const phoneItem = document.querySelector(constants.phoneItem);
const emailItem = document.querySelector(constants.emailItem);
const linkedinItem = document.querySelector(constants.linkedinItem);
const githubItem = document.querySelector(constants.githubItem);

//INPUTS
function onChangeName() {
  const name = userName.value;
  if (validation.isNotEmptyString(name)) {
    const valName = validation.genericTextValidation(userName);
    if (valName) {
      previewCardName.innerHTML = name;
      storage.save("name", name);
    }
  } else {
    previewCardName.innerHTML = "Nombre Apellido";
    storage.remove("name");
  }
}

function onChangeJob() {
  const job = userJob.value;
  if (validation.isNotEmptyString(job)) {
    const valJob = validation.genericTextValidation(userJob);
    if (valJob) {
      previewCardJob.innerHTML = job;
      storage.save("job", job);
    }
  } else {
    previewCardJob.innerHTML = "Front-end developer";
    storage.remove("job");
  }
}

function onChangePhone() {
  const phone = userPhone.value;

  const validPhone = validation.phoneValidation(userPhone);
  if (validPhone) {
    storage.save("phone", phone);
  }

  if (validation.isNotEmptyString(phone)) {
    phoneIcon.href = `tel:${phone}`;
    phoneItem.classList.remove("opacity");
  } else {
    phoneItem.classList.add("opacity");
    storage.remove("phone");
  }
}

function onChangeEmail() {
  const emailValue = userEmail.value;
  if (validation.isNotEmptyString(emailValue)) {
    emailIcon.href = `mailto: ${emailValue}`;
    emailItem.classList.remove("opacity");
    const validEmail = validation.emailValidation(userEmail);
    if (validEmail) {
      storage.save("email", emailValue);
    }
  } else {
    emailItem.classList.add("opacity");
    storage.remove("email");
  }
}

function onChangeLinkedin() {
  const linkedin = userLinkedin.value;
  if (validation.isNotEmptyString(linkedin)) {
    linkedinIcon.href = `https://www.linkedin.com/in/${linkedin}`;
    linkedinItem.classList.remove("opacity");
    storage.save("linkedin", linkedin);
  } else {
    linkedinItem.classList.add("opacity");
    storage.remove("linkedin");
  }
}

function onChangeGithub() {
  const github = userGithub.value;
  if (validation.isNotEmptyString(github)) {
    githubIcon.href = `http://github.com/${github}`;
    githubItem.classList.remove("opacity");
    storage.save("github", github);
  } else {
    githubItem.classList.add("opacity");
    storage.remove("github");
  }
}

function setName(name) {
  userName.value = name;
}

function setJob(job) {
  userJob.value = job;
}

function setPhone(phone) {
  userPhone.value = phone;
}

function setImage(image) {
  imageLoader.setImage(image);
}

function setEmail(email) {
  userEmail.value = email;
}

function setLinkedin(linkedin) {
  userLinkedin.value = linkedin;
}

function setGithub(github) {
  userGithub.value = github;
}

function getName() {
  return userName.value;
}

function getJob() {
  return userJob.value;
}

function getPhone() {
  return userPhone.value;
}

function getEmail() {
  return userEmail.value;
}

function getLinkedin() {
  return userLinkedin.value;
}

function getGithub() {
  return userGithub.value;
}

function getFormData() {
  return {
    palette: palettes.getChosenPalette(),
    font: fonts.getChosenFont(),
    name: getName(),
    job: getJob(),
    phone: getPhone(),
    email: getEmail(),
    linkedin: getLinkedin(),
    github: getGithub(),
    photo: imageLoader.getImageUrl()
  };
}

const resetFormData = () => {
  setName();
  setJob();
  setPhone();
  setEmail();
  setLinkedin();
  setGithub();
  imageLoader.resetImage();
};

userName.addEventListener("keyup", onChangeName);
userJob.addEventListener("keyup", onChangeJob);
userPhone.addEventListener("keyup", onChangePhone);
userEmail.addEventListener("keyup", onChangeEmail);
userLinkedin.addEventListener("keyup", onChangeLinkedin);
userGithub.addEventListener("keyup", onChangeGithub);
uploadBtn.addEventListener("click", imageLoader.fakeFileClick);
fileField.addEventListener("change", imageLoader.onAddImageForm);

export default {
  getFormData,
  setName,
  setJob,
  setPhone,
  setEmail,
  setLinkedin,
  setGithub,
  setImage,
  resetFormData
};
