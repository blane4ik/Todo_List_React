import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../api/user-api';

export const userLoginEffect = createAsyncThunk(
    'USER_EFFECT_LOGIN',
    ({ userData, navigate }: any) => {
        return loginUser(userData).then(user => {
            navigate('/');
            return user;
        });
    }
);
