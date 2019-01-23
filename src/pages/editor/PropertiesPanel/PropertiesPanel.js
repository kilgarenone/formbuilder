import React, { Component } from "react";
import Dropdown from "components/Dropdown";
import { connect } from "react-redux";
import Button from "components/Button";
import { controlSelector, setInputFormat } from "./PropertiesPanel.state";

const TEXT_INPUT_TYPES = [
  { type: "date", desc: "Date" },
  { type: "currency", desc: "Currency" }
];

class PropertiesPanel extends Component {
  state = { showDateFormatSelections: false };

  handleSelectedItem = ({ type }) => {
    if (type === "date") {
      this.setState({ showDateFormatSelections: true });
    }
  };

  handleSelectedFormating = config => {
    // TODO: pass config to formId -> ctrlId via redux action creator
    // access control object in reducer via its 'state' value
    this.props.setInputFormat(config);
  };

  render() {
    return (
      <>
        <aside>
          {this.props.activeControlProps ? (
            <div>
              <h4>Input type</h4>
              <Dropdown
                items={TEXT_INPUT_TYPES}
                handleSelectedItem={this.handleSelectedItem}
                initialActiveItemDesc={this.props.activeControlProps.desc}
              />
            </div>
          ) : (
            <div>
              <div>Control's Properties panel</div>
              <div>Select a control to begin</div>
            </div>
          )}
          {this.state.showDateFormatSelections && (
            <Button
              type="button"
              title="2 digits days, months, and 4 digits year"
              item={{
                placeholder: `MM/DD/YYYY`,
                // eslint-disable-next-line no-useless-escape
                pattern: `(1[0-2]|0[1-9])/\d\d\d\d`,
                type: `date`
              }}
              onClick={this.handleSelectedFormating}
            >
              <span>DD/MM/YYY</span>
            </Button>
          )}
        </aside>
        <style jsx>
          {`
            aside {
              position: fixed;
              right: 0;
              top: 70px;
              bottom: 0;
              width: 200px;
              background-color: #fcfcfc;
            }
          `}
        </style>
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    activeControlProps: controlSelector(state)
  };
}

const mapDispatchToProps = {
  setInputFormat
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertiesPanel);
