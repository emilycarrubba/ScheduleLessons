import React, { Component } from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/LandingPage";
import InstMainPg from "./components/instructorSignupPage/InstMainPg";
import StuJumbo from "./components/StuPage";
import InstService from "./components/InstService";
import StuService from "./components/StuService";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />

          <Route exact path="/instrpage" component={InstMainPg} />
          <Route exact path="/stupage" component={StuJumbo} />

          <Route
            exact
            path="/instructor-service-info"
            component={InstService}
          />
          <Route exact path="/student-service-info" component={StuService} />
        </div>
      </Router>
    );
  }
}

export default App;
