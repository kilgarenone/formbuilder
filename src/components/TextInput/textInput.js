import React, { Component } from "react";
import { connect } from "react-redux";
import debounce from "lodash.debounce";
import { setControlLabel } from "../../pages/editor/Editor.state";

class TextInput extends Component {
  constructor() {
    super();
    this.handleLabelInput = debounce(this.handleLabelInput, 5000);
  }

  editLabel = e => {
    e.preventDefault();
  };

  handleLabelInput = label => {
    const { formId, ctrlId } = this.props;
    this.props.setControlLabel(formId, ctrlId, label);
  };

  handleLabelInputDebounced = e => {
    const label = e.target.textContent;
    this.handleLabelInput(label);
  };

  render() {
    return (
      <>
        <div className="cmp-text">
          <label
            contentEditable
            onClick={this.editLabel}
            onInput={this.handleLabelInputDebounced}
            spellCheck="false"
            htmlFor="world"
          >
            Label
            <input
              className="cmp-text__input"
              id="world"
              type="text"
              placeholder="himan"
            />
          </label>
        </div>
        <style jsx>
          {`
            .cmp-text {
              position: relative;
            }
            .cmp-text__input {
              height: 2.7em;
              width: 100%;
              padding: 0.4em 0.7em;
              color: rgba(0, 0, 0, 0.76);
              font-weight: 400;
              font-style: normal;
              border: 2px solid #e0e0e0;
              border-radius: 0.2em;
              outline: 0;
              box-shadow: none;
            }

            .cmp-text__input:focus {
              border-color: #2962ff;
            }
          `}
        </style>
      </>
    );
  }
}

const mapDispatchToProps = {
  setControlLabel
};

export default connect(
  null,
  mapDispatchToProps
)(TextInput);
