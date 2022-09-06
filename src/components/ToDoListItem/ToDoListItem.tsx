import './ToDoListItem.scss';
import RoundCheckbox from '../UI/RoundCheckbox/RoundCheckbox';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { removeTodoFromList, toggleTodoItemChecked } from '../../store/effects/todo-effects';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const ToDoListItem = ({ todo }) => {
    const { i18n } = useTranslation();
    const dispatch: Dispatch<any> = useDispatch();

    return (
        <div className="todo-list-item col-12 d-flex align-items-center">
            <div className="row align-items-center w-100">
                <RoundCheckbox checked={todo.completed} onChange={() => dispatch(toggleTodoItemChecked(todo.id))} className="col-1"/>
                <span className={classNames('label', 'col-10', 'px-5', { crossed: todo.completed })}>
                    { todo.id }. { todo['title_' + i18n.language] }
                </span>
                <div className="col-1">
                    <AiOutlineCloseCircle onClick={() => dispatch(removeTodoFromList(todo.id))} className="close"/>
                </div>
            </div>
        </div>
    );
};

export default ToDoListItem;
