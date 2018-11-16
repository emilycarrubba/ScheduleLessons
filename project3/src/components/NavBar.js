import React from "react";
import NavSignIn from "./NavSignIn";
/*import { Link } from "react-router-dom";*/
import "./NavBar.css";

const NavBar = () => (
  <div>
    <nav className="navbar sticky-bottom navbar-light bg-light ">
      <div className="navCss">
        <NavSignIn />
      </div>

      {/* <Link to="/stupage"> link to Student page </Link>
        <Link to="/instrpage">link to Instructt page </Link>*/}
    </nav>
  </div>
);

export default NavBar;
