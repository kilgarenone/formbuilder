/* eslint-disable react/button-has-type */
import React, { Component } from "react";

class ButtonItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.itemKey);
  };

  render() {
    const { children, itemKey, onClick, ...props } = this.props;
    return (
      <>
        <button onClick={this.handleClick} {...props}>
          {children}
        </button>
        <style jsx>
          {`
            button {
              font-family: inherit;
              display: block;
              font-weight: 500;
              white-space: nowrap;
              cursor: pointer;
              text-align: left;
              text-decoration: none;
              padding: 0.3em;
              background-color: transparent;
              width: 100%;
            }
          `}
        </style>
      </>
    );
  }
}

export default ButtonItem;
