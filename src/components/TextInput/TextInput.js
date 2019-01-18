import React from "react";

export default function TextInput() {
  return (
    <>
      <div className="cmp-text">
        <label htmlFor="world">
          Hello
          <input
            className="cmp-text__input"
            id="world"
            type="text"
            placeholder="himan"
          />
        </label>
      </div>
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
