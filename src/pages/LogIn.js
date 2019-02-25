import React, { Component } from "react";
import Input from "../components/Input/Input";
import { initSyncDataBases, remoteDB, setRemoteDB } from "../db";
import Signup from "./Signup";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  setEmail = event => {
    this.setState({ email: event.target.value });
  };

  setPassword = event => {
    this.setState({ password: event.target.value });
  };

  logIn = async e => {
    e.preventDefault();

    try {
      setRemoteDB(this.state.email);
      await remoteDB.logIn(this.state.email, this.state.password);
      initSyncDataBases();
      console.log("LOGGED IN");
    } catch (err) {
      console.log("errrr", err);
    }
  };

  render() {
    return (
      <>
        <Signup />
        <h1>Log in</h1>
        <form onSubmit={this.logIn}>
          <Input
            name="email"
            value={this.state.email}
            onChange={this.setEmail}
          />
          <Input
            name="password"
            value={this.state.password}
            onChange={this.setPassword}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default LogIn;
