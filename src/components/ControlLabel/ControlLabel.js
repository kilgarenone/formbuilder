import React from "react";
import "./controlLabel.scss";

export default function Label({
  handlePasteInLabel = null,
  handleKeyPressInLabel = null,
  handleClickInLabel = null,
  handleInputInLabel = null,
  doNotShowLabelPlaceholder = false,
  isContentEditable = false
}) {
  return (
    <label
      className="cmp-controlLabel"
      contentEditable={isContentEditable}
      onPaste={handlePasteInLabel}
      onKeyPress={handleKeyPressInLabel}
      onClick={handleClickInLabel}
      onInput={handleInputInLabel}
      spellCheck={isContentEditable ? false : null}
      htmlFor="world"
      suppressContentEditableWarning={isContentEditable}
    >
      {!doNotShowLabelPlaceholder && <span>Label</span>}
    </label>
  );
}
