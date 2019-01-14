import { html, render } from "lit-html";
import "./toolbox.scss";

export default function toolBoxElm() {
  return html`
    <div class="toolBox">
      <div class="toolBox-icon-and-desc">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          class="toolBox-add-icon"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <p>Add a form control</p>
      </div>
    </div>
  `;
}
