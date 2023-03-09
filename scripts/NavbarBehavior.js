window.addEventListener("load", (event) => {
  if (event.isTrusted) {
    document.getElementsByClassName("loader")[0].style.display = "none";
    document.getElementsByClassName("global-render")[0].style.display = "flex";
  }
  initTheme();
});

var isActive = false;

const changeTheme = async (element) => {
  if (!isActive) {
    document.body.classList.toggle("dark-theme");
    element.classList.remove("theme-light");
    element.classList.add("theme-dark");
    localStorage.setItem("theme", "dark");
    isActive = true;
  } else {
    document.body.classList.toggle("dark-theme");
    element.classList.remove("theme-dark");
    element.classList.add("theme-light");
    localStorage.setItem("theme", "light");
    isActive = false;
  }
};

const initTheme = async () => {
  const element = document.getElementsByClassName("switch")[0];
  if (
    localStorage.getItem("theme") === "dark" ||
    localStorage.getItem("theme") === null
  ) {
    isActive = false;
    changeTheme(element);
  }
};

const menuBehavior = () => {
  document
    .getElementsByClassName("menu-content")[0]
    .classList.toggle("menu-content_open");
};
