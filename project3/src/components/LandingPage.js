import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import NavBar from "./NavBar";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <Jumbotron
        mainTitleDisplay="ScheduleLessons"
        jIntro=" Scheduling made quick and simple."
        topText="Welcome to"
      />
      {/*cards begin*/} {/*Instructor card*/}{" "}
      <div className="container">
        <div className="row ">
          <div className="center">
            <div className="col-md-6 center rightSpace ">
              <Card
                cardTitle="Instructors"
                mainText="We understand your a professional. Setup an account to start efficiently managing your business."
                liOne="Managing a business schedule made easy."
                liTwo="We take care of in-app-promotion."
                liThree="You are in full control."
                identity="Instructor"
                pageLink="instrpage"
                servicePgLnk="instructor-service-info"
              />
            </div>{" "}
            <div className="col-md-6 leftSpace ">
              {" "}
              {/*Student card*/}{" "}
              <Card
                cardTitle="Students"
                mainText="Create your account and find an instructor today! Finding a mentor has
    never been so easy.
    "
                liOne="Search for Instructors in your area"
                liTwo="View prospective curriculum."
                liThree="Schedule a day and time."
                identity="Student"
                pageLink="stupage"
                servicePgLnk="student-service-info"
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
