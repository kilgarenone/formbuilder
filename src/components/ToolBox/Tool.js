import React, { Component } from "react";

export default class Tool extends Component {
  clickHandler = () => {
    this.props.handleSelectedTool(this.props.item);
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.clickHandler} role="menuitem">
          {this.props.name}
        </button>
        <style jsx>
          {`
            button {
              flex-basis: 33%;
              height: 60px;
              background: pink;
            }
          `}
        </style>
      </>
    );
  }
}
