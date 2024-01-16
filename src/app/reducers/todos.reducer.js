import {SET_TODOS} from "../action_types";

const todoReducer = (state = { tasks: []}, action) => {
    if (action.type === SET_TODOS) {
        return { ...state, tasks: action.data }
    }

    return state;
}

export { todoReducer };