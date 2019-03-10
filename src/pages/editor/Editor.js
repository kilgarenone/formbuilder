import React, { Component } from "react";
import FormColumn from "../../components/FormColumn/FormColumn";
import { parseUrlHash } from "../../utils";
import Header from "../../components/Header/Header";
import PropertiesPanel from "./PropertiesPanel/PropertiesPanel";
import "./editor.scss";
import LeftPanel from "./LeftPanel/LeftPanel";
import Canvas from "./Canvas/Canvas";

export default class Editor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.id = "t-t-theme";
    link.type = "text/css";
    link.href =
      "https://cdn.jsdelivr.net/gh/kilgarenone/custom-build-bootstrap@0.0.3/output/compiled.css";
    document.head.appendChild(link);
    // if (/expires_in/.test(window.location.hash)) {
    //   const expiresIn = parseUrlHash(window.location.hash).expires_in;
    //   // source: https://stackoverflow.com/a/49373716/73323
    //   window.history.replaceState(null, null, " ");

    //   // expires_in from auth0 is in seconds. so we multiply it by 1000
    //   // to convert to milliseconds. lastly, add current unix epoch time.
    //   // this gives us the unix epoch time when the token will expire
    //   localStorage.setItem(
    //     "expires_at",
    //     JSON.stringify(expiresIn * 1000 + new Date().getTime())
    //   );
    // }
  }

  render() {
    return (
      <>
        <Header />
        <div className="cmp-editor">
          <LeftPanel />
          <Canvas />
          <PropertiesPanel />
        </div>
      </>
    );
  }
}
