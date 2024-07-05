// src/redux/store.js
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import taskReducer from "./reducers/taskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
