import React from "react";
import { getCookie } from "../../utils";

function Header() {
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

export default Header;
