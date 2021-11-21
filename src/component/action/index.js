export const INCREMENTSCORE = "INCREMENTSCORE";
export const DECREMENTSCORE = "DECREMENTSCORE";

export function incrementFun() {
  return { type: INCREMENTSCORE };
}

export function decrementFun() {
  return { type: DECREMENTSCORE };
}
