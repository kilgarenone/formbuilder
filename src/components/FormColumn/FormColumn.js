import React, { Component } from "react";
import ToolBox from "../ToolBox/ToolBox";
import FormColTitle from "./FormColTitle";
import TextInput from "../TextInput/TextInput";

export default class FormColumn extends Component {
  state = { doNotShowPlaceholder: false, controls: [] };

  handleTitleInput = e => {
    this.setState({ doNotShowPlaceholder: !!e.target.textContent.trim() });
  };

  handleSelectedTool = toolType => {
    const control = { key: `ctrl-${new Date().getTime()}`, toolType };

    this.setState(prevState => ({
      controls: [...prevState.controls, control]
    }));
  };

  mapToControl = ({ key, toolType }) => {
    let component;
    if (toolType === "text") {
      component = <TextInput key={key} />;
    }
    return component;
  };

  render() {
    return (
      <div>
        <FormColTitle
          handleTitleInput={this.handleTitleInput}
          doNotShowPlaceholder={this.state.doNotShowPlaceholder}
        />
        <div>{this.state.controls.map(this.mapToControl)}</div>
        <ToolBox handleSelectedTool={this.handleSelectedTool} />
      </div>
    );
  }
}
