import "./header.css";

const header = `<ul class="navbar__items">
  <li class="navbar__items__item">New form</li>
  <li class="navbar__items__item">Next item</li>
</ul>`;

const navElm = document.getElementById("navbar");
navElm.innerHTML = header;
