import React, { Component } from "react";
// import logo from "./logo.svg";

import "./App.css";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
        {/*cards begin*/}
        <div className="container">
          <div className="row ">
            <div className="center">
              <div className="col-md-6 center rightSpace ">
                <Card
                  cardTitle="Instructors"
                  mainText="We understand you're a professional. Setup an account to start today!"
                  liOne="Managing a business schedule made easy."
                  liTwo="We take care of in-app-promotion."
                  liThree="You are in full control."
                  identity="Instructor"
                />
              </div>
              <div className="col-md-6 leftSpace ">
                <Card
                  cardTitle="Students"
                  mainText="Create your account and find an instructor today!"
                  liOne="Search for Instructors in your area. It's never been so easy!"
                  liTwo="View prospective curriculum."
                  liThree="Schedule a day and time."
                  identity="Student"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
