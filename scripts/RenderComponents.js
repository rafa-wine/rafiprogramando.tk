const renderComponents = (idContainer, urlComponent) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const elements = document.getElementsByClassName(idContainer);
      Array.from(elements).forEach((element) => {
        element.innerHTML = this.responseText;
      });
    }
  };
  xhttp.open("GET", urlComponent, true);
  xhttp.send();
};

renderComponents("navigation-bar", "../components/navigation-bar.html");
renderComponents("direct-contact", "../components/direct-contact.html");

/* export { renderComponents }; */
