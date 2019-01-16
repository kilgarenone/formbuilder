import { html, render } from "lit-html";
import "./controlWrapper.css";

function openMenu() {
  this.classList.toggle("active");
}
export default class ControlWrapper {
  constructor({ type, template }) {
    this.type = type;
    this.template = template;
    return this.render();
  }

  setTextMasking = () => {
    render(this.render("god mdan it"), this.container);
  };

  render = active => {
    return html`
      <div class="cmp-wrapper">
        <div class="cmp-wrapper__template">${this.template}</div>
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
      </div>
    `;
  };
}
