import { html, render } from "lit-html";
import "./toolbox.scss";

function handleClickToolBox() {
  this.classList.toggle("active");
}

// function handleKeydown(e) {
//   if (e.keyCode === 40) {
//     handleClickToolBox.call(this);
//   }
// }

export default function toolBoxElm() {
  return html`
    <div>
      <button
        @click=${handleClickToolBox}
        aria-expanded="false"
        aria-haspopup="true"
        class="btn-toolBox"
      >
        <div class="flex-col-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            class="toolBox-add-icon"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
            />
          </svg>
          <h2 id="aria-toolBox">Add a form control</h2>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          class="toolBox-arrow-dropdown-icon"
        >
          <path d="M7 10l5 5 5-5z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <div class="toolBox-menu" role="menu">
        <button class="toolBox-menu-item" role="menuitem">Text</button>
        <button class="toolBox-menu-item" role="menuitem">Checkbox</button>
        <button class="toolBox-menu-item" role="menuitem">Radio Button</button>
      </div>
    </div>
  `;
}
