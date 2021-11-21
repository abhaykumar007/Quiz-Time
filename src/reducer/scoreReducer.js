import { INCREMENTSCORE, DECREMENTSCORE } from "../component/action";

const intial = {
  score: 0,
};

const scoreReducer = (state = intial, action) => {
  switch (action.type) {
    case INCREMENTSCORE: {
      return { score: state.score + 4 };
    }
    case DECREMENTSCORE: {
      return { score: state.score - 1 };
    }
    default: {
      return state;
    }
  }
};

export default scoreReducer;
