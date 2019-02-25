import React, { Component } from "react";
import Input from "../components/Input/Input";
import {
  dummyDB,
  initSyncDataBases,
  remoteDB,
  setRemoteDB,
  localDB
} from "../db";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  setUsername = event => {
    this.setState({ username: event.target.value });
  };

  setPassword = event => {
    this.setState({ password: event.target.value });
  };

  signUp = async e => {
    e.preventDefault();

    try {
      await dummyDB.signUp(this.state.username, this.state.password);
      setRemoteDB(this.state.username);
      await remoteDB.logIn(this.state.username, this.state.password);
      initSyncDataBases();
    } catch (err) {
      console.log("errrr", err);
    }
  };

  helloDB = () => {
    const doc = {
      _id: "mittens",
      name: "Mittens",
      occupation: "kitten",
      age: 3,
      hobbies: [
        "playing with balls of yarn",
        "chasing laser pointers",
        "lookin' hella cute"
      ]
    };
    localDB.put(doc);
  };

  render() {
    return (
      <>
        <h1>Sign up</h1>
        <form onSubmit={this.signUp}>
          <Input
            name="username"
            value={this.state.username}
            onChange={this.setUsername}
          />
          <Input
            name="password"
            value={this.state.password}
            onChange={this.setPassword}
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.helloDB}>Helldb</button>
      </>
    );
  }
}

export default Signup;
