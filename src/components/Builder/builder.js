import "./builder.css";
import { html, render } from "lit-html";
import toolBoxElm from "../ToolBox/toolBox";
import ControlWrapper from "./../ControlWrapper/ControlWrapper";

const formColTitlePlaceholder = html`
  <h1 class="form-col-title-placeholder">Title</h1>
`;

export default class Builder {
  constructor() {
    this.formControlsContainerId = Math.random();
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
        <div class="mb-2" id=${this.formControlsContainerId}></div>
        ${toolBoxElm(this.insertFormControl)}
      </div>
    </div>
  `;

  insertFormControl = ({ type, template }) => {
    const wrappedTemplate = new ControlWrapper({ type, template });
    const formControlsContainer = document.getElementById(
      this.formControlsContainerId
    );

    console.log(formControlsContainer, wrappedTemplate);
    // formControlsContainer.appendChild(wrappedTemplate);
    // this.controls.push(wrappedTemplate);
    // render(this.formColTitleElm(false, this.controls), this.builderElm);
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
