import React, { Component } from "react";
import { connect } from "react-redux";
import ToolBox from "../ToolBox/ToolBox";
import FormColTitle from "./FormColTitle";
import Control from "../Control";
import {
  createNewControlActionCreator,
  createNewFormColumnActionCreator,
  updateFormTitle
} from "../../pages/editor/Editor.state";

class FormColumn extends Component {
  state = { doNotShowPlaceholder: false, controls: [] };

  formId = `form-${new Date().getTime()}`;

  componentDidMount() {
    this.props.createNewFormColumnActionCreator(this.formId);
  }

  handleTitleInput = e => {
    const title = e.target.textContent.trim();
    this.props.updateFormTitle(this.formId, title);
    this.setState({
      doNotShowPlaceholder: !!title
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
  createNewFormColumnActionCreator,
  updateFormTitle
};

export default connect(
  null,
  mapDispatchToProps
)(FormColumn);
