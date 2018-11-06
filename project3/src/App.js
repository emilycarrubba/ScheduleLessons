import React, { Component } from "react";
// import logo from "./logo.svg";

import "./App.css";
import { Button } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import InstruCard from "./components/InstruCard";
import StuCard from "./components/StuCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
        {/*cards begin*/}
        <StuCard />
        <InstruCard />
      </div>
    );
  }
}

export default App;
