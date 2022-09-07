import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoList, todoState } from '../store/selectors/todo-selectors';
import { Todo } from '../interface/todo';
import { useEffect } from 'react';
import { fetchTodoList } from '../store/effects/todo-effects';

export const useGetTodoList = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const todos: Todo[] = useSelector(selectTodoList);
    const {
        limit,
        filter,
        search,
        sortBy
    } = useSelector(todoState);

    useEffect(() => {
        dispatch(fetchTodoList());
    }, [dispatch, limit, filter, search, sortBy]);

    return todos;
};
