import React, { Component } from "react";
import { connect } from "react-redux";
import { controlSelectorViaFormIdAndCtrlId } from "../../pages/editor/Editor.state";
import conformInputToMasking, {
  updateInputShellValue
} from "../../lib/inputMasking";

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

  handleInputChange = () => {
    const { placeholder, charset } = this.props.control;

    this.input.current.value = conformInputToMasking(
      this.input.current.value,
      placeholder,
      charset
    );

    this.inputShell.current.innerHTML = updateInputShellValue(
      this.input.current.value,
      placeholder
    );
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
            control.pattern || control.charset ? this.handleInputChange : null
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
