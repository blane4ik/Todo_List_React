import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todo-reducer';
import userReducer from './reducers/user-reducer';

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

export const store = configureStore({
    reducer: {
        todoReducer,
        userReducer
    },
    middleware
})

export type RootState = ReturnType<typeof store.getState>;
