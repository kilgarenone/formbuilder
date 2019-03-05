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
      {control.placeholder && (
        <span className="flex-xy-center" ref={inputShellRef} aria-hidden="true">
          {control.placeholder}
        </span>
      )}
      <input
        type={control.type}
        ref={inputRef}
        onChange={control.pattern || control.charset ? handleInputChange : null}
        pattern={control.pattern ? control.pattern : undefined}
        id="world"
      />
    </div>
  );
}
