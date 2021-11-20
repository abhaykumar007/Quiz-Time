import React from "react";
import { useSelector } from "react-redux";

export default function Nav() {
  const score = useSelector((state) => state.scoreReducer.score);
  console.log(score);
  return (
    <div className="nav">
      <h1>Quiz Time</h1>
      <h2>{score}</h2>
    </div>
  );
}
