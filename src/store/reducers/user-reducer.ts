import { User } from '../../interface/user.interface';
import { createSlice } from '@reduxjs/toolkit';
import { userLoginEffect } from '../effects/user-effects';

interface UserInitialState {
    user: User | null
}

const initialState: UserInitialState = {
    user: null
};


const userReducer = createSlice({
    name: 'USER_REDUCER',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(userLoginEffect.fulfilled, (state, { payload }) => {
            state.user = payload;
        });
    }
});

export default userReducer.reducer;
