import React from "react";
import "./CardList.css";

function CardList({ starship }) {
  return (
    <div className="item-container">
      <h1>{starship.name}</h1>
    </div>
  );
}

export default CardList;
