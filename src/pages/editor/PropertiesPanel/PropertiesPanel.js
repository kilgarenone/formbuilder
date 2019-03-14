import React, { Component } from "react";
import { connect } from "react-redux";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button";
import {
  controlSelector,
  setInputFormat,
  setAdvancedInputFormat
} from "./PropertiesPanel.state";
import "./propertiesPanel.scss";
import { setLabelText } from "../Editor.state";
import DateControlPanel from "./DateCtrlPanel/DateCtrlPanel";
import CurrCtrlPanel from "./CurrCtrlPanel/CurrCtrlPanel";
import TabContents from "../../../components/TabContents/TabContents";

const TEXT_INPUT_TYPES = [
  { type: "text", desc: "Text input" },
  { type: "date", desc: "Date" },
  { type: "currency", desc: "Currency" }
];

class PropertiesPanel extends Component {
  state = { activePanel: "" };

  handleSelectedItem = ({ type }) => {
    this.setState({ activePanel: type });
    // if (type === "date") {
    //   this.setState({ showDateFormatSelections: true });
    // } else {
    //   this.setState({ showDateFormatSelections: false });
    //   // TODO: temporary code for MVP
    //   this.props.setInputFormat({
    //     pattern: "",
    //     type: "text",
    //     charset: "",
    //     placeholder: ""
    //   });
    // }
  };

  setLabel = e => {
    console.log(e);
    this.props.setLabelText(e.target.value);
  };

  render() {
    const { activeControlProps } = this.props;
    return (
      <aside className="cmp-propertiesPanel">
        {activeControlProps ? (
          <>
            <div>
              <h4>Label</h4>
              <input onInput={this.setLabel} value={activeControlProps.label} />
            </div>
            <div>
              <h4>Input type</h4>
              <Dropdown
                items={TEXT_INPUT_TYPES}
                handleSelectedItem={this.handleSelectedItem}
                initialActiveItemDesc={activeControlProps.desc}
              />
            </div>
          </>
        ) : (
          <div>
            <div>Control's Properties panel</div>
            <div>Select a control to begin</div>
          </div>
        )}

        <TabContents activeView={this.state.activePanel}>
          <DateControlPanel label="date" />
          <CurrCtrlPanel label="currency" />
        </TabContents>
      </aside>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    activeControlProps: controlSelector(state)
  };
}

const mapDispatchToProps = {
  setInputFormat,
  setLabelText,
  setAdvancedInputFormat
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertiesPanel);
