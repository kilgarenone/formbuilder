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

  // async componentDidMount() {
  //   try {
  //     const res = await goFetch({
  //       absoluteEndPoint: "https://bootswatch.com/api/4.json"
  //     });
  //     console.log(res);
  //     this.setState({ themes: res.themes });
  //   } catch (err) {
  //     console.log("Error loading themes data from Bootswatch");
  //   }
  // }

  selectedBootstrapTheme = () => {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.id = "t-t-theme";
    link.type = "text/css";
    link.href =
      "https://cdn.jsdelivr.net/gh/kilgarenone/custom-build-bootstrap@0.0.1/output/compiled.css";
    document.head.appendChild(link);
  };

  render() {
    return (
      <div className="cmp-leftPanel">
        <div>
          <Label>Themes</Label>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 612 612"
              focusable="false"
              role="img"
              width="60px"
              height="60px"
              onClick={this.selectedBootstrapTheme}
            >
              <title>Bootstrap</title>
              <path
                fill="#563D7C"
                d="M612 510c0 56.1-45.9 102-102 102H102C45.9 612 0 566.1 0 510V102C0 45.9 45.9 0 102 0h408c56.1 0 102 45.9 102 102v408z"
              />
              <path
                fill="#FFF"
                d="M166.3 133h173.5c32 0 57.7 7.3 77 22s29 36.8 29 66.5c0 18-4.4 33.4-13.2 46.2-8.8 12.8-21.4 22.8-37.8 29.8v1c22 4.7 38.7 15.1 50 31.2 11.3 16.2 17 36.4 17 60.8 0 14-2.5 27.1-7.5 39.2-5 12.2-12.8 22.7-23.5 31.5s-24.3 15.8-41 21-36.5 7.8-59.5 7.8h-164V133zm62.5 149.5h102c15 0 27.5-4.2 37.5-12.8s15-20.8 15-36.8c0-18-4.5-30.7-13.5-38s-22-11-39-11h-102v98.6zm0 156.5h110.5c19 0 33.8-4.9 44.2-14.8 10.5-9.8 15.8-23.8 15.8-41.8 0-17.7-5.2-31.2-15.8-40.8s-25.2-14.2-44.2-14.2H228.8V439z"
              />
            </svg>
            {/* <svg
              width="60px"
              height="60px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" fill="#757575" r="12" />
              <path d="m3.6 3.6h16.8v16.8h-16.8z" fill="#bdbdbd" />
              <path d="m20.4 3.6-8.4 16.8-8.4-16.8z" fill="#fff" />
              <path d="m0 0h24v24h-24z" fill="none" />
            </svg> */}
          </div>
        </div>
      </div>
    );
  }
}

export default LeftPanel;
