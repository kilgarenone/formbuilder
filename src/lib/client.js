import { ClientInputMasking } from "./inputMasking";

fetch("http://localhost:3006/hello")
  .then(response => response.json())
  .then(data => {
    const root = document.getElementById("app");
    document.head.innerHTML = document.head.innerHTML + data.css;
    root.innerHTML = data.html;
    console.log("data", data);
  });
