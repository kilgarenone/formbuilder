import React from "react";

export default function Tool({ name, handleSelectedTool }) {
  function clickHandler() {
    handleSelectedTool(name);
  }

  return (
    <>
      <button type="button" onClick={clickHandler} role="menuitem">
        {name}
      </button>
      <style jsx>
        {`
          button {
            flex-basis: 33%;
            height: 60px;
            background: pink;
          }
        `}
      </style>
    </>
  );
}
