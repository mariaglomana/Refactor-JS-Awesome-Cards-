function _getLocalStorage() {
  const palette = localStorage.getItem("palette");
  const avatar = localStorage.getItem("image");
  const font = localStorage.getItem("font");
  const name = localStorage.getItem("name");
  const job = localStorage.getItem("job");
  const phone = localStorage.getItem("job");
  const email = localStorage.getItem("email");
  const linkedin = localStorage.getItem("linkedin");
  const github = localStorage.getItem("github");

  return {
    palette,
    avatar,
    font,
    name,
    job,
    phone,
    email,
    linkedin,
    github
  };
}

module.exports = {
  getLocalStorage: _getLocalStorage
};
