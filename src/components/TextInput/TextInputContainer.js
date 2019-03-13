import React, { Component } from "react";
import { connect } from "react-redux";
import IMask from "imask";
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

  componentDidMount() {
    this.mask = new IMask(this.inputRef.current, {
      mask: /^.+$/
    });
  }

  componentDidUpdate() {
    console.log(this.props);
    const {
      control: { format, dataType }
    } = this.props;
    let mask;
    if (dataType === "date") {
      mask = Date;
    }
    this.mask.updateOptions({
      mask,
      pattern: format, // define date -> str convertion
      format(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        const year = date.getFullYear();

        if (day < 10) day = `0${day}`;
        if (month < 10) month = `0${month}`;

        return [year, month, day].join("-");
      },
      // define str -> date convertion
      parse(str) {
        const yearMonthDay = str.split("-");
        return new Date(yearMonthDay[0], yearMonthDay[1] - 1, yearMonthDay[2]);
      }
    });
  }

  // componentDidUpdate() {
  //   // TODO: dynamic convert current text to new masking set
  //   this.inputRef.current.value = "";
  //   // this.inputRef.current.focus();
  // }

  handleInputChange = () => {
    // this.inputRef.current.value = conformInputToMasking(
    //   this.inputRef.current.value,
    //   placeholder,
    //   charset
    // );
    // this.inputShellRef.current.innerHTML = updateInputShellValue(
    //   this.inputRef.current.value,
    //   placeholder
    // );
    console.log(this.mask.value);
    console.log(this.mask.unmaskedValue);
  };

  render() {
    const { control } = this.props;
    return (
      <TextInput
        control={control}
        // inputShellRef={this.inputShellRef}
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
