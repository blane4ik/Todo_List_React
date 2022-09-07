import api from './api';
import { Todo } from '../interface/todo';
import { getCookie } from '../utils/common.utils';

export const fetchTodos = (limit: number, page: number, filterBy: string, search: string, sortBy: string): Promise<Todo[]> => {
    const params = {
        limit,
        page,
        filterBy,
        search,
        sortBy,
        language: getCookie('i18next')
    };
    return api.get('todos', { params }).then(response => {
        return response.data;
    });
};

export const deleteTodo = (id: number): Promise<Todo[]> => {
    const params = {
        id
    };
    return api.delete('todos', { params });
};

export const toggleChecked = (id: number): Promise<Todo[]> => {
    const params = {
        id
    };
    return api.put('todos', null,{ params });
};

export const addTodo = (title: string): Promise<Todo[]> => {
    const body = {
        title
    };
    return api.post('todos', body);
};
