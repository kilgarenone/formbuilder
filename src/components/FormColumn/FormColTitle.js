import React from "react";

export default function FormColTitle({
  handleTitleInput,
  doNotShowPlaceholder
}) {
  return (
    <>
      <div className="mb-1">
        <h1
          onInput={handleTitleInput}
          spellCheck="false"
          contentEditable
          suppressContentEditableWarning
        >
          {!doNotShowPlaceholder && <span>Title</span>}
        </h1>
      </div>
      <style jsx>
        {`
          div {
            position: relative;
            height: 3rem;
          }

          h1 {
            height: 100%;
            z-index: 1;
          }

          span {
            position: absolute;
            top: 0;
            color: #b3b3b1;
            pointer-events: none;
          }
        `}
      </style>
    </>
  );
}
