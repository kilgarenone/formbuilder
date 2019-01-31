import React, { Component } from "react";
import { randomString, setItemInLocalStorage } from "../utilities";

export default class Signup extends Component {
  constructor() {
    super();
    this.nonce = randomString(16);
    setItemInLocalStorage("nonce", this.nonce);
  }

  render() {
    const authorizeUrl = `https://mariya.eu.auth0.com/authorize?response_type=id_token token&scope=openid email&client_id=XiO2cMOTID36uksOAmPC4Nv85VukxZOc&connection=google-oauth2&redirect_uri=http://localhost:8080&nonce=${
      this.nonce
    }`;
    return <a href={authorizeUrl}>Signup</a>;
  }
}
