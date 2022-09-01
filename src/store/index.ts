import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo-reducer/todo-reducer';

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

export const store = configureStore({
    reducer: {
        todoReducer
    },
    middleware
})

export type RootState = ReturnType<typeof store.getState>;
