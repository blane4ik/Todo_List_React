import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import GhostButton from '../UI/GhostButton/GhostButton';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../store/effects/todo-effects';
import { Dispatch } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

const AddTodo = ({ close }) => {
    const { t } = useTranslation();
    const dispatch: Dispatch<any> = useDispatch();
    const [ todoName, setTodoName ] = useState('');

    function updateName(event) {
        const value = event.target.value;
        setTodoName(value);
    }

    function addTodo() {
        dispatch(addNewTodo(todoName));
        close();
    }

    return (
        <div className="d-flex flex-column">
            <span className="label pb-3">{ t("ADD_TODO") }: </span>
            <Input value={todoName} onChange={updateName} className="p-3" />
            <hr className="my-4"/>
            <GhostButton onClick={addTodo} name='Add' className="p-3" />
        </div>
    );
};

export default AddTodo;
