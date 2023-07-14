import React from "react";
import CardList from "./CardList";
import "./Card.css";

function Card({ starships }) {
  const renderCard = starships.map(item => (
    <CardList key={crypto.randomUUID()} starship={item} />
  ));

  return <div className="card-container">{renderCard}</div>;
}

export default Card;
