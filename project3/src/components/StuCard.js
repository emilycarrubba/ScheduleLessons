import React from "react";

const StuCard = () => (
  <div>
    <div class="card" styles="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Students</h5>
        <p class="card-text">
          Create your account and find an instructor today! Finding a mentor has
          never been so easy.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Search for Instructors in your area.</li>
        <li class="list-group-item">View prospective curriculum.</li>
        <li class="list-group-item">Schedule a day and time.</li>
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

export default StuCard;
