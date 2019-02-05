import React, { Component } from "react";
import Header from "components/Header/Header";
import FormColumn from "components/FormColumn/FormColumn";
import EditorLayout from "./EditorLayout";
import { parseUrlHash } from "../../utils";

export default class Editor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (/expires_in/.test(window.location.hash)) {
      const expiresIn = parseUrlHash(window.location.hash).expires_in;
      // expires_in from auth0 is in seconds. so we multiply it by 1000
      // to convert to milliseconds. lastly, add current unix epoch time.
      // this gives us the unix epoch time when the token will expire
      localStorage.setItem(
        "expires_at",
        JSON.stringify(expiresIn * 1000 + new Date().getTime())
      );
    }
  }

  render() {
    return (
      <>
        <Header />
        <EditorLayout>
          <FormColumn />
        </EditorLayout>
      </>
    );
  }
}
