import React, { Component } from "react";

class PropertiesPanel extends Component {
  state = {};

  render() {
    return (
      <>
        <aside>
          <label htmlFor="propPanel-textMasking">
            Text masking
            <input type="text" id="propPanel-textMasking" />
          </label>
        </aside>
        <style jsx>
          {`
            aside {
              position: fixed;
              right: 0;
              top: 70px;
              bottom: 0;
              width: 200px;
              background-color: #fcfcfc;
            }
          `}
        </style>
      </>
    );
  }
}

export default PropertiesPanel;
