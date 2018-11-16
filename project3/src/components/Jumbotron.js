import React from "react";

const Jumbotron = ({ mainTitleDisplay, jIntro, topText }) => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <p> {topText} </p> <h1 className="display-4"> {mainTitleDisplay} </h1>{" "}
        <p className="lead">{jIntro} </p>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);

export default Jumbotron;
