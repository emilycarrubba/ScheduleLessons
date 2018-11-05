import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Carousel } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              ScheduleLessons
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
                <a class="nav-item nav-link" href="#">
                  Features
                </a>
                <a class="nav-item nav-link" href="#">
                  Pricing
                </a>
                <a class="nav-item nav-link disabled" href="#">
                  Disabled
                </a>
              </div>
            </div>
          </nav>
        </header>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <p>Welcome to</p>
            <h1 class="display-4">ScheduleLessons</h1>
            <p class="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>

        <Button bsStyle="success">Success</Button>
        {/* Contextual button for informational alert messages */}
        {/*cards begin*/}
      </div>
    );
  }
}

export default App;
