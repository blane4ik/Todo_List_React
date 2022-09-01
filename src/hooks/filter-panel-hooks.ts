import { useEffect, useMemo, useState } from 'react';
import { StatusFilter } from '../enums/status-filter.enum';
import { useSelector } from 'react-redux';
import { selectFilterStatus } from '../store/selectors/todo-selectors';

export const useGetFilteredTodos = ( todos ) => {
    const [ todoList, setTodoList ] = useState(todos);
    const filterValue = useSelector(selectFilterStatus);

    useEffect(() => {
        setTodoList(todos);
    }, [ todos ])

    return useMemo(() => {
        if (filterValue === StatusFilter.COMPLETED) {
            return todoList.filter(todo => todo.completed);
        } else if (filterValue === StatusFilter.TODO) {
            return todoList.filter(todo => !todo.completed);
        } else {
            return todoList;
        }

    }, [ todoList, filterValue ])
}
