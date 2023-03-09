import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { db } from "./firebase.js";

const button = document.querySelector("button");
const notifier = document.getElementsByClassName("empty-fields")[0];
var radioFieldsData = 0;
var textFieldsData = 0;
var data = {
  reason: "",
  name: "",
  phone: "",
  mail: "",
  country: "",
};

const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const regexPhone =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

button.addEventListener("click", async () => {
  const inputs = document.getElementsByTagName("form");

  for (var i = 0; i < 10; i++) {
    if (inputs[0][i].type === "radio" && inputs[0][i].checked === true) {
      console.log(inputs[0][i].value);
      data.reason = inputs[0][i].value;
      radioFieldsData += 1;
    }
    if (inputs[0][i].type != "radio" && inputs[0][i].value != "") {
      console.log(inputs[0][i].value);
      switch (inputs[0][i].id) {
        case "name":
          data.name = inputs[0][i].value;
          break;
        case "email":
          data.mail = inputs[0][i].value;
          break;
        case "phone":
          data.phone = inputs[0][i].value;
          break;
        case "country":
          data.country = inputs[0][i].value;
          break;
        default:
          console.log("empty data");
          break;
      }
      textFieldsData += 1;
    }
  }

  console.log(radioFieldsData + " --- " + textFieldsData);

  if (
    data.reason == "" ||
    data.name == "" ||
    data.phone == "" ||
    data.mail == "" ||
    data.country == ""
  ) {
    notificationItem(
      notifier,
      "ERROR: ¡Tienes que llenar todos los campos!",
      "rgb(253, 90, 90)"
    );
  }

  if (radioFieldsData != 0 && textFieldsData == 4) {
    if (regexEmail.test(data.mail) && regexPhone.test(data.phone)) {
      // Add a new document in collection "messages"
      try {
        notificationItem(notifier, "Guardando datos...", "var(--accent-color)");
        await setDoc(doc(db, "messages", data.mail), data);
      } catch {
        notificationItem(notifier, "ERROR: Inténtalo de nuevo", "orange");
      }

      for (var i = 0; i < 10; i++) {
        if (inputs[0][i].type === "radio") {
          inputs[0][i].checked = false;
        }
        if (inputs[0][i].type != "radio") {
          inputs[0][i].value = "";
        }
      }
      notificationItem(
        notifier,
        "¡Datos guardados con éxito!",
        "var(--terminal-success)"
      );
    }
    if (!regexEmail.test(data.mail)) {
      notificationItem(
        notifier,
        "ERROR: ¡Correo electrónico inválido!",
        "rgb(253, 90, 90)"
      );
    }

    if (!regexPhone.test(data.phone)) {
      notificationItem(
        notifier,
        "ERROR: ¡Número de Teléfono inválido!",
        "rgb(253, 90, 90)"
      );
    }

    if (!regexPhone.test(data.phone) && !regexEmail.test(data.mail)) {
      notificationItem(
        notifier,
        "ERROR: ¡Número de Teléfono y Correo electrónico inválidos!",
        "rgb(253, 90, 90)"
      );
    }
  }
  data = {
    reason: "",
    name: "",
    phone: "",
    mail: "",
    country: "",
  };
  radioFieldsData = 0;
  textFieldsData = 0;
});

const notificationItem = (item, text, colorText) => {
  item.classList.add("empty-fields_visible");
  item.textContent = text;
  item.style.color = colorText;
};
