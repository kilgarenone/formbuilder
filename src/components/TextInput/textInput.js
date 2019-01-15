import { html, render } from "lit-html";
import "./textInput.css";

export default function textInput() {
  return html`
    <div>
      <label for="world">Hello</label>
      <input id="world" type="text" placeholder="himan" />
    </div>
  `;
}
