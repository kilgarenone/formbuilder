import React, { Component } from "react";
import ToolBox from "../ToolBox/ToolBox";
import FormColTitle from "./FormColTitle";

export default class FormColumn extends Component {
  state = { doNotShowPlaceholder: false };

  handleTitleInput = e => {
    this.setState({ doNotShowPlaceholder: !!e.target.textContent.trim() });
  };

  handleSelectedTool = toolType => {
    console.log(toolType);
  };

  render() {
    return (
      <div>
        <FormColTitle
          handleTitleInput={this.handleTitleInput}
          doNotShowPlaceholder={this.state.doNotShowPlaceholder}
        />
        <ToolBox handleSelectedTool={this.handleSelectedTool} />
      </div>
    );
  }
}
