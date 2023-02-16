/* --------------- Loader ------------------------------ */
window.addEventListener("load", (event) => {
  if (event.isTrusted) {
    document.getElementsByClassName("loader-container")[0].style.display =
      "none";
    document.getElementsByClassName("global-render")[0].style.display = "flex";
  }
});
/* --------------- End Loader ------------------------------ */

/* ----------------- Current Theme ----------------------*/
var isActive = false;

async function changeTheme(element) {
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
}

async function initTheme() {
  const element = document.getElementsByClassName("switch")[0];
  if (localStorage.getItem("theme") === "dark") {
    isActive = false;
    changeTheme(element);
  }
}

initTheme();
/* ----------------- End Current Theme ----------------------*/

const dimensions = () => {
  const width = screen.width;
  const height = screen.height;

  document.getElementsByClassName("render")[0].style.width = `${width}px`;
  document.getElementsByClassName(
    "render"
  )[0].style.height = `calc(${height}px - 210px)`;
  console.log(width, height);
};

function home() {
  document.getElementsByClassName("global-section")[0].style.display = "flex";
  document.getElementsByClassName("logo-colorize")[0].style.color =
    "var(--accent-color)";
  document.getElementsByClassName("about-me")[0].style.color =
    "var(--secundary-color)";
}

function aboutMe(show, hide1, hide2, hide3, hide4) {
  document.getElementsByClassName(hide1)[0].style.display = "none";
  document.getElementsByClassName(hide2)[0].style.display = "none";
  document.getElementsByClassName(hide3)[0].style.display = "none";
  document.getElementsByClassName(hide4)[0].style.display = "none";

  document.getElementsByClassName(show)[0].style.display = "flex";
}

/* -------------------------------------------------------------------------- */

const menuBehavior = () => {
  document
    .getElementsByClassName("menu-content")[0]
    .classList.toggle("menu-content_open");
};
