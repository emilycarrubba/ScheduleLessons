import React from "react";
import FormDrpDwnUSStates from "./FormDrpDwnUSStates";

/*import "./FormBasicInfo.css";
 */

const FormBasicInfo = () => {
  return (
    <div>
      {/* /////First, Last, Username, City, State, Zip */}
      <form>
        <div className="row">
          <div className="indiviDiv">
            {/*div above ^ bootstrap ;; className="form-row"*/}
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer01">First name</label>
              <input
                type="text"
                className="form-control is-valid"
                id="validationServer01"
                placeholder="First name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer02">Last name</label>
              <input
                type="text"
                className="form-control is-valid"
                id="validationServer02"
                placeholder="Last name"
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationServerUsername">Username</label>

            <div className="input-group-prepend" />
            <input
              type="text"
              className="form-control is-invalid"
              id="validationServerUsername"
              placeholder="Username"
              aria-describedby="inputGroupPrepend3"
              required
            />
            {/* <div className="invalid-feedback">Please choose a username.</div>*/}
          </div>
          <div className="col-md-4 mb-3">
            <div className="form-group">
              <label htmlFor="exampleDropdownFormPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Password"
              />
              <small id="passwordHelpBlock" className="form-text text-muted">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </small>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="e-mail@email.com"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
          </div>
        </div>

        <div className="form-row indiviDiv">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationServer03">City</label>
            <input
              type="text"
              className="form-control is-invalid"
              id="validationServer03"
              placeholder="City"
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationServer04">State</label>
            <FormDrpDwnUSStates />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationServer05">Zip</label>
            <input
              type="text"
              className="form-control is-invalid"
              id="validationServer05"
              placeholder="Zip"
              required
            />
          </div>
        </div>
      </form>
      {/* //// instrument select */}
    </div>
  );
};

export default FormBasicInfo;
