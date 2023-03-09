// Create a reference to the cities collection
import {
  collection,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { db } from "./firebase.js";

/* import { renderComponents } from "./RenderComponents.js";

renderComponents("navigation-bar", "../components/navigation-bar.html");
renderComponents("direct-contact", "../components/direct-contact.html"); */

const getParameterByName = (name) => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

document.title = "rafi." + getParameterByName("id");

const projectsRef = collection(db, "projects");

// Create a query against the collection.
const q = query(projectsRef, where("id", "==", getParameterByName("id")));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  document.getElementById("body-project").innerHTML = doc.data().body;
  const technologies = doc.data().technologies.split(" ");

  document.getElementsByClassName("image-project")[0].src = doc.data().banner;
  document.getElementsByClassName("title-view")[0].innerHTML = doc.data().title;

  technologies.forEach((item) => {
    try {
      document
        .getElementsByClassName(item)[0]
        .classList.toggle("technologies-block-visible");
    } catch (error) {
      console.log(item);
    }
  });
});
