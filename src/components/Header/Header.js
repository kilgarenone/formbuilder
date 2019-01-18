import React from "react";

function Header() {
  return (
    <nav className="nav">
      <ul className="navbar-items">
        <li className="navbar-item">New form</li>
        <li className="navbar-item">Next item</li>
      </ul>
      <style jsx>
        {`
           {
            height: 70px;
            padding: 0 0.5rem;
            background-color: #f1f1f1;
            margin-bottom: 1rem;
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
