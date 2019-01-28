import React from "react";
import Label from "components/Label";

export default function TextInput({
  control,
  inputShellRef = null,
  inputRef = null,
  handleInputChange
}) {
  return (
    <div>
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
