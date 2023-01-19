import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import addToCartReducer from "./reducer/Reducer";

const rootReducer = combineReducers({ addToCartReducer });
const middleware = [thunk];

export const Store = createStore(rootReducer, applyMiddleware(...middleware));
