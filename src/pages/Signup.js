import React, { Component } from "react";
import PouchDB from "pouchdb-browser";
import pouchDbAuth from "pouchdb-authentication";
import Input from "../components/Input/Input";
import { toHexCode } from "../utils";

PouchDB.plugin(pouchDbAuth);

export const dummyDB = new PouchDB(`${process.env.DB_BASEURL}`, {
  skip_setup: true
});

export const localDB = new PouchDB("documents");
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
      // await dummyDB.logIn(this.state.username, this.state.password);
      // setRemoteDB(this.state.username);
      const remoteDB = new PouchDB(
        `${process.env.DB_BASEURL}/userdb-${toHexCode(this.state.username)}`,
        {
          skip_setup: true,
          fetch: (url, opts) => fetch(url, { ...opts, credentials: "include" })
        }
      );
      const res = await remoteDB.logIn(
        this.state.username,
        this.state.password
      );
      console.log(res);
      remoteDB.info().then(info => {
        console.log(info);
      });
      // localDB.sync(remoteDB, { live: true, retry: true }).on("error", err => {
      //   console.log("Error:", err);
      // });
    } catch (err) {
      console.log("errrr", err);
    }
  };

  helloDB = () => {
    localDB.put({ hello: 1234 }).then(info => {
      console.log("89090");

      console.log(info);
    });
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
