import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementFun, decrementFun } from "./action";
import questions from "../questions";
export default function Main() {
  console.log(questions);
  const [ref, setRef] = useState(0);
  const [flag, setFlag] = useState(false);
  const score = useSelector((state) => state.scoreReducer.score);
  function handelNext() {
    if (ref >= 0 && ref < 3) {
      setRef((prevState) => prevState + 1);
      setFlag(false);
    } else {
      alert(`Quiz is over !!!  Your Score is ${score}`);
    }
  }
  function handelPrev() {
    if (ref > 0 && ref <= 3) {
      setRef((prevState) => prevState - 1);
      setFlag(true);
    }
  }
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="question">{questions[ref].questionText}</div>
      <div className="options">
        <div className="top">
          <button
            disabled={flag}
            onClick={() => {
              dispatch(incrementFun(questions[ref].answerOptions[0].isCorrect));
              dispatch(decrementFun(questions[ref].answerOptions[0].isCorrect));
              setFlag(true);
            }}
            className="a"
          >
            {questions[ref].answerOptions[0].answerText}
          </button>

          <button
            disabled={flag}
            onClick={() => {
              dispatch(incrementFun(questions[ref].answerOptions[1].isCorrect));
              dispatch(decrementFun(questions[ref].answerOptions[1].isCorrect));
              setFlag(true);
            }}
            className="b"
          >
            {questions[ref].answerOptions[1].answerText}
          </button>
        </div>

        <div className="botton">
          <button
            disabled={flag}
            onClick={() => {
              dispatch(incrementFun(questions[ref].answerOptions[2].isCorrect));
              dispatch(decrementFun(questions[ref].answerOptions[2].isCorrect));
              setFlag(true);
            }}
            className="c"
          >
            {questions[ref].answerOptions[2].answerText}
          </button>

          <button
            disabled={flag}
            onClick={() => {
              dispatch(incrementFun(questions[ref].answerOptions[3].isCorrect));
              dispatch(decrementFun(questions[ref].answerOptions[3].isCorrect));
              setFlag(true);
            }}
            className="d"
          >
            {questions[ref].answerOptions[3].answerText}
          </button>
        </div>
      </div>

      <div className="navigate">
        {/* <button onClick={handelPrev} className="prev">
          PREV
        </button> */}

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
