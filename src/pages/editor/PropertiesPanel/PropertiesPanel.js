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

const TEXT_INPUT_TYPES = [
  { type: "text", desc: "Text input" },
  { type: "date", desc: "Date" }
  // { type: "currency", desc: "Currency" }
];

class PropertiesPanel extends Component {
  state = { showDateFormatSelections: false };

  handleSelectedItem = ({ type }) => {
    if (type === "date") {
      this.setState({ showDateFormatSelections: true });
    } else {
      this.setState({ showDateFormatSelections: false });
      // TODO: temporary code for MVP
      this.props.setInputFormat({
        pattern: "",
        type: "text",
        charset: "",
        placeholder: ""
      });
    }
  };

  handleSelectedFormatting = config => {
    this.props.setInputFormat(config);
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
        {this.state.showDateFormatSelections && (
          <div>
            <h4>Masking</h4>
            <Button
              type="button"
              title="2 digits days, months, and 4 digits year"
              item={{
                placeholder: `MM/DD/YYYY`,
                // eslint-disable-next-line no-useless-escape
                pattern: `(1[0-2]|0[1-9])/\d\d/\d\d\d\d`,
                type: `date`
              }}
              onClick={this.handleSelectedFormatting}
            >
              <span>MM/DD/YYYY</span>
            </Button>
            <Button
              type="button"
              title="2 digits months, and 2 digits year"
              item={{
                placeholder: `MM/YY`,
                // eslint-disable-next-line no-useless-escape
                pattern: `(1[0-2]|0[1-9])\/\d\d`,
                type: `date`
              }}
              onClick={this.handleSelectedFormatting}
            >
              <span>MM/YY</span>
            </Button>
            <h5>Custom</h5>
            <input type="text" onChange={this.props.setAdvancedInputFormat} />
            <ul>
              <li>Type 'x' to signify number characters</li>
              <li>Type '_' to signify alphabets characters</li>
              <li>Press 'space' to enforce space</li>
            </ul>
          </div>
        )}
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
