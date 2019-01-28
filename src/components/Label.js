import React from "react";

export default function Label({
  handlePasteInLabel = null,
  handleKeyPressInLabel = null,
  handleClickInLabel = null,
  handleInputInLabel = null,
  doNotShowLabelPlaceholder = null,
  isContentEditable = null,
  children
}) {
  return (
    <>
      <label
        contentEditable={isContentEditable}
        onPaste={handlePasteInLabel}
        onKeyPress={handleKeyPressInLabel}
        onClick={handleClickInLabel}
        onInput={handleInputInLabel}
        spellCheck={isContentEditable ? false : null}
        htmlFor="world"
        suppressContentEditableWarning={isContentEditable}
      >
        {children || (!doNotShowLabelPlaceholder && <span>Label</span>)}
      </label>
      <style jsx>
        {`
          label {
            position: relative;
            display: block;
            min-height: 2rem;
          }

          label > :global(br) {
            display: none;
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
