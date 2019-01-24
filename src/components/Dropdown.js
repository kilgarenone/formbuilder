import React, { Component } from "react";
import ButtonItem from "./ButtonItem";
import Button from "./Button";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      currentActiveItemDesc: props.initialActiveItemDesc
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  handleSelectedItem = item => {
    this.props.handleSelectedItem(item);
    this.setState({ currentActiveItemDesc: item.desc });
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
          {this.state.currentActiveItemDesc}
        </Button>
        {this.state.isMenuOpen && (
          <div className="dropdown-menu" role="menu">
            {this.props.items.map(item => (
              <ButtonItem
                key={item.type}
                item={item}
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
