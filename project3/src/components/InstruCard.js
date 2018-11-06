import React from "react";

const InstruCard = () => (
  <div>
    <div class="card" styles="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Instructors</h5>
        <p class="card-text">
          Setup an account to start managing your business.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Managing a business schedule made easy.</li>
        <li class="list-group-item">We take care of in-app-promotion.</li>
        <li class="list-group-item">You are in full control.</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">
          Create Account
        </a>
        <span> | </span>
        <a href="#" class="card-link">
          More about this service.
        </a>
      </div>
    </div>
  </div>
);

export default InstruCard;
