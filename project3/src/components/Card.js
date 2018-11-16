import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({
  cardTitle,
  mainText,
  liOne,
  liTwo,
  liThree,
  identity,
  pageLink,
  servicePgLnk
}) => (
  <div>
    <div className="card cardBorder">
      {/*card content rendered from app.js page.*/}
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
          <Link to={pageLink} className="card-link linkSpaceL">
            Create {identity} Account
          </Link>
          <span style={{ padding: "15px" }}>{":"}</span>

          <Link to={servicePgLnk}>More about this service.</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
