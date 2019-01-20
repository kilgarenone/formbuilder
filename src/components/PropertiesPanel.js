import React, { Component } from "react";
import Dropdown from "./Dropdown";

const TEXT_INPUT_TYPES = [
  { key: "date", desc: "Date" },
  { key: "currency", desc: "Currency" }
];

class PropertiesPanel extends Component {
  state = {};

  render() {
    return (
      <>
        <aside>
          <Dropdown
            items={TEXT_INPUT_TYPES}
            handleSelectedItem={this.handleSelectedItem}
          >
            Input Type
          </Dropdown>
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
