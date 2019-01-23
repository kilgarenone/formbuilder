import React, { Component } from "react";
import { connect } from "react-redux";
import ToolBox from "../ToolBox/ToolBox";
import FormColTitle from "./FormColTitle";
import Control from "../Control";
import {
  createNewControlActionCreator,
  createNewFormColumnActionCreator
} from "../../pages/editor/Editor.state";

class FormColumn extends Component {
  state = { doNotShowPlaceholder: false, controls: [] };

  formId = `form-${new Date().getTime()}`;

  componentDidMount() {
    this.props.createNewFormColumnActionCreator(this.formId);
  }

  handleTitleInput = e => {
    this.setState({
      doNotShowPlaceholder: !!e.target.textContent.trim()
    });
  };

  handleSelectedTool = item => {
    const control = {
      key: `ctrl-${new Date().getTime()}`,
      type: item.type,
      desc: item.desc
    };

    this.props.createNewControlActionCreator(control.key, this.formId, {
      type: control.type,
      desc: control.desc
    });

    this.setState(prevState => ({
      controls: [...prevState.controls, control]
    }));
  };

  mapToControl = ({ key, type }) => (
    <Control type={type} formId={this.formId} ctrlId={key} key={key} />
  );

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

const mapDispatchToProps = {
  createNewControlActionCreator,
  createNewFormColumnActionCreator
};

export default connect(
  null,
  mapDispatchToProps
)(FormColumn);
