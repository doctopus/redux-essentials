import { SET_QUOTES } from '../action_types';

const quoteReducer = (state={quotes: []}, action) => {
    if (action.type === SET_QUOTES) {
        return {...state, quote: action.quote}
}
    return state;
}

export { quoteReducer };