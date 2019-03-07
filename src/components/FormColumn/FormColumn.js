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
import "./formColumn.scss";
import hamburger from "../../img/hamburger.png";

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
      <div className="cmp-formColumn">
        <div className="t-t">
          {!this.state.controls.length && (
            <figure>
              <img
                className="hamburger"
                src={hamburger}
                alt="Add an input from the toolbox below to begin"
              />
              <figcaption>Add an input to begin</figcaption>
            </figure>
          )}
          {/* <FormColTitle
          handleTitleInput={this.handleTitleInput}
          doNotShowPlaceholder={this.state.doNotShowPlaceholder}
        /> */}
          <div>{this.state.controls.map(this.mapToControl)}</div>
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
