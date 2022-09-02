import { RootState } from '../index';
import { createSelector } from '@reduxjs/toolkit';

export const userState = (state: RootState) => state.userReducer;

export const selectUser = createSelector(userState, (state) => state.user);
export const selectUserIsLoggedIn = createSelector(userState, (state) => !!state.user);
