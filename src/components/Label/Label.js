import React from "react";
import "./label.scss";

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
    <label
      className="cmp-label"
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
  );
}
