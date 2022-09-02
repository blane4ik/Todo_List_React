import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../api/user-api';

export const userLoginEffect = createAsyncThunk(
    'USER_EFFECT_LOGIN',
    (userInfo: any) => {
        return loginUser(userInfo)
    }
)
