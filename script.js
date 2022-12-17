console.log("hola");
var icon = document.getElementById("icon");

icon.onclick = function () {
  console.log("hola funciono");
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    console.log("hola lo quito");
  } else {
    console.log("hola lo pongo");
  }
};
