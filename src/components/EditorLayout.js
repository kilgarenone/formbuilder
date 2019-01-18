import React from "react";
import PropertiesPanel from "./PropertiesPanel";

export default function EditorLayout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <PropertiesPanel />
      <style jsx>
        {`
          main {
            max-width: 480px;
            margin: 0 auto;
            padding: 0.7rem;
            background-color: white;
          }

          div {
            background-color: lightgrey;
            min-height: calc(100vh - 70px);
          }
        `}
      </style>
    </div>
  );
}
