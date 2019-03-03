/* eslint-disable react/button-has-type */
import React, { Component } from "react";

class Button extends Component {
  handleClick = () => {
    this.props.onClick(this.props.item || null);
  };

  render() {
    const { item, onClick, children, ...props } = this.props;

    return (
      <button onClick={this.handleClick} {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
