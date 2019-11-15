import { getActionType, createAction } from './utils';
import internalApi from '../config/internalApi';

const prefix = 'action.currency_converter';
export const CURRENCY_CONVERTER = getActionType(prefix)('CURRENCY_CONVERTER');

export const currencyConverter = (base, change) => dispatch => {
    return internalApi.get(`latest?base=${base}&amp;symbols=${change}`).then(res => {
        dispatch(createAction(CURRENCY_CONVERTER, res));
    }).catch(err => {
        console.log(err.response);
    })
}