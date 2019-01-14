import "./builder.scss";
import { html, render } from "lit-html";
import toolBoxElm from "../ToolBox/toolBox";

const formColTitlePlaceholder = html`
  <h1 class="form-col-title-placeholder">Title</h1>
`;

const formColTitleElm = (doNotShowPlaceholder = false) => html`
  <div class="form-col">
    <div class="form-col-title">
      <h1
        @input=${keyup}
        class="form-col-title-value"
        contenteditable="true"
        spellcheck="false"
      ></h1>
      ${!doNotShowPlaceholder ? formColTitlePlaceholder : ""}
    </div>
    <div class="form-controls">${toolBoxElm()}</div>
  </div>
`;

const builderElm = document.getElementById("builder");

function keyup(e) {
  render(formColTitleElm(!!e.target.textContent.trim()), builderElm);
}

render(formColTitleElm(), builderElm);
