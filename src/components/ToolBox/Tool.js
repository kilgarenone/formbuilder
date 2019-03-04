import React, { Component } from "react";
import "./tool.scss";

export default class Tool extends Component {
  clickHandler = () => {
    this.props.handleSelectedTool(this.props.item);
  };

  render() {
    return (
      <>
        <button
          type="button"
          className="cmp-tool"
          onClick={this.clickHandler}
          role="menuitem"
        >
          {this.props.name}
        </button>
      </>
    );
  }
}
