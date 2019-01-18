import React, { Component } from "../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import toolBoxElm from "../ToolBox/toolBox";
import ControlWrapper from "../ControlWrapper/ControlWrapper";

function FormColTitlePlaceholder() {
  return <h1 className="form-col-title-placeholder">Title</h1>;
}

export default class FormColumn extends Component {
  state = { doNotShowPlaceholder: false };

  controls = [];

  builderElm = document.getElementById("builder");

  render() {
    return (
      <div className="form-col">
        <div className="form-col-title mb-1">
          <h1
            onInput={this.keyup}
            className="form-col-title-value"
            contentEditable="true"
            spellCheck="false"
          />
          {!this.state.doNotShowPlaceholder && formColTitlePlaceholder}
        </div>
        {/* <div className="form-controls">
          <div className="mb-2">${controls.map(control => control)}</div>$
          {toolBoxElm(this.insertFormControl)}
        </div> */}
      </div>
    );
  }

  // insertFormControl = ({ type, template }) => {
  //   const wrappedTemplate = new ControlWrapper({ type, template });
  //   this.controls.push(wrappedTemplate);
  //   render(this.formColTitleElm(false, this.controls), this.builderElm);
  // };

  keyup = e => {
    this.setState({ doNotShowPlaceholder: !!e.target.textContent.trim() });
  };
}
