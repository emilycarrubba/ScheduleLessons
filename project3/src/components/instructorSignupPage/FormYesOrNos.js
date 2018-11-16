import React from "react";

const FormYesOrNos = () => {
  return (
    <div>
      {/* Are you willing to instruct remote?(Via webcam, skype etc.)*/}
      <div className=" ">
        Are you willing to instruct remote?(Via webcam, skype etc.)
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio1"
            name="customRadio"
            className="custom-control-input"
          />
          <label className="custom-control-label" htmlFor="customRadio1">
            Toggle this custom radio
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio2"
            name="customRadio"
            className="custom-control-input"
          />
          <label className="custom-control-label" htmlFor="customRadio2">
            Or toggle this other custom radio
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormYesOrNos;
