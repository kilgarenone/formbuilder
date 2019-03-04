import React, { Component } from "react";
import "./header.scss";

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  // logout = () => {
  //   localStorage.removeItem("expires_at");
  //   goFetch("/logout");
  //   // window.location.href = `https://mariya.eu.auth0.com/v2/logout?client_id=${
  //   //   process.env.AUTH0_CLIENT_ID
  //   // }&returnTo=http://localhost:8081/`;
  // };

  render() {
    return (
      <nav className="cmp-header">
        <ul className="flex">
          <li>New form</li>
          <li>Next item</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
