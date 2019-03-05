import React, { Component } from "react";
import ButtonItem from "../ButtonItem/ButtonItem";
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
    const { handleSelectedItem, accessorDesc } = this.props;

    handleSelectedItem(item);
    this.setState({
      currentActiveItemDesc: accessorDesc ? item[accessorDesc] : item.desc
    });
    this.toggleMenu();
  };

  render() {
    const { accessorKey, accessorDesc, items } = this.props;

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
            {items.map(item => (
              <ButtonItem
                key={accessorKey ? item[accessorKey] : item.type}
                item={item}
                type="button"
                onClick={this.handleSelectedItem}
              >
                {accessorDesc ? item[accessorDesc] : item.desc}
              </ButtonItem>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
