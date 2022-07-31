import { combineReducers } from "redux";
import { reducer as question } from "./questions";

const reducer = combineReducers({
  question,
});

export default reducer;