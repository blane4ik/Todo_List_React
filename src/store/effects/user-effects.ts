import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../api/user-api';
import { RoutesPath } from '../../enums/routes-path.enum';

export const userLoginEffect = createAsyncThunk(
    'USER_EFFECT_LOGIN',
    ({ userData, navigate }: any) => {
        return loginUser(userData).then(user => {
            navigate(RoutesPath.TODO);
            return user;
        });
    }
);
