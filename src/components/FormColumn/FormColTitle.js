import React from "react";
import "./formColTitle.scss";

export default function FormColTitle({
  handleTitleInput,
  doNotShowPlaceholder
}) {
  return (
    <>
      <div className="cmp-formColTitle mb-1">
        <h1
          onInput={handleTitleInput}
          spellCheck="false"
          contentEditable
          suppressContentEditableWarning
        >
          {!doNotShowPlaceholder && <span>Title</span>}
        </h1>
      </div>
    </>
  );
}
