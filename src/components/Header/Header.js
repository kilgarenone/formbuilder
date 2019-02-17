import React, { Component } from "react";
import { getCookie } from "../../utils";
import goFetch from "../../lib/fetch";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    localStorage.removeItem("expires_at");
    goFetch("/logout");
    // window.location.href = `https://mariya.eu.auth0.com/v2/logout?client_id=${
    //   process.env.AUTH0_CLIENT_ID
    // }&returnTo=http://localhost:8081/`;
  };

  render() {
    return (
      <nav className="nav">
        <ul className="navbar-items">
          <li className="navbar-item">New form</li>
          <li className="navbar-item">Next item</li>
          <button
            onClick={() =>
              fetch("http://localhost:3000/private", {
                headers: {
                  Authorization: `Bearer ${getCookie("access_token")}`
                }
              })
            }
          >
            fetch with access_token
          </button>
          <button onClick={this.logout}>Logout</button>
        </ul>
        <style jsx>
          {`
             {
              height: 70px;
              padding: 0 0.5rem;
              background-color: #f1f1f1;
            }

            .navbar-items {
              display: flex;
            }

            .navbar-item:not(:last-child) {
              margin-right: 0.5rem;
            }
          `}
        </style>
      </nav>
    );
  }
}

export default Header;
