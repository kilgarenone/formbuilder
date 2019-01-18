import React, { Component } from "react";
import ToolBox from "../ToolBox/ToolBox";

function FormColTitlePlaceholder() {
  return (
    <>
      <h1>Title</h1>
      <style jsx>
        {`
          h1 {
            position: absolute;
            top: 0;
            color: #b3b3b1;
            pointer-events: none;
          }
        `}
      </style>
    </>
  );
}

export default class FormColumn extends Component {
  state = { doNotShowPlaceholder: false };

  keyup = e => {
    this.setState({ doNotShowPlaceholder: !!e.target.textContent.trim() });
  };

  render() {
    return (
      <div className="form-col">
        <div className="form-col-title mb-1">
          <h1
            onInput={this.keyup}
            className="form-col-title-value"
            contentEditable="true"
            spellCheck="false"
          >
            {!this.state.doNotShowPlaceholder && <FormColTitlePlaceholder />}
          </h1>
        </div>
        <ToolBox />
        <style jsx>{`
          .form-col-title {
            position: relative;
            height: 3rem;
          }

          .form-col-title-value {
            height: 100%;
            z-index: 1;
          }
        `}</style>
      </div>
    );
  }
}
