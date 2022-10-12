import { createStore , combineReducers , applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { resListReducers } from "./reducers/resReducers";

const reducers = combineReducers({
resReducer:resListReducers
})

const Middleware = [thunk]

const store = createStore(reducers, applyMiddleware(...Middleware))

export default store