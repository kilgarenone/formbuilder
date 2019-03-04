import React, { Component } from "react";
import ButtonItem from "../ButtonItem";
import Button from "../Button";
import "./dropDown.scss";

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
      <div className="cmp-dropDown">
        <Button
          type="button"
          aria-haspopup="true"
          aria-label="Select text input type"
          onClick={this.toggleMenu}
        >
          {this.state.currentActiveItemDesc}
        </Button>
        {this.state.isMenuOpen && (
          <div role="menu">
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
      </div>
    );
  }
}

export default Dropdown;
