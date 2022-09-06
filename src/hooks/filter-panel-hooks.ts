import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeAmountOnPage,
    changeFilterStatus,
    changeSearchString,
    changeSorting
} from '../store/reducers/todo-reducer';
import { Dispatch } from '@reduxjs/toolkit';
import { debounce } from 'lodash';
import { selectAmountOnPage, selectFilterStatus, selectSortBy } from '../store/selectors/todo-selectors';

export const useFilterSearch = () => {
    const dispatch: Dispatch<any> = useDispatch();

    const search = (event) => {
        dispatch(changeSearchString(event.target.value));
    }

   return useCallback(debounce(search, 300), []);

}

export const useFilterLimit = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const limit = useSelector(selectAmountOnPage);

    const setLimit = useCallback((e) => {
        dispatch(changeAmountOnPage(e.target.value))
    }, [dispatch])


    return [ limit, setLimit ];
}

export const useFilterBy = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const filter = useSelector(selectFilterStatus);

    const setFilter = useCallback((e) => {
        const value = e.target.value;
        dispatch(changeFilterStatus(value))
    }, [dispatch]);

    return [ filter, setFilter ]
}

export const useSortBy = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const sorting = useSelector(selectSortBy);

    const setSorting = useCallback((event) => {
        const value = event.target.value;
        dispatch(changeSorting(value));
    }, [dispatch]);

    return [sorting, setSorting];
}
