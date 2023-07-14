import React from "react";
import "./Score.css";

function Score({ studentScore }) {
  const { date, score } = studentScore;

  return (
    <div className="score-container">
      <h2>Date: {date}</h2>
      <h2>Score: {score}</h2>
    </div>
  );
}

export default Score;
