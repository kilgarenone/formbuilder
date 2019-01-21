/* eslint-disable react/button-has-type */
import React from "react";

function Button({ children, ...props }) {
  return (
    <>
      <button {...props}>{children}</button>
      <style jsx>
        {`
          button {
            font-family: inherit;
            display: inline-block;
            border-radius: 99999rem;
            font-weight: 500;
            white-space: nowrap;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            appearance: none;
            padding: 0.3em 1.5em;
            border: 2px solid blue;
            background-color: transparent;
            width: 100%;
          }
        `}
      </style>
    </>
  );
}

export default Button;
