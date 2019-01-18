import React from "react";

export default function EditorLayout({ children }) {
  return (
    <>
      <div>{children}</div>
      <style jsx>
        {`
          div {
            max-width: 480px;
            margin: 0 auto;
            padding: 0.7rem;
            min-height: calc(100vh - 70px - 1rem);
          }
        `}
      </style>
    </>
  );
}
