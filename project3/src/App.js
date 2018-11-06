import React, { Component } from "react";
// import logo from "./logo.svg";
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
            <p class="lead">Scheduling made quick and simple.</p>
          </div>
        </div>

        <Button bsStyle="success">Success</Button>

        {/* Contextual button for informational alert messages */}
        {/*cards begin*/}

        <div class="card" styles="width: 18rem;">
          <img
            class="card-img-top"
            src=".../100px180/?text=Image cap"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Instructors</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
        <div class="card" styles="width: 18rem;">
          <img
            class="card-img-top"
            src=".../100px180/?text=Image cap"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Students</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
