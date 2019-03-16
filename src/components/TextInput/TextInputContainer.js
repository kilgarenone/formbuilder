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
    const { dataType } = this.props.control;

    if (dataType === "currency") {
      this.control = new Intl.NumberFormat();
    }
    // TODO: dynamic convert current text to new masking set
    // this.inputRef.current.value = "";

    // this.inputRef.current.focus();
  }

  handleInputChange = () => {
    const { format, charset, dataType } = this.props.control;
    // eslint-disable-next-line prefer-destructuring
    const { current: input } = this.inputRef;

    if (dataType === "currency") {
      if (this.control instanceof Intl.NumberFormat) {
        input.value = this.control.format(
          input.value ? input.value.replace(/\D+/g, "") : ""
        );
      }
    } else {
      this.inputRef.current.value = conformInputToMasking(
        this.inputRef.current.value,
        format,
        charset,
        dataType
      );

      this.inputShellRef.current.innerHTML = updateInputShellValue(
        this.inputRef.current.value,
        format
      );
    }
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
