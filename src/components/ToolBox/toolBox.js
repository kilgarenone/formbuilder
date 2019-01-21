import React, { Component } from "react";
import Tool from "./Tool";

const TOOLS = [
  { displayName: "Text Input", type: "text" },
  { displayName: "Checkbox", type: "checkBox" },
  { displayName: "Radio Button", type: "radioButton" }
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
      <>
        <div>
          <button
            type="button"
            onClick={this.handleClickToolBox}
            aria-expanded="false"
            aria-haspopup="true"
            className="btn-toolBox"
          >
            <div className="flex-col-center">
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
                  toolType={tool.type}
                  name={tool.displayName}
                  handleSelectedTool={handleSelectedTool}
                />
              ))}
            </div>
          )}
        </div>
        <style jsx>
          {`
            .btn-toolBox {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              padding: 1rem;
              background-color: rgb(233, 243, 236);
              color: rgb(100, 150, 116);
              border-radius: 20px;
              border: none;
              cursor: pointer;
            }

            .toolBox-arrow-dropdown-icon {
              position: absolute;
              right: 20px;
              fill: rgb(100, 150, 116);
            }

            .toolBox-menu {
              display: flex;
              flex-wrap: wrap;
            }

            .toolBox-add-icon {
              fill: rgb(100, 150, 116);
            }

            .toolBox-icon-and-desc {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          `}
        </style>
      </>
    );
  }
}
