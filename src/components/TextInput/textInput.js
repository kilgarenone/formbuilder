import React, { Component } from "react";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: "MM/YY" };
    this.input = React.createRef();
    this.inputShell = React.createRef();
  }

  handleCurrentChange = e => {
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
    this.inputShell.current.innerHTML = `<i>${value}</i>${this.state.placeholder.substring(
      value.length
    )}`;
  };

  handleInputChange = () => {
    this.input.current.value = this.handleCurrentChange();
    this.updateShellValue();
  };

  render() {
    return (
      <div>
        <span
          className="flex-xy-center"
          ref={this.inputShell}
          aria-hidden="true"
        />
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
            div {
              position: relative;
            }

            span {
              position: absolute;
              left: 0;
              top: 1px;
              pointer-events: none;
              color: lightgrey;
              padding: 0.4rem 0.7rem;
              height: 100%;
              font-family: monospace;
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

export default TextInput;
