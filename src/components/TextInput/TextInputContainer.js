import React, { Component } from "react";
import { connect } from "react-redux";
import { controlSelectorViaFormIdAndCtrlId } from "../../pages/editor/Editor.state";
import conformInputToMasking, {
  updateInputShellValue
} from "../../lib/inputMasking";
import TextInput from "./TextInput";

class TextInputContainer extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.inputShellRef = React.createRef();
  }

  componentDidUpdate() {
    // TODO: dynamic convert current text to new masking set
    this.inputRef.current.value = "";
    // this.inputRef.current.focus();
  }

  handleInputChange = () => {
    const { placeholder, charset } = this.props.control;

    this.inputRef.current.value = conformInputToMasking(
      this.inputRef.current.value,
      placeholder,
      charset
    );

    this.inputShellRef.current.innerHTML = updateInputShellValue(
      this.inputRef.current.value,
      placeholder
    );
  };

  render() {
    const { control } = this.props;
    return (
      <TextInput
        control={control}
        handleInputChange={this.handleInputChange}
        inputShellRef={this.inputShellRef}
        inputRef={this.inputRef}
      />
    );
  }
}

function mapStateToProps(state, { formId, ctrlId }) {
  return {
    control: controlSelectorViaFormIdAndCtrlId(state, formId, ctrlId)
  };
}

export default connect(
  mapStateToProps,
  null
)(TextInputContainer);
