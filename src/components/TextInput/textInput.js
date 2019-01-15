import { html, render } from "lit-html";
import "./textInput.scss";

export default function textInput() {
  return html`
    <div>
      <label for="world">Hello</label>
      <input id="world" type="text" placeholder="himan" />
    </div>
  `;
}
