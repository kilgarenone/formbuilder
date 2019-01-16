import { html, render } from "lit-html";
import "./textInput.css";

export default function textInput() {
  return html`
    <div class="cmp-text">
      <label for="world">Hello</label>
      <input
        class="cmp-text__input"
        id="world"
        type="text"
        placeholder="himan"
      />
    </div>
  `;
}
