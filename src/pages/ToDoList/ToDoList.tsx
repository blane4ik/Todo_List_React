import React from 'react';
import ToDoListItem from '../../components/ToDoListItem/ToDoListItem';
import { Todo } from '../../interface/todo';
import { useGetTodoList } from '../../hooks/todo-list-hooks';
import { useTranslation } from 'react-i18next';

const ToDoList = () => {
    const todos = useGetTodoList();
    const { t } = useTranslation();

    return (
        <div className="overflow-auto mt-2 w-100">
            <div className="d-flex justify-content-center ">
                <div className="w-75 d-flex flex-column align-items-center">
                    {
                        todos.length ? todos.map((todo: Todo) => {
                            return <ToDoListItem key={todo.id} todo={todo}/>;
                        }) :
                            <h2>{ t('NO_DATA') }</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default ToDoList;
