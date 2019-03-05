import React, { Component } from "react";
import "./leftPanel.scss";
import Dropdown from "../../../components/Dropdown/Dropdown";
import goFetch from "../../../lib/fetch";
import Label from "../../../components/Label/Label";

class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { themes: [] };
  }

  async componentDidMount() {
    try {
      const res = await goFetch({
        absoluteEndPoint: "https://bootswatch.com/api/4.json"
      });
      console.log(res);
      this.setState({ themes: res.themes });
    } catch (err) {
      console.log("Error loading themes data from Bootswatch");
    }
  }

  handleSelectedTheme = theme => {
    console.log("selected", theme);
  };

  render() {
    return (
      <div className="cmp-leftPanel">
        <div>
          <Label>Themes</Label>
          <Dropdown
            items={this.state.themes}
            accessorKey="name"
            accessorDesc="description"
            handleSelectedItem={this.handleSelectedTheme}
            initialActiveItemDesc="Flat and modern"
          />
        </div>
      </div>
    );
  }
}

export default LeftPanel;
