import { combineReducers } from 'redux'

import session from "./session";
import currency_converter from "./currency_converter";

export default combineReducers({
    session,
    currency_converter
})