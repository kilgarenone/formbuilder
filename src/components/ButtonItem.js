/* eslint-disable react/button-has-type */
import React, { Component } from "react";

class ButtonItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.item);
  };

  render() {
    const { children, item, onClick, ...props } = this.props;
    return (
      <button onClick={this.handleClick} {...props}>
        {children}
      </button>
    );
  }
}

export default ButtonItem;
