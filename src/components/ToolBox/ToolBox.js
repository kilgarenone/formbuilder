import React, { Component } from "react";
import Tool from "./Tool";
import "./toolBox.scss";

const TOOLS = [
  { desc: "Text input", type: "text" }
  // { desc: "Checkbox", type: "checkBox" },
  // { desc: "Radio button", type: "radioButton" }
];

export default class ToolBox extends Component {
  state = { showMenu: false };

  handleClickToolBox = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  };

  render() {
    const { handleSelectedTool } = this.props;

    return (
      <div className="cmp-toolBox">
        <button
          type="button"
          onClick={this.handleClickToolBox}
          aria-expanded="false"
          aria-haspopup="true"
          className="btn-toolBox"
        >
          <div className="flex-col align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              className="toolBox-add-icon"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
            <h2 id="aria-toolBox">Add a form control</h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="toolBox-arrow-dropdown-icon"
          >
            <path d="M7 10l5 5 5-5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
        {this.state.showMenu && (
          <div className="toolBox-menu" role="menu">
            {TOOLS.map(tool => (
              <Tool
                key={tool.type}
                item={tool}
                name={tool.desc}
                handleSelectedTool={handleSelectedTool}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
