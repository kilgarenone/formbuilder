import { html, render } from "lit-html";
import "./controlWrapper.css";

function openMenu() {
  this.classList.toggle("active");
}
export default class ControlWrapper {
  constructor({ type, template }) {
    this.type = type;
    this.controlTemplate = template;
    this.id = Math.random();
    return this.render();
  }

  setTextMasking = () => {
    render(this.render("god mdan it"), document.getElementById(this.id));
  };

  template = (active = "") => html`
    <div class="cmp-wrapper__template">${this.controlTemplate}</div>
    <div class="cmp-wrapper__menu">
      <div @click=${openMenu} class="cmp-wrapper__3dots"></div>
      <div class="cmp-wrapper__tools">
        <div>${active}</div>
        <button
          @click=${this.setTextMasking}
          class="cmp-wrapper__tools_masking"
        >
          Text Masking
        </button>
        <button class="cmp-wrapper__tools_validation">Validation</button>
      </div>
    </div>
  `;

  render = active => {
    return html`
      <div id=${this.id} class="cmp-wrapper">${this.template(active)}</div>
    `;
  };
}
