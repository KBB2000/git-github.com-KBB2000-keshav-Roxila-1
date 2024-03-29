import { applyMiddleware, compose, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import {thunk} from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = legacy_createStore(reducer,composeEnhancer(applyMiddleware(thunk)))
