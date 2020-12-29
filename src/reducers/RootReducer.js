import {combineReducers} from "redux";
import AccountingReducer from "./AccountingReducer";
import NewsReducer from "./NewsReducer"

export const RootReducer = combineReducers({
    accounting: AccountingReducer,
    news: NewsReducer
})