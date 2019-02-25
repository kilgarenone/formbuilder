import React, { Component } from "react";
import "./input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.input.current.focus();
    }
  }

  render() {
    const { className, ...props } = this.props;

    return <input ref={this.input} {...props} />;
  }
}

export default Input;
