import React, { Component } from "react";
import { connect } from "react-redux";
import { MDCTextField } from "@material/textfield";
import ToolBox from "../ToolBox/ToolBox";
import FormColTitle from "./FormColTitle";
import Control from "../ControlWrapper/ControlWrapper";
import {
  createNewControlActionCreator,
  createNewFormColumnActionCreator,
  updateFormTitle
} from "../../pages/editor/Editor.state";
import TextInputContainer from "../TextInput/TextInputContainer";
import TextInput from "../TextInput/TextInput";

class FormColumn extends Component {
  state = { doNotShowPlaceholder: false, controls: [] };

  formId = `form-${new Date().getTime()}`;

  componentDidMount() {
    const textField = new MDCTextField(
      document.querySelector(".mdc-text-field")
    );
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
      <div className="t-t">
        <FormColTitle
          handleTitleInput={this.handleTitleInput}
          doNotShowPlaceholder={this.state.doNotShowPlaceholder}
        />
        {/* <div>{this.state.controls.map(this.mapToControl)}</div> */}
        {/* <TextInput control="ho3ij2o3ij2" /> */}
        <div className="mdc-text-field">
          <input className="mdc-text-field__input" />
          <div className="mdc-line-ripple" />
          <label className="mdc-floating-label">Name</label>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Default
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
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
