import { addTodo, deleteTodo, fetchTodos, toggleChecked } from '../../api/todo-api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { todoState } from '../selectors/todo-selectors';
import { toggleCompleted } from '../reducers/todo-reducer';


export const fetchTodoList = createAsyncThunk(
    'TODO_LIST_FETCH_LIST',
    async (args, { getState }) => {
        const state: any = getState();
        const todoStore = todoState(state);
        const {
            limit,
            page,
            filter,
            search,
            sortBy
        } = todoStore;

        return fetchTodos(limit, page, filter, search, sortBy);
    }
);

export const deleteTodoItem = createAsyncThunk(
    'TODO_LIST_REMOVE_ITEM',
    async (id: number, { dispatch }) => {
        return deleteTodo(id).then(() => {
            dispatch(fetchTodoList());
        });
    }
);

export const toggleTodoItemChecked = createAsyncThunk(
    'TODO_LIST_TOGGLE_CHECKED',
    async (id: number, { dispatch }) => {
        return toggleChecked(id).then(() => {
            dispatch(toggleCompleted(id));
        });
    }
);

export const addNewTodo = createAsyncThunk(
    'TODO_LIST_ADD_NEW_TODO',
    async (title: string, { dispatch }) => {
        return addTodo(title).then(() => {
            dispatch(fetchTodoList());
        });
    }
);

export const removeTodoFromList = createAsyncThunk(
    'TODO_LIST_ADD_NEW_TODO',
    async (id: number, { dispatch }) => {
        return deleteTodo(id).then(() => {
            dispatch(fetchTodoList());
        });
    }
);
