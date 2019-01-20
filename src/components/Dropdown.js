import React from "react";
import Button from "./Button";

function Dropdown({ handleSelectedItem, items, children }) {
  return (
    <div>
      <button
        type="button"
        aria-haspopup="true"
        aria-label="Select text input type"
      >
        {children}
      </button>
      <div role="menu">
        {items.map(item => (
          <Button
            key={item.key}
            itemKey={item.key}
            type="button"
            onClick={handleSelectedItem}
          >
            {item.desc}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
