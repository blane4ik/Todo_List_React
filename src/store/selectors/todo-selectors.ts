import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';

export const todoState = (state: RootState) => state.todoReducer;

export const selectTodoList = createSelector(todoState, (state) => state.todos);
export const selectAmountOnPage = createSelector(todoState, (state) => state.limit);
export const selectFilterStatus = createSelector(todoState, (state) => state.filter);
export const selectSortBy = createSelector(todoState, (state) => state.sortBy);
export const spinnerIsLoading = createSelector(todoState, (state) => state.spinnerIsLoading);
