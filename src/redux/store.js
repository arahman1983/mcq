import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { answersReducer, userReducer, questionsReducer, appStateReducer } from "./reducers";

const comoseEnhancers =  compose;
export default () => {
  const store = createStore(
    combineReducers({
      answers: answersReducer,
      user: userReducer,
      question: questionsReducer,
      appState: appStateReducer,
    }),
    comoseEnhancers(applyMiddleware(thunk))
  );
  return store;
};
