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

  handleSelectedItem = item => {
    console.log(item);
    // this.props.handleSelectedItem(item);
    this.toggleMenu();
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
          <div className="dropdown-menu" role="menu">
            {this.props.items.map(item => (
              <ButtonItem
                key={item.key}
                itemKey={item.key}
                type="button"
                onClick={this.handleSelectedItem}
              >
                {item.desc}
              </ButtonItem>
            ))}
          </div>
        )}
        <style jsx>
          {`
            .dropdown-menu {
              position: absolute;
              background-color: white;
              width: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Dropdown;
