import {SET_TODOS, SET_USERS, SET_USERS_LOADING} from "../app/action_types";
import {fetchUsers} from "../services/users.service";
import {fetchTodos} from "../services/todos.service";

const boostrapDataAction = () => {
    return async (dispatch) => {
        dispatch({ type: SET_USERS_LOADING, data: true })
        const users = await fetchUsers();
        dispatch({ type: SET_USERS, data: users })
        dispatch({ type: SET_USERS_LOADING, data: false })

        const todos = await fetchTodos();
        dispatch({ type: SET_TODOS, data: todos })
    }
}

export { boostrapDataAction };