import { ClientInputMasking } from "./inputMasking";

fetch("http://localhost:3006/hello")
  .then(response => response.json())
  .then(data => {
    console.log("data", data);
    const root = document.getElementById("app");
    const temp = document.createElement("div");

    temp.innerHTML = data.css;

    const head = document.head;

    // insert the styles tags
    while (temp.firstChild) {
      head.appendChild(temp.firstChild);
    }

    // insert the form templates
    root.innerHTML = data.html;

    // TODO: probably use loadCss/loadjs to execute
    // codes when css/dom are loaded
  });
