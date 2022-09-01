import './ToDoListItem.scss';
import RoundCheckbox from '../UI/RoundCheckbox/RoundCheckbox';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { removeTodoFromList, toggleTodoItemChecked } from '../../store/effects/todo-effects';
import { useGetTodoItemClasses } from '../../hooks/todo-list-item-hooks';
import { useTranslation } from 'react-i18next';

const ToDoListItem = ({ todo }) => {
    const { i18n } = useTranslation();
    const dispatch: Dispatch<any> = useDispatch();
    const labelClasses = useGetTodoItemClasses(todo.completed);

    function checkedHandler() {
        dispatch(toggleTodoItemChecked(todo.id));
    }

    function removeHandler() {
        dispatch(removeTodoFromList(todo.id));
    }

    function getLocaleProperty() {
        return todo['title_' + i18n.language];
    }

    return (
        <div className="todo-list-item col-12 d-flex align-items-center">
            <div className="row align-items-center w-100">
                <RoundCheckbox checked={todo.completed} onChange={checkedHandler} className="col-1"/>
                <span className={labelClasses.join(' ')}>{ todo.id }. { getLocaleProperty() }</span>
                <div className="col-1">
                    <AiOutlineCloseCircle onClick={removeHandler} className="close"/>
                </div>
            </div>
        </div>
    );
};

export default ToDoListItem;
