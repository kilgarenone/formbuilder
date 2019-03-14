import React from "react";
import "./textInput.scss";
import Label from "../ControlLabel/ControlLabel";

export default function TextInput({
  control,
  inputShellRef = null,
  inputRef = null,
  handleInputChange
}) {
  return (
    <div className="cmp-textInput">
      {!inputRef && <Label>{control.label}</Label>}
      {control.format && (
        <span
          className="flex-xy-center cmp-inputShell"
          ref={inputShellRef}
          aria-hidden="true"
        >
          {control.format}
        </span>
      )}
      <input
        className="form-control"
        onChange={handleInputChange}
        type={control.type}
        ref={inputRef}
        pattern={control.pattern ? control.pattern : undefined}
        id="world"
      />
    </div>
  );
}
