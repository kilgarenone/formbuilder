import React, { Component } from "react";
import ButtonItem from "./ButtonItem";
import Button from "./Button";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  render() {
    return (
      <div>
        <Button
          type="button"
          aria-haspopup="true"
          aria-label="Select text input type"
          onClick={this.toggleMenu}
        >
          {this.props.children}
        </Button>
        {this.state.isMenuOpen && (
          <div role="menu">
            {this.props.items.map(item => (
              <ButtonItem
                key={item.key}
                itemKey={item.key}
                type="button"
                onClick={this.props.handleSelectedItem}
              >
                {item.desc}
              </ButtonItem>
            ))}
          </div>
        )}
        <style jsx>
          {`
            button {
              cursor: pointer;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Dropdown;
