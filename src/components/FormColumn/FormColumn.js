import React, { Component } from "react";

function FormColTitlePlaceholder() {
  return (
    <>
      <h1>Title</h1>
      <style jsx>
        {`
          h1 {
            position: relative;
            top: -3rem;
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
          {!this.state.doNotShowPlaceholder && <FormColTitlePlaceholder />}
        </div>
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

  // insertFormControl = ({ type, template }) => {
  //   const wrappedTemplate = new ControlWrapper({ type, template });
  //   this.controls.push(wrappedTemplate);
  //   render(this.formColTitleElm(false, this.controls), this.builderElm);
  // };

  keyup = e => {
    this.setState({ doNotShowPlaceholder: !!e.target.textContent.trim() });
  };
}
