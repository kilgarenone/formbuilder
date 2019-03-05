/* eslint-disable react/button-has-type */
import React, { Component } from "react";
import "./buttonItem.scss";

class ButtonItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.item);
  };

  render() {
    const { children, item, onClick, ...props } = this.props;
    return (
      <button className="cmp-buttonItem" onClick={this.handleClick} {...props}>
        {children}
      </button>
    );
  }
}

export default ButtonItem;
