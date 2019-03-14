import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setInputFormat,
  setAdvancedInputFormat
} from "../PropertiesPanel.state";
import Button from "../../../../components/Button";

class DateCtrlPanel extends Component {
  constructor(props) {
    super(props);
  }

  handleSelectedFormatting = config => {
    this.props.setInputFormat(config);
  };

  render() {
    return (
      <div>
        <h4>Masking</h4>
        <Button
          type="button"
          title="2 digits days, months, and 4 digits year"
          item={{
            format: `MM/DD/YYYY`,
            // eslint-disable-next-line no-useless-escape
            pattern: `(1[0-2]|0[1-9])/\d\d/\d\d\d\d`,
            dataType: `date`
          }}
          onClick={this.handleSelectedFormatting}
        >
          <span>MM/DD/YYYY</span>
        </Button>
        <Button
          type="button"
          title="2 digits months, and 2 digits year"
          item={{
            format: "YY/MM",
            // eslint-disable-next-line no-useless-escape
            pattern: `(1[0-2]|0[1-9])\/\d\d`,
            dataType: `date`
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
    );
  }
}

const mapDispatchToProps = {
  setInputFormat,
  setAdvancedInputFormat
};

export default connect(
  null,
  mapDispatchToProps
)(DateCtrlPanel);
