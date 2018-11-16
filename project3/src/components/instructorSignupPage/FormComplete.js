import React from "react";
import "./FormComplete.css";
import FormBasicInfo from "./FormBasicInfo";
import FormDrpDwnUSStates from "./FormDrpDwnUSStates";
import FormInstruments from "./FormInstruments";
import FormYesOrNos from "./FormYesOrNos";
import TermsAConditions from "./TermsAConditions";

const FormComplete = () => {
  return (
    <div>
      <div id="wrap-form-div">
        <FormBasicInfo />
        <FormDrpDwnUSStates />
        <FormInstruments />
        <FormYesOrNos />
        <TermsAConditions />
      </div>
    </div>
  );
};

export default FormComplete;
