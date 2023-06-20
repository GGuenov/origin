import { createStore, applyMiddleware } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
//import { createStoreHook } from "react-redux";
//const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_;
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
