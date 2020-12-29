import {applyMiddleware, createStore} from "redux";
import {RootReducer} from "../reducers/RootReducer";
import thunk from "redux-thunk";


export const store = createStore(RootReducer, undefined,  applyMiddleware(thunk));
