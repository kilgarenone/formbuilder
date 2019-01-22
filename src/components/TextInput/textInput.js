import React, { Component } from "react";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: "MM/YY" };
    this.input = React.createRef();
    this.inputShell = React.createRef();
  }

  handleInputChange = e => {
    const target = this.input.current;
    const isCharsetPresent = ""; // TODO: set your custom masking pattern
    const maskedNumber = "XMDY";
    const maskedLetter = "_";
    const placeholder = isCharsetPresent || this.state.placeholder;
    const placeholderLength = placeholder.length;
    const { value } = target;
    let newValue = "";

    const strippedValue = isCharsetPresent
      ? value.replace(/\W/g, "") // only keeps A-Z, a-z, 0-9, _
      : value.replace(/\D/g, ""); // only keeps 0-9 (digits)

    for (let i = 0, j = 0; i < placeholderLength; i++) {
      const parseAsIntVal = parseInt(strippedValue[j], 10);
      const isInt =
        typeof parseAsIntVal === "number" && parseAsIntVal % 1 === 0;
      const isLetter = strippedValue[j]
        ? strippedValue[j].match(/[A-Z]/i)
        : false;
      const matchesNumber = maskedNumber.indexOf(placeholder[i]) >= 0;
      const matchesLetter = maskedLetter.indexOf(placeholder[i]) >= 0;

      if (
        (matchesNumber && isInt) ||
        (isCharsetPresent && matchesLetter && isLetter)
      ) {
        // eslint-disable-next-line no-plusplus
        newValue += strippedValue[j++];
        console.log("newvalue", newValue);
      } else if (
        (!isCharsetPresent && !isInt && matchesNumber) ||
        (isCharsetPresent &&
          ((matchesLetter && !isLetter) || (matchesNumber && !isInt)))
      ) {
        // user is typing characters in 'maskedNumber' & 'maskedLetter
        // this.options.onError( e ); // write your own error handling function
        return newValue;
      } else {
        newValue += placeholder[i];
      }

      // break if no characters left and the pattern is non-special character
      if (!strippedValue[j]) {
        break;
      }
    }
    target.value = newValue;
    this.updateShellValue();
  };

  updateShellValue = () => {
    const value = this.input.current.value;

    this.inputShell.current.innerHTML = `<i>${value}</i>${this.state.placeholder.substring(
      value.length
    )}`;
  };

  render() {
    return (
      <>
        <span ref={this.inputShell} />
        <input
          type="tel"
          ref={this.input}
          onChange={this.handleInputChange}
          className="cmp-text__input"
          pattern="(1[0-2]|0[1-9])/\d\d"
          id="world"
        />
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

export default TextInput;
