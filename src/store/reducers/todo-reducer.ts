import { createSlice } from '@reduxjs/toolkit';
import { fetchTodoList } from '../effects/todo-effects';
import { Todo } from '../../interface/todo';
import { StatusFilter } from '../../enums/status-filter.enum';
import { SortBy } from '../../enums/sort-by.enum';

interface TodoInitialState {
    todos: Todo[],
    page: number,
    limit: number,
    filter: StatusFilter,
    search: string,
    sortBy: string,
    spinnerIsLoading: boolean
}

const initialState: TodoInitialState = {
    todos: [],
    page: 1,
    limit: 10,
    filter: StatusFilter.ALL,
    search: '',
    sortBy: SortBy.ID,
    spinnerIsLoading: false
}

const todoReducer = createSlice({
    name: 'todoReducer',
    initialState,
    reducers: {
        toggleCompleted: (state, { payload: id }) => {
            return {
                ...state,
                todos: state.todos.map((element) => element.id === id ? {...element, completed: !element.completed} : element)
            }
        },
        changeFilterStatus: (state, { payload }) => {
            return {
                ...state,
                filter: payload
            }
        },
        changeAmountOnPage: (state, { payload }) => {
            return {
                ...state,
                limit: payload
            }
        },
        changeSearchString: (state, { payload }) => {
            return {
                ...state,
                search: payload
            }
        },
        changeSorting: (state, { payload }) => {
            return {
                ...state,
                sortBy: payload
            }
        },
        toggleSpinner: (state, { payload }) => {
            return {
                ...state,
                spinnerIsLoading: payload
            }
        }
        // removeItem: (state, { payload: id }) => {
        //     return {
        //         ...state,
        //         todos: state.todos.filter(element => element.id !== id)
        //     }
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodoList.fulfilled, (state, { payload }) => {
            state.todos = payload;
        });
    }
});

export const {
    toggleCompleted,
    changeFilterStatus,
    changeAmountOnPage,
    changeSearchString,
    changeSorting,
    toggleSpinner
} = todoReducer.actions;
export default todoReducer.reducer;
