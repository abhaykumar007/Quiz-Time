import { combineReducers } from "redux";
import scoreReducer from "./scoreReducer";

const allReducers = combineReducers({ scoreReducer });

export default allReducers;
