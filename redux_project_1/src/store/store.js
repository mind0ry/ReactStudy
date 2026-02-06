import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import {createLogger} from "redux-logger";
import {thunk, thunkunk} from "redux-thunk"
import {combineReducers} from 'redux';

const logger=createLogger()
const middleware = [thunk, logger];
const store=configureStore({
    reducer:rootReducer,
    devTools:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default store;