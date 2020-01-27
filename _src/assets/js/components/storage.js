function _getLocalStorage() {
  const palette = localStorage.getItem("palette");
  const previewCard = localStorage.getItem("image");
  const font = localStorage.getItem("font");
  const name = localStorage.getItem("name");
  const job = localStorage.getItem("job");
  const phone = localStorage.getItem("job");
  const email = localStorage.getItem("email");
  const linkedin = localStorage.getItem("linkedin");
  const github = localStorage.getItem("github");

  return {
    palette,
    previewCard,
    font,
    name,
    job,
    phone,
    email,
    linkedin,
    github
  };
}

const _resetLocalStorage = () => {
  localStorage.clear("palette");
  localStorage.clear("font");
  localStorage.clear("name");
  localStorage.clear("job");
  localStorage.clear("image");
  localStorage.clear("phone");
  localStorage.clear("email");
  localStorage.clear("linkedin");
  localStorage.clear("github");
};

module.exports = {
  resetLocalStorage: _resetLocalStorage,
  getLocalStorage: _getLocalStorage
};
