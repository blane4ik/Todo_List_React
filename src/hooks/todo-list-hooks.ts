import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAmountOnPage,
    selectFilterStatus,
    selectSearchString, selectSortBy,
    selectTodoList
} from '../store/selectors/todo-selectors';
import { Todo } from '../interface/todo';
import { useEffect } from 'react';
import { fetchTodoList } from '../store/effects/todo-effects';

export const useGetTodoList = () => {
    const dispatch: Dispatch<any> = useDispatch();

    const todos: Todo[] = useSelector(selectTodoList);
    const amountOnPage: number = useSelector(selectAmountOnPage);
    const filter: number = useSelector(selectFilterStatus);
    const search: string = useSelector(selectSearchString);
    const sortBy: string = useSelector(selectSortBy);

    useEffect(() => {
        dispatch(fetchTodoList());
    }, [dispatch, amountOnPage, filter, search, sortBy]);

     return todos;
}
