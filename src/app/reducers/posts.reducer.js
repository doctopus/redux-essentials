import {SET_POSTS} from "../action_types";

const postsReducer = (state = { posts: []}, action) => {
    if (action.type === SET_POSTS) {
        return { ...state, posts: action.data }
}
    return state;
}

export { postsReducer };