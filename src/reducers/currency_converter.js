import * as currencyConverter from '../actions/currency_converter';
const defaultState = {
    data: ""
}

export default function(state = defaultState, {type, ...action}) {
    switch(type) {
        case currencyConverter.CURRENCY_CONVERTER: {
            return {
                ...state,
                data : action.payload
            };
        }
      
        default: return state;
    }
}
