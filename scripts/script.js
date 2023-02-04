function changeTheme(element) {
  document.body.classList.toggle("dark-theme");
  element.classList.toggle("theme-change");
}

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

  /* document.getElementsByClassName(hide1)[0].style.color =
    "var(--secundary-color)";
  document.getElementsByClassName(hide2)[0].style.color =
    "var(--secundary-color)";
  document.getElementsByClassName(hide3)[0].style.color =
    "var(--secundary-color)";
  document.getElementsByClassName(hide4)[0].style.color =
    "var(--secundary-color)"; */

  document.getElementsByClassName(show)[0].style.display = "flex";
}
