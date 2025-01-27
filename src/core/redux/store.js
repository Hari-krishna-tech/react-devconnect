import {createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk"
const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware))); // use a proxy to access your store 
// rootReducer
// initailstate
// middleware spec

export default store;