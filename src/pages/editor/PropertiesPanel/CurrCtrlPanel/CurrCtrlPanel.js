import React, { Component } from "react";
import { connect } from "react-redux";
import Label from "../../../../components/ControlLabel/ControlLabel";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { setControlProps } from "../PropertiesPanel.state";

const CURRENCY = [
  {
    currencyType: "usd",
    locale: "en-US",
    desc: "\u0024 USD"
  },
  { currencyType: "eur", desc: "\u20AC EUR" },
  { currencyType: "gbp", desc: "\u00A3 GBP" },
  { currencyType: "rmb", desc: "\u00A5 RMB" },
  { currencyType: "inr", desc: "\u20B9 INR" }
];

class CurrCtrlPanel extends Component {
  state = {};

  handleSelectedCurr = currObj => {
    const { desc, ...restConfig } = currObj;

    this.props.setControlProps(restConfig);
  };

  render() {
    return (
      <div>
        <Label>Currency</Label>
        <Dropdown
          items={CURRENCY}
          handleSelectedItem={this.handleSelectedCurr}
          initialActiveItemDesc={`\u0024 USD`}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setControlProps
};

export default connect(
  null,
  mapDispatchToProps
)(CurrCtrlPanel);
