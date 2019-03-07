import React, { Component } from "react";
import debounce from "lodash.debounce";
import { connect } from "react-redux";
import TextInputContainer from "../TextInput/TextInputContainer";
import { setControlLabel } from "../../pages/editor/Editor.state";
import { setActiveControl } from "../../pages/editor/PropertiesPanel/PropertiesPanel.state";
import "./controlWrapper.scss";

class Control extends Component {
  constructor(props) {
    super(props);
    this.handleLabelInput = debounce(this.handleLabelInput, 1500);
    this.state = { labelText: "", doNotShowLabelPlaceholder: false };
  }

  handleClickInLabel = e => {
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

  handleKeyPressInLabel = e => {
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
      component = <TextInputContainer {...this.props} />;
    }

    return component;
  };

  handleClickedControl = () => {
    const { formId, ctrlId } = this.props;
    this.props.setActiveControl(formId, ctrlId);
  };

  render() {
    const component = this.getControlComponent(this.props.type);
    const { activeControlId, ctrlId } = this.props;

    return (
      <div
        tabIndex="0"
        role="button"
        className="cmp-controlWrapper"
        aria-pressed={activeControlId === ctrlId}
        onKeyUp={this.handleKeyUp}
        onClick={this.handleClickedControl}
      >
        {!this.state.doNotShowLabelPlaceholder && (
          <label className="dummy-label">Label</label>
        )}
        <label
          className="ctrl-label"
          contentEditable
          onPaste={this.handlePasteInLabel}
          onKeyPress={this.handleKeyPressInLabel}
          onClick={this.handleClickInLabel}
          onInput={this.handleLabelInputDebounced}
          spellCheck="false"
          htmlFor="world"
          suppressContentEditableWarning
        >
          {this.state.labelText}
        </label>
        {component}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeControlId: state.activeControl.ctrlId
  };
}

const mapDispatchToProps = {
  setControlLabel,
  setActiveControl
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Control);
