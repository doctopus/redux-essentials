import {REMOVE_USERS, SET_THEME, SET_USERS, SET_USERS_LOADING} from "../action_types";

const initialUserState = {
    users: ['user1'],
    isLoading: false,
    settings: {
        theme: 'default'
    }
}

const baseReducer = (state = initialUserState, action) => {
    const { type, data } = action;

    if (type === SET_USERS) {
        return {
            ...state,
            users: data,
        }
    }

    if (type === REMOVE_USERS) {
        return {
            users: [],
        }
    }

    if (type === SET_USERS_LOADING) {
        return {
            ...state,
            isLoading: data,
        }
    }

    if (type === SET_THEME) {
        return {
            ...state,
            settings: {
                theme: data,
            }
        }
    }

    return state;
}

export { baseReducer };