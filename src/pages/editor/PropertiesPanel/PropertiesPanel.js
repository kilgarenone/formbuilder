import React, { Component } from "react";
import Dropdown from "components/Dropdown";
import { connect } from "react-redux";
import { controlSelector } from "./PropertiesPanel.state";
import Button from "components/Button"

const TEXT_INPUT_TYPES = [
  { key: "date", desc: "Date" },
  { key: "currency", desc: "Currency" }
];

class PropertiesPanel extends Component {
  state = { showDateFormatSelections: false };

  handleSelectedItem = key => {
    if (key === "date") {
      this.setState({ showDateFormatSelections: true });
    }
  };

  handleSelectedFormating = (config) => {
    console.log(config)
  }

  render() {
    return (
      <>
        <aside>
          {this.props.activeControlProps ? (
            <Dropdown
              items={TEXT_INPUT_TYPES}
              handleSelectedItem={this.handleSelectedItem}
            >
              {this.props.activeControlProps.type}
            </Dropdown>
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
                item={{placeholder: `DD/MM/YYYY`, pattern: `(1[0-2]|0[1-9])\/\d\d`}} 
                onClick={this.handleSelectedFormating} >
                <span>DD/MM/YYY</span>
            </Button> 
            )
          }
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

export default connect(
  mapStateToProps,
  null
)(PropertiesPanel);
