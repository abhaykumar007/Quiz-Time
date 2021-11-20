export const INCREMENTSCORE = "INCREMENTSCORE";
export const DECREMENTSCORE = "DECREMENTSCORE";

export function incrementFun(data) {
  return { type: INCREMENTSCORE, payload: data };
}

export function decrementFun(data) {
  return { type: DECREMENTSCORE, payload: data };
}
