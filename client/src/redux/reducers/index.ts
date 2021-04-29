import charactersReducer from "./charactersReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  charactersReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
