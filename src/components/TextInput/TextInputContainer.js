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
    const {
      locale = "en",
      currencyType = "USD",
      dataType
    } = this.props.control;

    if (dataType === "currency") {
      this.control = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyType
      });
    }
    // TODO: dynamic convert current text to new masking set
    // this.inputRef.current.value = "";

    // this.inputRef.current.focus();
  }

  handleInputChange = () => {
    const {
      format,
      charset,
      dataType,
      currencyType,
      decimal
    } = this.props.control;

    const { current: input } = this.inputRef;

    if (dataType === "currency") {
      if (this.control instanceof Intl.NumberFormat) {
        let value = input.value.replace(/,(\d{0,2})$/, ".$1");

        const result = /(\.)(\d{0,2})$/.exec(value);
        // TODO: works from the 'result' array
        console.log(result);
        if (value[value.length - 1] === ".") {
          input.value = value;
          return;
        }
        const hasDecimal = /\.\d{0,2}$/.test(value);

        value = parseFloat(input.value.replace(/(?![.])\W/g, ""));

        if (Number.isNaN(value)) {
          input.value = "";
          return;
        }

        // value = value.toFixed(2);
        const amount = this.control.format(value);

        input.value = hasDecimal
          ? amount
          : amount.replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, "$1");
      }
    }
    // else {
    //   this.inputRef.current.value = conformInputToMasking(
    //     this.inputRef.current.value,
    //     format,
    //     charset,
    //     dataType
    //   );

    //   this.inputShellRef.current.innerHTML = updateInputShellValue(
    //     this.inputRef.current.value,
    //     format
    //   );
    // }
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
