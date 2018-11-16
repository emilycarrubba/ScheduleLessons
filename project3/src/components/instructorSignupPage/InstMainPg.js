import React from "react";
import Jumbotron from "../Jumbotron";
import FormComplete from "./FormComplete";
import NavBar from "../NavBar";

function InstMainPg() {
  return (
    <div>
      <NavBar />
      <Jumbotron
        mainTitleDisplay="Instructor Sign Up"
        jIntro="set up your profile below."
      />
      <FormComplete />
    </div>
  );
}

export default InstMainPg;
