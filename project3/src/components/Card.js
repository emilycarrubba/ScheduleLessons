import React from "react";
import "./Card.css";

const Card = ({ cardTitle, mainText, liOne, liTwo, liThree, identity }) => (
  <div>
    <div className="card cardBorder">
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{mainText}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{liOne}</li>
        <li className="list-group-item">{liTwo}</li>
        <li className="list-group-item">{liThree}</li>
      </ul>
      <div className="  col-md-12 spanBar">
        <div className="card-body">
          <a href="http://google.com" className="card-link linkSpaceL">
            Create {identity} Account
          </a>
          <span style={{ padding: "15px" }}>{":"}</span>

          <a href="http://google.com" className="card-link linkSpaceR">
            More about this service.
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
