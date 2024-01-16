import { configureStore } from '@reduxjs/toolkit';
import { baseReducer } from "./reducers/base.reducer";
import { todoReducer } from "./reducers/todos.reducer";

export const store = configureStore({
  reducer: {
    base: baseReducer,
    todos: todoReducer,
  },
});
