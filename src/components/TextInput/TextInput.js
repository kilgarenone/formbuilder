import React, { Component } from "react";
import { connect } from "react-redux";
import { controlSelectorViaFormIdAndCtrlId } from "../../pages/editor/Editor.state";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.inputShell = React.createRef();
  }

  componentDidUpdate() {
    // TODO: dynamic convert current text to new masking set
    this.input.current.value = "";
    // this.input.current.focus();
  }

  handleCurrentChange = e => {
    const target = this.input.current;
    const isCharsetPresent = this.props.control.charset; // TODO: set your custom masking pattern
    const maskedNumber = "xXMDY";
    const maskedLetter = "_";
    const placeholder = isCharsetPresent || this.props.control.placeholder;
    const placeholderLength = placeholder.length;
    const { value } = target;
    let newValue = "";

    const strippedValue = isCharsetPresent
      ? value.replace(/\W/g, "") // only keeps A-Z, a-z, 0-9, _
      : value.replace(/\D/g, ""); // only keeps 0-9 (digits)

    for (let i = 0, j = 0; i < placeholderLength; i++) {
      // break if no characters left and the pattern is non-special character
      if (strippedValue[j] === undefined) {
        break;
      }
      const parseAsIntVal = parseInt(strippedValue[j], 10);

      const valueIsInt =
        typeof parseAsIntVal === "number" && parseAsIntVal % 1 === 0;
      const valueIsLetter = strippedValue[j]
        ? strippedValue[j].match(/[A-Z]/i)
        : false;

      const matchesMaskedNumberSym = maskedNumber.indexOf(placeholder[i]) >= 0;
      const matchesMaskedLetterSym = maskedLetter.indexOf(placeholder[i]) >= 0;

      if (
        (matchesMaskedNumberSym && valueIsInt) ||
        (isCharsetPresent && matchesMaskedLetterSym && valueIsLetter)
      ) {
        // eslint-disable-next-line no-plusplus
        newValue += strippedValue[j++];
      } else if (
        (!isCharsetPresent && !valueIsInt && matchesMaskedNumberSym) ||
        (isCharsetPresent &&
          ((matchesMaskedLetterSym && !valueIsLetter) ||
            (matchesMaskedNumberSym && !valueIsInt)))
      ) {
        // user is typing characters in 'maskedNumber' & 'maskedLetter
        // this.options.onError( e ); // write your own error handling function
        return newValue;
      } else {
        // user
        newValue += placeholder[i];
      }
    }
    return newValue;
  };

  updateShellValue = () => {
    const { value } = this.input.current;
    this.inputShell.current.innerHTML = `<i>${value}</i>${this.props.control.placeholder.substring(
      value.length
    )}`;
  };

  handleInputChange = () => {
    this.input.current.value = this.handleCurrentChange();
    this.updateShellValue();
  };

  handleNormalTextChange = e => {
    console.log("normal", e.target.value);
  };

  render() {
    const { control } = this.props;

    return (
      <div>
        {control.placeholder && (
          <span
            className="flex-xy-center"
            ref={this.inputShell}
            aria-hidden="true"
          >
            {control.placeholder}
          </span>
        )}
        <input
          type={control.type}
          ref={this.input}
          onChange={
            control.pattern || control.charset
              ? this.handleInputChange
              : this.handleNormalTextChange
          }
          className="cmp-text__input"
          pattern={control.pattern ? control.pattern : undefined}
          id="world"
        />
        <style jsx>
          {`
            div {
              position: relative;
            }

            span {
              position: absolute;
              left: 0;
              top: -1px;
              pointer-events: none;
              color: lightgrey;
              padding: 0.4rem 0.7rem;
              height: 100%;
              letter-spacing: 0.05em;
            }

            span :global(i) {
              visibility: hidden;
            }

            .cmp-text__input {
              height: 2.7rem;
              width: 100%;
              padding: 0.4rem 0.7rem;
              color: rgba(0, 0, 0, 0.76);
              font-weight: 400;
              font-style: normal;
              font-size: inherit;
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
      </div>
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
)(TextInput);
