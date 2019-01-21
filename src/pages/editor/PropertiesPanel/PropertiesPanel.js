import React, { Component } from "react";
import Dropdown from "components/Dropdown";
import { connect } from "react-redux";
import { controlSelector } from "./PropertiesPanel.state";

const TEXT_INPUT_TYPES = [
  { key: "date", desc: "Date" },
  { key: "currency", desc: "Currency" }
];

class PropertiesPanel extends Component {
  state = {};

  handleSelectedItem = () => {};

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
              <div>Select a control to being</div>
            </div>
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

export default connect(
  mapStateToProps,
  null
)(PropertiesPanel);
