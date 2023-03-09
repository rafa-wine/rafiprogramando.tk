import {
  query,
  getDocs,
  collection,
  where,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { db } from "./firebase.js";

const cardFilling = async (category, idElement) => {
  const projectsRef = collection(db, "projects");

  const q = query(projectsRef, where("category", "==", category));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    //console.log(doc.id, " => ", doc.data());

    document.getElementById(
      idElement
    ).innerHTML += `<div class="personal-projects">
  <div class="card">
  <a href="./project.html?id=${doc.data().id}">
    <div class="card-section-cover">
      <img
        src="${doc.data().cover}"
        alt="mantequilla_cover"
        class="cover-card"
      />
      <div class="text-read-more">
      <p>.leer_más()</p>
      </div>
    </div>
    <div class="card-section-text">
      <p class="titlte-card">${doc.data().title}</p>
      <p class="description-card">
        /* ${doc.data().description} */
      </p>
    </div>
    </a>
    </div>
  </div>`;
  });
};

cardFilling("academic", "academic-projects");
cardFilling("personal", "personal-projects");
cardFilling("professional", "professionals-projects");

/* <div>
  <p>${doc.data().title}</p>
  <img src="${doc.data().cover}"  width="150"/>
  </div> */
