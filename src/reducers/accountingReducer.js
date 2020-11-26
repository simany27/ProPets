import {LOGIN, REGISTER} from "../actions/AccountingActions";


export const accountingReducer = (state, action) => {
    switch (action.type) {
        case REGISTER:
            return {...state, name: action.payload};
        case LOGIN:
            return {...state, name: action.payload};
    }
}