import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../global/global-reducer";

import rootSaga from "../global/global-saga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewareCollection = [sagaMiddleware];
const middlewareEnhancer = true
  ? composeWithDevTools(applyMiddleware(...middlewareCollection))
  : applyMiddleware(...middlewareCollection);

const enahncerCollection = [middlewareEnhancer];
// Mount it on the Store
const store = createStore(rootReducer, compose(...enahncerCollection));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
