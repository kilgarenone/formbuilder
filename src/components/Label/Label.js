import React from "react";
import "./label.scss";

export default function Label({ children }) {
  return (
    <label className="cmp-label mb-0" htmlFor="world">
      {children}
    </label>
  );
}
