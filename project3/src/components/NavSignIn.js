import React from "react";
import "./NavSignIn.css";

const NavSignIn = () => (
  <div>
    <form className="form-inline ">
      <div className="form-group">
        Email:
        <label className="sr-only" htmlFor="exampleInputEmail3">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail3"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        Password:
        <label className="sr-only" htmlFor="exampleInputPassword3">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword3"
          placeholder="Password"
        />
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" /> Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-default">
        Sign in
      </button>
    </form>
  </div>
);

export default NavSignIn;
