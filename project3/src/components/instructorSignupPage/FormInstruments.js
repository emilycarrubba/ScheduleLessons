import React from "react";

const FormInstruments = () => {
  return (
    <div>
      <label htmlFor="selectYourInstruments">
        Please select all the instruments you would like to teach.
      </label>
      <select className="custom-select" multiple>
        <option defaultValue> Open this select menu </option>{" "}
        <option value="1"> One </option> <option value="2"> Two </option>{" "}
        <option value="3"> Three </option>{" "}
      </select>{" "}
    </div>
  );
};

export default FormInstruments;
