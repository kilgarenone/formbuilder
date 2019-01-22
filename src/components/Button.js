/* eslint-disable react/button-has-type */
import React, { Component } from "react";

class Button extends Component {
  handleClick = () => {
    this.props.onClick(this.props.item || null);
  };

  render() {
    const { item, onClick, children, ...props } = this.props;

    return (
      <>
        <button onClick={this.handleClick} {...props}>
          {children}
        </button>
        <style jsx>
          {`
            button {
              font-family: inherit;
              display: inline-block;
              border-radius: 99999rem;
              font-weight: 500;
              white-space: nowrap;
              cursor: pointer;
              text-align: center;
              text-decoration: none;
              appearance: none;
              padding: 0.3em 1.5em;
              border: 2px solid blue;
              background-color: transparent;
              width: 100%;
            }
          `}
        </style>
      </>
    );
  }
}

export default Button;
