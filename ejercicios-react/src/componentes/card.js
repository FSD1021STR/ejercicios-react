import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="container">
      <img src={props.src} width="150px" height="150px" />
      <div>
        <p>
          {props.name} {props.surname}
        </p>
        <p>Age: {props.age}</p>
      </div>
    </div>
  );
};

export default Card;
