import React from "react";
import "./Style.css";

const Card = props => (
  <div className="card">
    <div className="name-tag">
      <h2>{props.name}</h2>
    </div>
    <div className="img-container">
      <img src={props.image} alt="" />
    </div>
    <div className="content">
      <p className="character-bio">
        {props.bio !== ""
          ? props.bio
          : "Sorry, there is no biographical information available for this character!"}
      </p>
    </div>
    <div className="remove-card" onClick={() => props.removeCard(props.id)}>
      &times;
    </div>
  </div>
);

export default Card;
