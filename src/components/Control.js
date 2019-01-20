import React, { Component } from "react";
import debounce from "lodash.debounce";
import { connect } from "react-redux";
import TextInput from "./TextInput/TextInput";
import { setControlLabel } from "../pages/editor/Editor.state";

class Control extends Component {
  constructor(props) {
    super(props);
    this.handleLabelInput = debounce(this.handleLabelInput, 1500);
    this.state = { doNotShowLabelPlaceholder: false };
  }

  editLabel = e => {
    e.preventDefault();
  };

  handleLabelInput = label => {
    const { formId, ctrlId } = this.props;
    this.props.setControlLabel(formId, ctrlId, label);
  };

  handleLabelInputDebounced = e => {
    const label = e.target.textContent.trim();
    this.setState({ doNotShowLabelPlaceholder: !!label });
    this.handleLabelInput(label);
  };

  handleKeyPress = e => {
    // prevents entering into newline in contentEditable
    if (e.charCode === 13) {
      e.preventDefault();
    }
  };

  handlePasteInLabel = e => {
    // source: https://stackoverflow.com/questions/2176861/javascript-get-clipboard-data-on-paste-event-cross-browser/6804718#comment51446455_19269040
    let content;
    // Important! Stop data actually being pasted into div
    e.preventDefault();

    if (e.clipboardData) {
      content = (e.originalEvent || e).clipboardData.getData("text/plain");
      document.execCommand("insertText", false, content);
    } else if (window.clipboardData) {
      // for IE
      content = window.clipboardData.getData("Text");
      document.selection.createRange().pasteHTML(content);
    }
  };

  getControlComponent = type => {
    let component;
    if (type === "text") {
      component = <TextInput />;
    }

    return component;
  };

  render() {
    const component = this.getControlComponent(this.props.type);
    return (
      <>
        <label
          contentEditable
          onPaste={this.handlePasteInLabel}
          onKeyPress={this.handleKeyPress}
          onClick={this.editLabel}
          onInput={this.handleLabelInputDebounced}
          spellCheck="false"
          htmlFor="world"
          suppressContentEditableWarning
        >
          {!this.state.doNotShowLabelPlaceholder && <span>Label</span>}
        </label>
        {component}
        <style jsx>
          {`
            label {
              position: relative;
              display: block;
              min-height: 2rem;
            }
            label > :global(br) {
              display: none;
            }
            span {
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
}

const mapDispatchToProps = {
  setControlLabel
};

export default connect(
  null,
  mapDispatchToProps
)(Control);
