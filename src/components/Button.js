import React, { Component } from "react";

class Button extends Component {
  handleClick = () => {
    this.props.onClick(this.props.itemKey);
  };

  render() {
    const { children, ...props } = this.props;
    return (
      // eslint-disable-next-line react/button-has-type
      <button onClick={this.handleClick} {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
