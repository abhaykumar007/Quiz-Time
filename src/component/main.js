import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementFun, decrementFun } from "./action";
import questions from "../questions";
export default function Main() {
  console.log(questions);
  const [ref, setRef] = useState(0);
  const [flag, setFlag] = useState(false);
  const [style, setStyle] = useState("");
  const score = useSelector((state) => state.scoreReducer.score);
  console.log("score in main", score);
  function handelNext() {
    if (ref >= 0 && ref < 3) {
      setRef((prevState) => prevState + 1);
      setFlag(false);
    } else {
      alert(`Quiz is over !!!  Your Score is ${score}`);
    }
  }
  const dispatch = useDispatch();

  function handelClick(isCorrect) {
    isCorrect ? dispatch(incrementFun()) : dispatch(decrementFun());
    setFlag(true);
  }

  return (
    <div className="container">
      <div className="question">{questions[ref].questionText}</div>
      <div className="options">
        {questions[ref].answerOptions.map((element, i) => {
          console.log(i);
          return (
            <button
              disabled={flag}
              onClick={() => {
                handelClick(element.isCorrect);
              }}
            >
              {element.answerText}
            </button>
          );
        })}
      </div>

      <div className="navigate">
        <button onClick={handelNext} className="next">
          NEXT
        </button>
        <div className="score">
          <h3>Score: </h3>
          <h3 className="displayScore"> {score}</h3>
        </div>
      </div>
    </div>
  );
}

// onClick={() => {
//             dispatch(incrementFun(questions[ref].answerOptions[0].isCorrect));
//             dispatch(decrementFun(questions[ref].answerOptions[0].isCorrect));
//           }}
