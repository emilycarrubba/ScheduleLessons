import React from "react";

const TermsAConditions = () => {
  return (
    <div>
      <div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input is-invalid"
              type="checkbox"
              value=""
              id="invalidCheck3"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </div>
  );
};

export default TermsAConditions;
