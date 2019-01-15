import "./builder.css";
import { html, render } from "lit-html";
import toolBoxElm from "../ToolBox/toolBox";

const formColTitlePlaceholder = html`
  <h1 class="form-col-title-placeholder">Title</h1>
`;

export default class Builder {
  constructor() {
    this.render();
  }

  controls = [];
  builderElm = document.getElementById("builder");

  formColTitleElm = (doNotShowPlaceholder = false, controls = []) => html`
    <div class="form-col">
      <div class="form-col-title mb-1">
        <h1
          @input=${this.keyup}
          class="form-col-title-value"
          contenteditable="true"
          spellcheck="false"
        ></h1>
        ${!doNotShowPlaceholder ? formColTitlePlaceholder : ""}
      </div>
      <div class="form-controls">
        <div>${controls.map(control => control)}</div>
        ${toolBoxElm(this.insertFormControl)}
      </div>
    </div>
  `;

  insertFormControl = control => {
    this.controls.push(control);
    render(this.formColTitleElm(false, this.controls), this.builderElm);
  };

  keyup = e => {
    render(
      this.formColTitleElm(!!e.target.textContent.trim()),
      this.builderElm
    );
  };

  render() {
    render(this.formColTitleElm(), this.builderElm);
  }
}
