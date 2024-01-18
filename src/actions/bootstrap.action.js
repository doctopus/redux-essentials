import {SET_USERS, SET_USERS_LOADING, SET_TODOS, SET_POSTS, SET_QUOTES } from "../app/action_types";
import {fetchUsers} from "../services/users.service";
import {fetchTodos} from "../services/todos.service";
import {fetchPosts} from "../services/posts.service";
import {fetchQuotes} from "../services/quotes.service";

const boostrapDataAction = () => {
    return async (dispatch) => {
        dispatch({ type: SET_USERS_LOADING, data: true })
        const users = await fetchUsers();
        dispatch({ type: SET_USERS, data: users })
        dispatch({ type: SET_USERS_LOADING, data: false })

        const todos = await fetchTodos();
        dispatch({ type: SET_TODOS, data: todos })

        const posts = await fetchPosts();
        dispatch({ type: SET_POSTS, data: posts })

        const quotes = await fetchQuotes();
        dispatch({type: SET_QUOTES, data: quotes})
    }
}

export { boostrapDataAction };