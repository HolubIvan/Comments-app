import { combineReducers } from "redux";
import { likesReducer } from "./reducers/likesReducer";
import { titleReducer } from "./reducers/titleReducer";
import { commentsReducer } from "./reducers/commentsReducer";
import { appReducer } from "./reducers/appReducer";

export const rootReducer = combineReducers({
  likesReducer,
  titleReducer,
  commentsReducer,
  appReducer,
});
