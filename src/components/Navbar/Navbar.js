import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ toggle, setToggle }) => {
  const decor = {
    textDecoration: "none",
  };

  return (
    <div className="nav-container">
      <h1>
        <a className="left-side" href="/">
          Princewill.
        </a>
      </h1>
      <ul className={toggle ? "nav-links" : "stay"}>
        <Link style={decor} to="/">
          <li>Home</li>
        </Link>
        <Link style={decor} to="/about">
          <li>About</li>
        </Link>
        <Link style={decor} to="/works">
          <li>Work</li>
        </Link>
        <Link style={decor} to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <div className="bars" onClick={() => setToggle(!toggle)}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
