import React, { Component } from "react";
import { connect } from "react-redux";
import Label from "../../../../components/ControlLabel/ControlLabel";
import Dropdown from "../../../../components/Dropdown/Dropdown";

const CURRENCY = [
  { type: "usd", desc: "\u0024 USD" },
  { type: "eur", desc: "\u20AC EUR" },
  { type: "gbp", desc: "\u00A3 GBP" },
  { type: "rmb", desc: "\u00A5 RMB" },
  { type: "inr", desc: "\u20B9 INR" }
];

class CurrCtrlPanel extends Component {
  state = {};

  render() {
    return (
      <div>
        <Label>Currency</Label>
        <Dropdown
          items={CURRENCY}
          handleSelectedItem={this.handleSelectedTheme}
          initialActiveItemDesc="USD"
        />
      </div>
    );
  }
}

export default connect(
  null,
  null
)(CurrCtrlPanel);
