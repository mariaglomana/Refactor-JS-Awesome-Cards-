const getLocalStorage = () => {
  const palette = localStorage.getItem("palette");
  const previewCard = localStorage.getItem("image");
  const font = localStorage.getItem("font");
  const name = localStorage.getItem("name");
  const job = localStorage.getItem("job");
  const phone = localStorage.getItem("phone");
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
};

const resetLocalStorage = () => {
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

const save = (item, value) => {
  localStorage.setItem(item, value);
};

const remove = item => {
  localStorage.removeItem(item);
};

export default {
  resetLocalStorage,
  getLocalStorage,
  save,
  remove
};
